import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { ShoppingCart, Check, Minus, Plus, ArrowRight, Star } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductImageSlider from '@/components/ProductImageSlider';
import { useCartStore } from '@/stores/cartStore';
import type { ShopifyProduct } from '@/lib/shopify';
import { toast } from '@/hooks/use-toast';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import ReviewsSection from '@/components/sections/ReviewsSection';
import AvisVerifiesLogo from '@/components/AvisVerifiesLogo';

import productImage from '@/assets/lampe-meduse-product-new.jpeg';
import carousel1Orange from '@/assets/carousel-1-orange.jpeg';
import carousel2White from '@/assets/carousel-2-white.jpeg';
import carousel3Desk from '@/assets/carousel-3-desk.jpeg';
import carousel4Marble from '@/assets/carousel-4-marble.jpeg';
import carousel5Colors from '@/assets/carousel-5-colors.jpeg';

const PRODUCT_FOR_CART: ShopifyProduct = {
  node: {
    id: 'gid://shopify/Product/16135057801561',
    title: 'Lampe Méduse LumeaGlow',
    description: 'Lampe LED à couleurs changeantes RGB',
    handle: 'lampe-meduse-lumeaglow',
    priceRange: { minVariantPrice: { amount: '29.95', currencyCode: 'EUR' } },
    images: { edges: [{ node: { url: productImage, altText: 'Lampe Méduse LumeaGlow' } }] },
    variants: {
      edges: [{
        node: {
          id: 'gid://shopify/ProductVariant/57384636088665',
          title: 'Default Title',
          price: { amount: '29.95', currencyCode: 'EUR' },
          availableForSale: true,
          selectedOptions: [{ name: 'Title', value: 'Default Title' }],
        },
      }],
    },
    options: [{ name: 'Title', values: ['Default Title'] }],
  },
};

const ProductPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const addItem = useCartStore(s => s.addItem);
  const isLoading = useCartStore(s => s.isLoading);
  const getCheckoutUrl = useCartStore(s => s.getCheckoutUrl);

  const variant = PRODUCT_FOR_CART.node.variants.edges[0].node;

  const carouselImages = [
    { src: productImage, alt: 'Lampe Méduse LumeaGlow - Vue principale', type: 'image' as const },
    { src: carousel1Orange, alt: 'Lampe Méduse LumeaGlow - Ambiance orange', type: 'image' as const },
    { src: carousel2White, alt: 'Lampe Méduse LumeaGlow - Ambiance blanche', type: 'image' as const },
    { src: carousel3Desk, alt: 'Lampe Méduse LumeaGlow - Sur bureau', type: 'image' as const },
    { src: carousel4Marble, alt: 'Lampe Méduse LumeaGlow - Ambiance marbre', type: 'image' as const },
    { src: carousel5Colors, alt: 'Lampe Méduse LumeaGlow - Multicolore', type: 'image' as const },
    { src: '/videos/lumeaglow-demo.mp4', alt: 'Vidéo démo', type: 'video' as const },
  ];

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

  const handleBuyNow = async () => {
    await addItem({
      product: PRODUCT_FOR_CART,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity,
      selectedOptions: variant.selectedOptions,
    });
    const checkoutUrl = useCartStore.getState().getCheckoutUrl();
    if (checkoutUrl) {
      window.open(checkoutUrl, '_blank');
    }
  };

  const specifications = [
    { title: 'Design', content: 'La Lampe Méduse LumeaGlow est conçue avec une esthétique moderne et épurée. Son réservoir cylindrique transparent met en valeur les mouvements gracieux des méduses artificielles.' },
    { title: 'Technologie LED', content: 'Équipée de LED RGB haute performance, la lampe offre un spectre complet de couleurs avec des modes prédéfinis et des cycles personnalisables.' },
    { title: 'Matériaux & Sécurité', content: 'Base en ABS robuste, réservoir en acrylique résistant, méduses en silicone de qualité alimentaire. Certifié CE.' },
    { title: 'Dimensions', content: 'Hauteur : 35 cm | Diamètre : 10 cm | Poids : 0.8 kg | Câble USB : 1.5 mètre.' },
    { title: 'Utilisation recommandée', content: 'Parfaite comme veilleuse, décoration ou cadeau. Idéale pour chambres, salons, bureaux ou espaces de méditation.' },
    { title: 'Contenu de la boîte', content: '1x Lampe Méduse LumeaGlow, 2x Méduses en silicone, 1x Câble USB, 1x Télécommande, 1x Guide d\'utilisation, 1x Carte de garantie.' },
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
        <title>Lampe Méduse LumeaGlow | Lampe LED RGB Premium</title>
        <meta name="description" content="Découvrez la Lampe Méduse LumeaGlow : lampe LED RGB avec mouvements réalistes. Transformez votre espace. Livraison rapide, garantie 12 mois." />
      </Helmet>

      <Header />

      <main className="pt-16">
        <section className="py-6 sm:py-8 lg:py-10 bg-background">
          <div className="container-custom">
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-12 items-start">
              <ProductImageSlider carouselImages={carouselImages} selectedImage={selectedImage} setSelectedImage={setSelectedImage} />

              <div className="w-full space-y-4 lg:space-y-6 lg:sticky lg:top-24">
                <div>
                  <p className="text-sm text-primary font-semibold uppercase tracking-wide mb-2">Changement de couleur RGB</p>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 lg:mb-4">Lampe Méduse LumeaGlow</h1>
                  <p className="text-sm lg:text-base text-muted-foreground mb-3 lg:mb-4">Transitions de couleurs dynamiques – parcours automatiquement des millions de couleurs éclatantes.</p>

                  <button
                    onClick={() => document.getElementById('reviews-section')?.scrollIntoView({ behavior: 'smooth' })}
                    className="flex flex-wrap items-center gap-2 group cursor-pointer"
                  >
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} className={`w-4 h-4 ${s <= 4 ? 'fill-yellow-400 text-yellow-400' : 'fill-yellow-400/70 text-yellow-400/70'}`} />
                      ))}
                    </div>
                    <span className="text-sm font-semibold">4,8</span>
                    <span className="text-sm text-muted-foreground group-hover:underline">(14 avis)</span>
                    <AvisVerifiesLogo height={20} />
                  </button>
                  <p className="text-[10px] text-muted-foreground mt-0.5">Basé sur 14 avis soumis à un contrôle</p>
                </div>

                <div className="flex items-baseline gap-3">
                  <span className="text-3xl lg:text-4xl font-bold gradient-text">29,95 €</span>
                  <span className="text-muted-foreground line-through">49,90 €</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">-40%</span>
                </div>

                <div className="flex items-center gap-2 text-sm text-primary font-medium">
                  <Check className="w-4 h-4" /><span>En stock – Expédition sous 24–48 h</span>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Quantité</label>
                  <div className="inline-flex items-center border border-border rounded-xl">
                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-3 hover:bg-secondary"><Minus className="w-4 h-4" /></button>
                    <span className="w-12 text-center font-semibold">{quantity}</span>
                    <button onClick={() => setQuantity(quantity + 1)} className="p-3 hover:bg-secondary"><Plus className="w-4 h-4" /></button>
                  </div>
                </div>

                <div className="space-y-3">
                  <button onClick={handleAddToCart} disabled={isLoading} className="w-full btn-primary flex items-center justify-center gap-2">
                    <ShoppingCart className="w-5 h-5" />Ajouter au panier – {(29.95 * quantity).toFixed(2).replace('.', ',')} €
                  </button>
                  <button onClick={handleBuyNow} disabled={isLoading} className="w-full btn-outline-primary flex items-center justify-center gap-2">
                    {isLoading ? 'Traitement...' : <>Commander maintenant <ArrowRight className="w-5 h-5" /></>}
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 lg:pt-4">
                  {['Tentacules en silicone réalistes', 'LED RGB multicolores', 'Modes automatiques & ambiance', 'Fonctionnement silencieux', 'Alimentation USB', 'Garantie 12 mois'].map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" /><span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-secondary/30">
          <div className="container-custom">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">Fiche produit <span className="gradient-text">détaillée</span></h2>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
                {specifications.map((spec, index) => (
                  <AccordionItem key={index} value={`spec-${index}`} className="bg-card rounded-xl sm:rounded-2xl border border-border/50 px-4 sm:px-6">
                    <AccordionTrigger className="font-semibold hover:no-underline py-4 sm:py-5 text-sm sm:text-base">{spec.title}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4 sm:pb-5 text-sm">{spec.content}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container-custom">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">Questions <span className="gradient-text">fréquentes</span></h2>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`faq-${index}`} className="bg-card rounded-xl sm:rounded-2xl border border-border/50 px-4 sm:px-6">
                    <AccordionTrigger className="font-semibold hover:no-underline py-4 sm:py-5 text-sm sm:text-base">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4 sm:pb-5 text-sm">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        <ProductVideoSection />
        <ReviewsSection />
      </main>

      <Footer />
    </>
  );
};

const ProductVideoSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { video.play().catch(() => {}); } else { video.pause(); }
      },
      { threshold: 0.4 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !muted;
      setMuted(!muted);
    }
  };

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">
          Voir la lampe <span className="gradient-text">en action</span>
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-lg bg-black" style={{ aspectRatio: '16/10' }}>
            <video ref={videoRef} className="w-full h-full object-cover" muted={muted} loop playsInline preload="metadata">
              <source src="/videos/lumeaglow-demo.mp4" type="video/mp4" />
            </video>
            <button
              onClick={toggleMute}
              className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors z-10"
              aria-label={muted ? 'Activer le son' : 'Couper le son'}
            >
              {muted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
