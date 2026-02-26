import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ArrowLeft, ArrowRight, ShoppingBag, Loader2 } from 'lucide-react';
import { useCartStore } from '@/stores/cartStore';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';

const Panier = () => {
  const { items, isLoading, isSyncing, updateQuantity, removeItem, getCheckoutUrl } = useCartStore();
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + (parseFloat(item.price.amount) * item.quantity), 0);

  const handleCheckout = () => {
    const checkoutUrl = getCheckoutUrl();
    if (checkoutUrl) {
      window.open(checkoutUrl, '_blank');
    }
  };

  return (
    <>
      <Helmet>
        <title>Votre Panier | LumeaGlow</title>
        <meta name="description" content="Consultez et gérez votre panier LumeaGlow. Finalisez votre commande de Lampe Méduse LED." />
      </Helmet>

      <Header />

      <main className="min-h-screen pt-24 pb-16 bg-background">
        <div className="container-custom">
          <div className="mb-8">
            <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="w-4 h-4" /> Retour à la boutique
            </Link>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold mb-8">
            Votre <span className="gradient-text">Panier</span>
          </h1>

          {items.length === 0 ? (
            <div className="card-premium p-12 text-center">
              <ShoppingBag className="w-20 h-20 mx-auto text-muted-foreground/30 mb-6" />
              <h2 className="text-2xl font-semibold mb-4">Votre panier est vide</h2>
              <p className="text-muted-foreground mb-8">Découvrez notre Lampe Méduse LumeaGlow et apportez la magie de l'océan chez vous.</p>
              <Link to="/#produit" className="btn-primary inline-flex items-center gap-2">
                Voir le produit <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-4">
                {items.map((item) => {
                  const image = item.product.node.images?.edges?.[0]?.node;
                  const itemPrice = parseFloat(item.price.amount);
                  return (
                    <div key={item.variantId} className="card-premium p-4 sm:p-6 flex flex-col sm:flex-row gap-4">
                      <div className="w-full sm:w-32 h-32 bg-secondary rounded-xl flex-shrink-0 overflow-hidden">
                        {image && <img src={image.url} alt={image.altText || item.product.node.title} className="w-full h-full object-cover" />}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2">{item.product.node.title}</h3>
                        {item.variantTitle !== 'Default Title' && <p className="text-sm text-muted-foreground">{item.variantTitle}</p>}
                        <p className="text-primary font-bold text-xl mb-4">{itemPrice.toFixed(2)} €</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center border border-border rounded-xl overflow-hidden">
                            <button onClick={() => updateQuantity(item.variantId, item.quantity - 1)} className="p-2 hover:bg-secondary transition-colors">
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="w-12 text-center font-medium">{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.variantId, item.quantity + 1)} className="p-2 hover:bg-secondary transition-colors">
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                          <button onClick={() => removeItem(item.variantId)} className="p-2 text-muted-foreground hover:text-destructive transition-colors">
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                      <div className="text-right sm:min-w-[100px]">
                        <p className="text-sm text-muted-foreground">Sous-total</p>
                        <p className="font-bold text-lg">{(itemPrice * item.quantity).toFixed(2)} €</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="lg:col-span-1">
                <div className="card-premium p-6 sticky top-24">
                  <h2 className="text-xl font-semibold mb-6">Récapitulatif</h2>
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Sous-total ({totalItems} article{totalItems > 1 ? 's' : ''})</span>
                      <span>{totalPrice.toFixed(2)} €</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Livraison</span>
                      <span className="text-green-600">Gratuite</span>
                    </div>
                    <div className="border-t border-border pt-4">
                      <div className="flex justify-between">
                        <span className="font-semibold">Total</span>
                        <span className="text-2xl font-bold gradient-text">{totalPrice.toFixed(2)} €</span>
                      </div>
                    </div>
                  </div>
                  <button onClick={handleCheckout} disabled={isLoading || isSyncing} className="btn-primary w-full flex items-center justify-center gap-2 mb-4">
                    {isLoading || isSyncing ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <>Commander <ArrowRight className="w-5 h-5" /></>
                    )}
                  </button>
                  <p className="text-xs text-center text-muted-foreground">Paiement 100% sécurisé via Shopify</p>
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
