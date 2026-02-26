import { useState } from 'react';
import { ShoppingCart, Check, Minus, Plus, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCartStore } from '@/stores/cartStore';
import { toast } from '@/hooks/use-toast';
import type { ShopifyProduct } from '@/lib/shopify';
import productImage from '@/assets/lampe-meduse-product-new.jpeg';

// Hardcoded product data used as a ShopifyProduct shell for the cart
const PRODUCT_FOR_CART: ShopifyProduct = {
  node: {
    id: 'lampe-meduse-lumeaglow',
    title: 'Lampe Méduse LumeaGlow',
    description: 'Lampe LED à couleurs changeantes RGB',
    handle: 'lampe-meduse-lumeaglow',
    priceRange: { minVariantPrice: { amount: '29.95', currencyCode: 'EUR' } },
    images: { edges: [{ node: { url: productImage, altText: 'Lampe Méduse LumeaGlow' } }] },
    variants: {
      edges: [{
        node: {
          id: 'lampe-meduse-lumeaglow-default',
          title: 'Default Title',
          price: { amount: '29.95', currencyCode: 'EUR' },
          availableForSale: true,
          selectedOptions: [],
        },
      }],
    },
    options: [],
  },
};

const ProductSection = () => {
  const [quantity, setQuantity] = useState(1);
  const addItem = useCartStore(s => s.addItem);
  const isLoading = useCartStore(s => s.isLoading);
  const navigate = useNavigate();

  const variant = PRODUCT_FOR_CART.node.variants.edges[0].node;

  const handleAddToCart = async () => {
    await addItem({
      product: PRODUCT_FOR_CART,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity,
      selectedOptions: variant.selectedOptions,
    });
    toast({ title: "Ajouté au panier", description: `${quantity}x Lampe Méduse LumeaGlow` });
  };

  const handleBuyNow = () => {
    navigate('/produit/lampe-meduse-lumeaglow');
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
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 animate-fade-in-up">
            Lampe Méduse <span className="gradient-text">LumeaGlow</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Transformez votre espace grâce à la beauté envoûtante de notre lampe méduse haut de gamme.
          </p>
        </div>

        <div className="max-w-[1100px] mx-auto">
          <div className="card-premium p-4 sm:p-6 lg:p-8">
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-start">
              <div className="relative aspect-square lg:aspect-[4/5] lg:max-h-[400px] bg-secondary/30 rounded-2xl overflow-hidden">
                <img src={productImage} alt="Lampe Méduse LumeaGlow" className="w-full h-full object-cover" loading="lazy" width={417} height={400} />
              </div>

              <div className="space-y-4 lg:space-y-5">
                <div>
                  <p className="text-sm text-primary font-semibold uppercase tracking-wide mb-2">Changement de couleur RGB</p>
                  <p className="text-sm text-muted-foreground mb-3">Transitions de couleurs dynamiques – parcours automatiquement des millions de couleurs éclatantes.</p>
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl lg:text-4xl font-bold gradient-text">29,95 €</span>
                    <span className="text-muted-foreground line-through">49,90 €</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">-40%</span>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Quantité</label>
                  <div className="inline-flex items-center border border-border rounded-xl overflow-hidden">
                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-2.5 hover:bg-secondary transition-colors" aria-label="Diminuer la quantité">
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-10 text-center font-semibold">{quantity}</span>
                    <button onClick={() => setQuantity(quantity + 1)} className="p-2.5 hover:bg-secondary transition-colors" aria-label="Augmenter la quantité">
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="space-y-2.5">
                  <button onClick={handleAddToCart} disabled={isLoading} className="w-full btn-primary flex items-center justify-center gap-2">
                    <ShoppingCart className="w-5 h-5" />
                    Ajouter au panier – {(29.95 * quantity).toFixed(2).replace('.', ',')} €
                  </button>
                  <button onClick={handleBuyNow} className="w-full btn-outline-primary flex items-center justify-center gap-2">
                    Commander maintenant
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex items-center gap-2 text-sm text-primary font-medium">
                  <Check className="w-4 h-4" /><span>En stock – Expédition sous 24–48 h</span>
                </div>

                <div className="pt-2">
                  <h4 className="text-sm font-semibold mb-3">Caractéristiques du produit</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary flex-shrink-0" /><span>{feature}</span>
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
