import { useState } from 'react';
import { ShoppingCart, Zap, Check, Minus, Plus, ArrowRight } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { DEFAULT_PRODUCT, createCheckoutAndRedirect, isShopifyConfigured } from '@/lib/shopify';
import { toast } from '@/hooks/use-toast';
import productImage from '@/assets/lampe-meduse-product-new.jpeg';

const ProductSection = () => {
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const { addItem } = useCart();

  const product = DEFAULT_PRODUCT;

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      variantId: product.variantId,
      title: product.title,
      price: product.price,
      image: productImage,
    }, quantity);
    
    toast({
      title: "Ajouté au panier",
      description: `${quantity}x ${product.title}`,
    });
  };

  const handleBuyNow = async () => {
    setIsLoading(true);
    
    if (!isShopifyConfigured()) {
      addItem({
        id: product.id,
        variantId: product.variantId,
        title: product.title,
        price: product.price,
        image: productImage,
      }, quantity);
      window.location.href = '/checkout';
      return;
    }

    try {
      await createCheckoutAndRedirect([
        { merchandiseId: product.variantId, quantity }
      ]);
    } catch (error) {
      console.error('Erreur checkout:', error);
      toast({
        title: "Erreur",
        description: "Impossible de créer la commande. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const features = [
    'Tentacules en silicone réalistes',
    'LED RGB multicolores',
    'Modes automatiques & ambiance',
    'Fonctionnement silencieux',
    'Alimentation USB',
    'Garantie 12 mois',
  ];

  return (
    <section id="produit" className="py-12 lg:py-16 bg-background">
      <div className="container-custom">
        {/* Title - Smaller intro */}
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 animate-fade-in-up">
            Lampe Méduse <span className="gradient-text">AquaGlow</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Transformez votre espace grâce à la beauté envoûtante de notre lampe méduse haut de gamme.
          </p>
        </div>

        {/* Product Card - Compact, max-width 1100px */}
        <div className="max-w-[1100px] mx-auto">
          <div className="card-premium p-4 sm:p-6 lg:p-8">
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-start">
              {/* Product Image - Reduced size on desktop */}
              <div className="relative aspect-square lg:aspect-[4/5] lg:max-h-[400px] bg-secondary/30 rounded-2xl overflow-hidden">
                <img 
                  src={productImage} 
                  alt="Lampe Méduse AquaGlow" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Product Info */}
              <div className="space-y-4 lg:space-y-5">
                <div>
                  <p className="text-sm text-primary font-semibold uppercase tracking-wide mb-2">
                    Changement de couleur RGB
                  </p>
                  <p className="text-sm text-muted-foreground mb-3">
                    Transitions de couleurs dynamiques – parcours automatiquement des millions de couleurs éclatantes.
                  </p>
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl lg:text-4xl font-bold gradient-text">
                      {product.price.toFixed(0)} €
                    </span>
                    <span className="text-muted-foreground line-through">
                      49 €
                    </span>
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                      -40%
                    </span>
                  </div>
                </div>

                {/* Quantity Selector */}
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Quantité
                  </label>
                  <div className="inline-flex items-center border border-border rounded-xl overflow-hidden">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-2.5 hover:bg-secondary transition-colors"
                      aria-label="Diminuer la quantité"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-10 text-center font-semibold">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-2.5 hover:bg-secondary transition-colors"
                      aria-label="Augmenter la quantité"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-2.5">
                  <button
                    onClick={handleAddToCart}
                    className="w-full btn-primary flex items-center justify-center gap-2"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    Ajouter au panier – {(product.price * quantity).toFixed(0)} €
                  </button>
                  <button
                    onClick={handleBuyNow}
                    disabled={isLoading}
                    className="w-full btn-outline-primary flex items-center justify-center gap-2"
                  >
                    {isLoading ? (
                      <>
                        <span className="animate-spin w-5 h-5 border-2 border-primary border-t-transparent rounded-full" />
                        Traitement...
                      </>
                    ) : (
                      <>
                        Commander maintenant
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </div>

                {/* Stock info */}
                <div className="flex items-center gap-2 text-sm text-primary font-medium">
                  <Check className="w-4 h-4" />
                  <span>En stock – Expédition sous 24–48 h</span>
                </div>

                {/* Features List - 6 max */}
                <div className="pt-2">
                  <h4 className="text-sm font-semibold mb-3">Caractéristiques du produit</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
