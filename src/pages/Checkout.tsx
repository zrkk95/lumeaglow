import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Lock, CreditCard, Truck } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { createCheckoutAndRedirect, isShopifyConfigured } from '@/lib/shopify';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { toast } from '@/hooks/use-toast';
import { Helmet } from 'react-helmet-async';

const Checkout = () => {
  const { items, totalPrice, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    postalCode: '',
    phone: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation basique
    const requiredFields = ['email', 'firstName', 'lastName', 'address', 'city', 'postalCode'];
    const missingFields = requiredFields.filter(field => !formData[field as keyof typeof formData]);

    if (missingFields.length > 0) {
      toast({
        title: "Champs manquants",
        description: "Veuillez remplir tous les champs obligatoires.",
        variant: "destructive",
      });
      return;
    }

    setIsProcessing(true);

    // Si Shopify est configuré, rediriger vers le checkout Shopify
    if (isShopifyConfigured()) {
      try {
        const lines = items.map((item) => ({
          merchandiseId: item.variantId,
          quantity: item.quantity,
        }));
        await createCheckoutAndRedirect(lines);
        return;
      } catch (error) {
        console.error('Erreur Shopify checkout:', error);
      }
    }

    // Simulation du processus de commande (à remplacer par l'intégration réelle)
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Succès - redirection vers la page de confirmation
    clearCart();
    window.location.href = '/confirmation';
  };

  if (items.length === 0) {
    return (
      <>
        <Header />
        <main className="min-h-screen pt-24 pb-16 bg-background">
          <div className="container-custom">
            <div className="max-w-lg mx-auto card-premium p-8 text-center">
              <h1 className="text-2xl font-bold mb-4">Votre panier est vide</h1>
              <p className="text-muted-foreground mb-6">
                Ajoutez des produits à votre panier pour passer commande.
              </p>
              <Link to="/#produit" className="btn-primary">
                Voir le produit
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Finaliser la commande | AquaGlow</title>
        <meta name="description" content="Finalisez votre commande AquaGlow. Paiement sécurisé et livraison rapide." />
      </Helmet>

      <Header />

      <main className="min-h-screen pt-24 pb-16 bg-background">
        <div className="container-custom">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link
              to="/panier"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour au panier
            </Link>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold mb-8">
            Finaliser la <span className="gradient-text">commande</span>
          </h1>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-6">
              {/* Contact Info */}
              <div className="card-premium p-6">
                <h2 className="text-lg font-semibold mb-4">Informations de contact</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Adresse e-mail *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="votre@email.fr"
                      className="input-premium"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Téléphone (optionnel)
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="06 12 34 56 78"
                      className="input-premium"
                    />
                  </div>
                </div>
              </div>

              {/* Shipping Address */}
              <div className="card-premium p-6">
                <h2 className="text-lg font-semibold mb-4">Adresse de livraison</h2>
                <div className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Prénom *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="Jean"
                        className="input-premium"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Nom *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Dupont"
                        className="input-premium"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Adresse *
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="123 Rue de la Paix"
                      className="input-premium"
                      required
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Ville *
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        placeholder="Paris"
                        className="input-premium"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Code postal *
                      </label>
                      <input
                        type="text"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleInputChange}
                        placeholder="75001"
                        className="input-premium"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isProcessing}
                className="btn-primary w-full flex items-center justify-center gap-2 py-4"
              >
                {isProcessing ? (
                  <>
                    <span className="animate-spin w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full" />
                    Traitement en cours...
                  </>
                ) : (
                  <>
                    <Lock className="w-5 h-5" />
                    Payer {totalPrice.toFixed(2)} €
                  </>
                )}
              </button>

              {/* Trust badges */}
              <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4" />
                  Paiement sécurisé
                </div>
                <div className="flex items-center gap-2">
                  <CreditCard className="w-4 h-4" />
                  CB, Visa, Mastercard
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4" />
                  Livraison gratuite
                </div>
              </div>
            </form>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="card-premium p-6 sticky top-24">
                <h2 className="text-lg font-semibold mb-4">Votre commande</h2>

                <div className="space-y-4 mb-6">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <div className="w-16 h-16 bg-secondary rounded-lg flex-shrink-0 overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm truncate">{item.title}</p>
                        <p className="text-sm text-muted-foreground">
                          Qté: {item.quantity}
                        </p>
                      </div>
                      <p className="font-medium">
                        {(item.price * item.quantity).toFixed(2)} €
                      </p>
                    </div>
                  ))}
                </div>

                <div className="border-t border-border pt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Sous-total</span>
                    <span>{totalPrice.toFixed(2)} €</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Livraison</span>
                    <span className="text-green-600">Gratuite</span>
                  </div>
                  <div className="flex justify-between font-semibold text-lg pt-2 border-t border-border">
                    <span>Total</span>
                    <span className="gradient-text">{totalPrice.toFixed(2)} €</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Checkout;
