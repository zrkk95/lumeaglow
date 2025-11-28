import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ArrowLeft, ArrowRight, ShoppingBag } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { createCheckoutAndRedirect, isShopifyConfigured } from '@/lib/shopify';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';

const Panier = () => {
  const { items, totalItems, totalPrice, updateQuantity, removeItem } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const handleCheckout = async () => {
    if (!isShopifyConfigured()) {
      window.location.href = '/checkout';
      return;
    }

    setIsCheckingOut(true);
    try {
      const lines = items.map((item) => ({
        merchandiseId: item.variantId,
        quantity: item.quantity,
      }));
      await createCheckoutAndRedirect(lines);
    } catch (error) {
      console.error('Erreur checkout:', error);
      window.location.href = '/checkout';
    } finally {
      setIsCheckingOut(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Votre Panier | AquaGlow</title>
        <meta name="description" content="Consultez et gérez votre panier AquaGlow. Finalisez votre commande de Lampe Méduse LED." />
      </Helmet>

      <Header />

      <main className="min-h-screen pt-24 pb-16 bg-background">
        <div className="container-custom">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour à la boutique
            </Link>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold mb-8">
            Votre <span className="gradient-text">Panier</span>
          </h1>

          {items.length === 0 ? (
            <div className="card-premium p-12 text-center">
              <ShoppingBag className="w-20 h-20 mx-auto text-muted-foreground/30 mb-6" />
              <h2 className="text-2xl font-semibold mb-4">Votre panier est vide</h2>
              <p className="text-muted-foreground mb-8">
                Découvrez notre Lampe Méduse AquaGlow et apportez la magie de l'océan chez vous.
              </p>
              <Link to="/#produit" className="btn-primary inline-flex items-center gap-2">
                Voir le produit
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="card-premium p-4 sm:p-6 flex flex-col sm:flex-row gap-4"
                  >
                    {/* Image */}
                    <div className="w-full sm:w-32 h-32 bg-secondary rounded-xl flex-shrink-0 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Info */}
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                      <p className="text-primary font-bold text-xl mb-4">
                        {item.price.toFixed(2)} €
                      </p>

                      <div className="flex items-center justify-between">
                        {/* Quantity */}
                        <div className="flex items-center border border-border rounded-xl overflow-hidden">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-2 hover:bg-secondary transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-12 text-center font-medium">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-2 hover:bg-secondary transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>

                        {/* Remove */}
                        <button
                          onClick={() => removeItem(item.id)}
                          className="p-2 text-muted-foreground hover:text-destructive transition-colors"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>

                    {/* Subtotal */}
                    <div className="text-right sm:min-w-[100px]">
                      <p className="text-sm text-muted-foreground">Sous-total</p>
                      <p className="font-bold text-lg">
                        {(item.price * item.quantity).toFixed(2)} €
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="card-premium p-6 sticky top-24">
                  <h2 className="text-xl font-semibold mb-6">Récapitulatif</h2>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">
                        Sous-total ({totalItems} article{totalItems > 1 ? 's' : ''})
                      </span>
                      <span>{totalPrice.toFixed(2)} €</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Livraison</span>
                      <span className="text-green-600">Gratuite</span>
                    </div>
                    <div className="border-t border-border pt-4">
                      <div className="flex justify-between">
                        <span className="font-semibold">Total</span>
                        <span className="text-2xl font-bold gradient-text">
                          {totalPrice.toFixed(2)} €
                        </span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={handleCheckout}
                    disabled={isCheckingOut}
                    className="btn-primary w-full flex items-center justify-center gap-2 mb-4"
                  >
                    {isCheckingOut ? (
                      <>
                        <span className="animate-spin w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full" />
                        Redirection...
                      </>
                    ) : (
                      <>
                        Commander
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-center text-muted-foreground">
                    Paiement 100% sécurisé via Shopify
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Panier;
