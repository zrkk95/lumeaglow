import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { Link } from 'react-router-dom';
import { createCheckoutAndRedirect, isShopifyConfigured } from '@/lib/shopify';
import { useState } from 'react';

const CartDrawer = () => {
  const { items, isOpen, closeCart, totalItems, totalPrice, updateQuantity, removeItem } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const handleCheckout = async () => {
    if (!isShopifyConfigured()) {
      // Redirection vers la page checkout locale si Shopify n'est pas configuré
      closeCart();
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
      // Fallback vers la page checkout locale
      window.location.href = '/checkout';
    } finally {
      setIsCheckingOut(false);
    }
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-foreground/30 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-card z-50 shadow-2xl transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-primary" />
              <h2 className="text-lg font-semibold">
                Votre Panier ({totalItems})
              </h2>
            </div>
            <button
              onClick={closeCart}
              className="p-2 rounded-full hover:bg-secondary transition-colors"
              aria-label="Fermer le panier"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-16 h-16 text-muted-foreground/30 mb-4" />
                <p className="text-muted-foreground mb-4">
                  Votre panier est vide
                </p>
                <button
                  onClick={closeCart}
                  className="btn-secondary"
                >
                  Continuer mes achats
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 p-3 bg-secondary/30 rounded-xl"
                  >
                    {/* Image */}
                    <div className="w-20 h-20 bg-secondary rounded-lg flex-shrink-0 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-sm truncate">
                        {item.title}
                      </h3>
                      <p className="text-primary font-semibold mt-1">
                        {item.price.toFixed(2)} €
                      </p>

                      {/* Quantité */}
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 rounded-md bg-background hover:bg-secondary transition-colors"
                          aria-label="Diminuer la quantité"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center text-sm font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 rounded-md bg-background hover:bg-secondary transition-colors"
                          aria-label="Augmenter la quantité"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Supprimer */}
                    <button
                      onClick={() => removeItem(item.id)}
                      className="p-2 text-muted-foreground hover:text-destructive transition-colors self-start"
                      aria-label="Supprimer du panier"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-border p-4 space-y-4">
              {/* Total */}
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Total</span>
                <span className="text-xl font-bold">
                  {totalPrice.toFixed(2)} €
                </span>
              </div>

              {/* Actions */}
              <div className="space-y-2">
                <button
                  onClick={handleCheckout}
                  disabled={isCheckingOut}
                  className="btn-primary w-full flex items-center justify-center gap-2"
                >
                  {isCheckingOut ? (
                    <>
                      <span className="animate-spin w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full" />
                      Redirection...
                    </>
                  ) : (
                    <>
                      Commander maintenant
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
                <Link
                  to="/panier"
                  onClick={closeCart}
                  className="btn-secondary w-full text-center"
                >
                  Voir le panier
                </Link>
              </div>

              {/* Réassurance */}
              <p className="text-xs text-center text-muted-foreground">
                Paiement 100% sécurisé via Shopify
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
