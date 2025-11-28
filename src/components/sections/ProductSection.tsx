import { useState } from 'react';
import { ShoppingCart, Zap, Check, Minus, Plus, ArrowRight } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { DEFAULT_PRODUCT, createCheckoutAndRedirect, isShopifyConfigured } from '@/lib/shopify';
import { toast } from '@/hooks/use-toast';

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
      image: product.image,
    }, quantity);
    
    toast({
      title: "Ajouté au panier",
      description: `${quantity}x ${product.title}`,
    });
  };

  const handleBuyNow = async () => {
    setIsLoading(true);
    
    if (!isShopifyConfigured()) {
      // Ajouter au panier et rediriger vers checkout local
      addItem({
        id: product.id,
        variantId: product.variantId,
        title: product.title,
        price: product.price,
        image: product.image,
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
    'Mouvement fluide & hypnotisant',
    'LED RGB multicolores',
    'Modes automatiques & ambiance',
    'Fonctionnement silencieux',
    'Alimentation USB',
    'Garantie 12 mois',
    'Livraison rapide',
  ];

  const specifications = [
    {
      title: 'Design',
      content: 'La Lampe Méduse AquaGlow est conçue avec une esthétique moderne et épurée. Son réservoir cylindrique transparent met en valeur les mouvements gracieux des méduses artificielles, créant un spectacle visuel captivant qui s\'intègre parfaitement à tout intérieur contemporain.'
    },
    {
      title: 'Technologie LED',
      content: 'Équipée de LED RGB haute performance, la lampe offre un spectre complet de couleurs. Vous pouvez choisir parmi plusieurs modes d\'éclairage : couleur fixe, transition douce, ou cycle automatique. Les LED consomment peu d\'énergie tout en offrant une luminosité optimale pour une ambiance relaxante.'
    },
    {
      title: 'Matériaux & Sécurité',
      content: 'Fabriquée avec des matériaux de première qualité : base en ABS robuste, réservoir en acrylique résistant aux chocs, et méduses en silicone souple de qualité alimentaire. Tous les composants sont certifiés sans danger et respectent les normes européennes de sécurité.'
    },
    {
      title: 'Dimensions',
      content: 'Hauteur : 35 cm | Diamètre : 10 cm | Poids : 0.8 kg. Dimensions compactes idéales pour une table de chevet, un bureau, ou une étagère. Le câble USB mesure 1.5 mètre pour un positionnement flexible.'
    },
    {
      title: 'Utilisation recommandée',
      content: 'Parfaite comme veilleuse apaisante, décoration d\'intérieur, ou cadeau original. Idéale pour les chambres, salons, bureaux, ou espaces de méditation. Ne nécessite aucun entretien particulier et fonctionne avec n\'importe quel port USB ou adaptateur secteur 5V.'
    },
    {
      title: 'Contenu de la boîte',
      content: 'La boîte contient : 1x Lampe Méduse AquaGlow, 1x Câble USB d\'alimentation, 2x Méduses en silicone, 1x Guide d\'utilisation en français, 1x Carte de garantie 12 mois.'
    },
    {
      title: 'Entretien',
      content: 'Entretien minimal requis. Nettoyez l\'extérieur avec un chiffon doux et sec. En cas de salissure du réservoir, videz l\'eau distillée et rincez délicatement. Évitez les produits chimiques. Changez l\'eau tous les 3-4 mois pour maintenir la clarté.'
    },
    {
      title: 'Garantie 12 mois',
      content: 'AquaGlow offre une garantie complète de 12 mois couvrant tous les défauts de fabrication. Notre service client est disponible pour toute question ou problème. Satisfait ou remboursé sous 30 jours.'
    },
  ];

  return (
    <section id="produit" className="section-padding bg-background">
      <div className="container-custom">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 animate-fade-in-up">
            Lampe Méduse <span className="gradient-text">AquaGlow</span>
          </h2>
        </div>

        {/* Product Card */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="card-premium p-6 sm:p-8 lg:p-10">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              {/* Product Image */}
              <div className="relative aspect-square bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-40 h-40 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center animate-pulse-slow">
                      <span className="text-6xl">🪼</span>
                    </div>
                    <p className="text-sm text-muted-foreground px-4">
                      Lampe Méduse AquaGlow
                    </p>
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-primary font-medium mb-2">
                    Lampe LED à couleurs changeantes RGB
                  </p>
                  <div className="flex items-baseline gap-3">
                    <span className="text-4xl font-bold gradient-text">
                      {product.price.toFixed(2)} €
                    </span>
                    <span className="text-muted-foreground line-through">
                      49,90 €
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
                      className="p-3 hover:bg-secondary transition-colors"
                      aria-label="Diminuer la quantité"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-12 text-center font-semibold">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-3 hover:bg-secondary transition-colors"
                      aria-label="Augmenter la quantité"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <button
                    onClick={handleAddToCart}
                    className="w-full btn-secondary flex items-center justify-center gap-2"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    Ajouter au panier
                  </button>
                  <button
                    onClick={handleBuyNow}
                    disabled={isLoading}
                    className="w-full btn-primary flex items-center justify-center gap-2"
                  >
                    {isLoading ? (
                      <>
                        <span className="animate-spin w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full" />
                        Traitement...
                      </>
                    ) : (
                      <>
                        <Zap className="w-5 h-5" />
                        Commander maintenant
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </div>

                {/* Stock info */}
                <div className="flex items-center gap-2 text-sm text-green-600">
                  <Check className="w-4 h-4" />
                  <span>En stock - Expédition sous 24-48h</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-xl font-semibold mb-6 text-center">
            Caractéristiques
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <div
                key={feature}
                className="flex items-center gap-2 p-3 bg-secondary/50 rounded-xl text-sm"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <Check className="w-4 h-4 text-primary flex-shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Specifications */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-center">
            Fiche produit détaillée
          </h3>
          <div className="space-y-6">
            {specifications.map((spec, index) => (
              <div
                key={spec.title}
                className="p-6 bg-secondary/30 rounded-2xl"
              >
                <h4 className="font-semibold text-lg mb-3 text-primary">
                  {spec.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {spec.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
