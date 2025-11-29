import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ShoppingCart, Check, Minus, Plus, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useCart } from '@/contexts/CartContext';
import { DEFAULT_PRODUCT, createCheckoutAndRedirect, isShopifyConfigured } from '@/lib/shopify';
import { toast } from '@/hooks/use-toast';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import productImage from '@/assets/lampe-meduse-product-new.jpeg';
import ambianceImage from '@/assets/lampe-meduse-ambiance.jpeg';

const ProductPage = () => {
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
    toast({ title: "Ajouté au panier", description: `${quantity}x ${product.title}` });
  };

  const handleBuyNow = async () => {
    setIsLoading(true);
    if (!isShopifyConfigured()) {
      addItem({ id: product.id, variantId: product.variantId, title: product.title, price: product.price, image: productImage }, quantity);
      window.location.href = '/checkout';
      return;
    }
    try {
      await createCheckoutAndRedirect([{ merchandiseId: product.variantId, quantity }]);
    } catch (error) {
      toast({ title: "Erreur", description: "Impossible de créer la commande.", variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  };

  const specifications = [
    { title: 'Design', content: 'La Lampe Méduse AquaGlow est conçue avec une esthétique moderne et épurée. Son réservoir cylindrique transparent met en valeur les mouvements gracieux des méduses artificielles.' },
    { title: 'Technologie LED', content: 'Équipée de LED RGB haute performance, la lampe offre un spectre complet de couleurs avec des modes prédéfinis et des cycles personnalisables.' },
    { title: 'Matériaux & Sécurité', content: 'Base en ABS robuste, réservoir en acrylique résistant, méduses en silicone de qualité alimentaire. Certifié CE.' },
    { title: 'Dimensions', content: 'Hauteur : 35 cm | Diamètre : 10 cm | Poids : 0.8 kg | Câble USB : 1.5 mètre.' },
    { title: 'Utilisation recommandée', content: 'Parfaite comme veilleuse, décoration ou cadeau. Idéale pour chambres, salons, bureaux ou espaces de méditation.' },
    { title: 'Contenu de la boîte', content: '1x Lampe Méduse AquaGlow, 2x Méduses en silicone, 1x Câble USB, 1x Télécommande, 1x Guide d\'utilisation, 1x Carte de garantie.' },
    { title: 'Entretien', content: 'Nettoyez l\'extérieur avec un chiffon doux. Changez l\'eau distillée tous les 3-4 mois.' },
    { title: 'Garantie 12 mois', content: 'Garantie complète couvrant tous les défauts de fabrication. Satisfait ou remboursé sous 30 jours.' },
  ];

  const faqs = [
    { question: 'Combien de couleurs peut afficher la lampe ?', answer: 'Des millions de combinaisons grâce à la technologie LED RGB.' },
    { question: 'La lampe est-elle silencieuse ?', answer: 'Oui, le moteur est ultra-silencieux, parfait pour une utilisation nocturne.' },
    { question: 'Quelle est la consommation électrique ?', answer: 'Très faible, environ 5W via alimentation USB.' },
  ];

  return (
    <>
      <Helmet>
        <title>Lampe Méduse AquaGlow | Lampe LED RGB Premium</title>
        <meta name="description" content="Découvrez la Lampe Méduse AquaGlow : lampe LED RGB avec mouvements réalistes. Transformez votre espace. Livraison rapide, garantie 12 mois." />
      </Helmet>

      <Header />

      <main className="pt-20">
        {/* Product Section */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Images */}
              <div className="space-y-4">
                <div className="aspect-square bg-secondary/30 rounded-3xl overflow-hidden">
                  <img src={productImage} alt="Lampe Méduse AquaGlow" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-video bg-secondary/30 rounded-2xl overflow-hidden">
                  <img src={ambianceImage} alt="Lampe en ambiance" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Info */}
              <div className="space-y-6 lg:sticky lg:top-24">
                <div>
                  <p className="text-sm text-primary font-semibold uppercase tracking-wide mb-2">Changement de couleur RGB</p>
                  <h1 className="text-3xl lg:text-4xl font-bold mb-4">Lampe Méduse AquaGlow</h1>
                  <p className="text-muted-foreground mb-4">Transitions de couleurs dynamiques – parcours automatiquement des millions de couleurs éclatantes.</p>
                  <div className="flex items-baseline gap-3">
                    <span className="text-4xl font-bold gradient-text">{product.price.toFixed(0)} €</span>
                    <span className="text-muted-foreground line-through">49 €</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">-40%</span>
                  </div>
                </div>

                {/* Quantity */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Quantité</label>
                  <div className="inline-flex items-center border border-border rounded-xl">
                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-3 hover:bg-secondary"><Minus className="w-4 h-4" /></button>
                    <span className="w-12 text-center font-semibold">{quantity}</span>
                    <button onClick={() => setQuantity(quantity + 1)} className="p-3 hover:bg-secondary"><Plus className="w-4 h-4" /></button>
                  </div>
                </div>

                {/* Buttons */}
                <div className="space-y-3">
                  <button onClick={handleAddToCart} className="w-full btn-primary flex items-center justify-center gap-2">
                    <ShoppingCart className="w-5 h-5" />Ajouter au panier – {(product.price * quantity).toFixed(0)} €
                  </button>
                  <button onClick={handleBuyNow} disabled={isLoading} className="w-full btn-outline-primary flex items-center justify-center gap-2">
                    {isLoading ? 'Traitement...' : <>Acheter maintenant <ArrowRight className="w-5 h-5" /></>}
                  </button>
                </div>

                <div className="flex items-center gap-2 text-sm text-primary font-medium">
                  <Check className="w-4 h-4" /><span>En stock – Expédition sous 24–48 h</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specifications */}
        <section className="section-padding bg-secondary/30">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-8 text-center">Fiche produit <span className="gradient-text">détaillée</span></h2>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {specifications.map((spec, index) => (
                  <AccordionItem key={index} value={`spec-${index}`} className="bg-card rounded-2xl border border-border/50 px-6">
                    <AccordionTrigger className="font-semibold hover:no-underline py-5">{spec.title}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-5">{spec.content}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Mini FAQ */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-8 text-center">Questions <span className="gradient-text">fréquentes</span></h2>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`faq-${index}`} className="bg-card rounded-2xl border border-border/50 px-6">
                    <AccordionTrigger className="font-semibold hover:no-underline py-5">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-5">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="section-padding bg-secondary/30">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-8 text-center">Voir la lampe <span className="gradient-text">en action</span></h2>
            <div className="max-w-4xl mx-auto">
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg bg-black">
                <video
                  className="w-full h-full object-cover"
                  controls
                  playsInline
                  preload="metadata"
                >
                  <source src="/videos/aquaglow-demo.mp4" type="video/mp4" />
                  Votre navigateur ne supporte pas la lecture de vidéos.
                </video>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ProductPage;
