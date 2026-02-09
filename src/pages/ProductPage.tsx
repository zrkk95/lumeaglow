import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ShoppingCart, Check, Minus, Plus, ArrowRight, ZoomIn, Play, Star, Users, MapPin, Shield } from 'lucide-react';
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

// Import all carousel images
import productImage from '@/assets/lampe-meduse-product-new.jpeg';
import carousel1Orange from '@/assets/carousel-1-orange.jpeg';
import carousel2White from '@/assets/carousel-2-white.jpeg';
import carousel3Desk from '@/assets/carousel-3-desk.jpeg';
import carousel4Marble from '@/assets/carousel-4-marble.jpeg';
import carousel5Colors from '@/assets/carousel-5-colors.jpeg';

const ProductPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const { addItem } = useCart();
  const product = DEFAULT_PRODUCT;

  // Carousel images array
  const carouselImages = [
    { src: productImage, alt: 'Lampe Méduse LumeaGlow - Vue principale', type: 'image' as const },
    { src: carousel1Orange, alt: 'Lampe Méduse LumeaGlow - Ambiance orange', type: 'image' as const },
    { src: carousel2White, alt: 'Lampe Méduse LumeaGlow - Ambiance blanche', type: 'image' as const },
    { src: carousel3Desk, alt: 'Lampe Méduse LumeaGlow - Sur bureau', type: 'image' as const },
    { src: carousel4Marble, alt: 'Lampe Méduse LumeaGlow - Ambiance marbre', type: 'image' as const },
    { src: carousel5Colors, alt: 'Lampe Méduse LumeaGlow - Multicolore', type: 'image' as const },
    { src: '/videos/lumeaglow-demo.mp4', alt: 'Vidéo démo', type: 'video' as const },
  ];

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

  const reviews = [
    {
      name: 'Marie L.',
      role: 'Décoratrice d\'intérieur',
      content: 'Cette lampe est absolument magnifique ! Les mouvements des méduses sont très réalistes et les couleurs sont superbes.',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
    },
    {
      name: 'Thomas B.',
      role: 'Étudiant',
      content: 'Parfait pour mon studio ! L\'ambiance est incroyable, surtout le soir. Le fonctionnement silencieux est un vrai plus.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    },
    {
      name: 'Sophie D.',
      role: 'Mère de famille',
      content: 'Mes enfants sont fascinés par cette lampe. Elle les aide à s\'endormir plus facilement. La qualité est excellente.',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    },
    {
      name: 'Pierre M.',
      role: 'Développeur',
      content: 'J\'utilise cette lampe dans mon bureau et elle m\'aide vraiment à me concentrer et à me détendre. Un excellent achat !',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    },
  ];

  const stats = [
    { icon: Users, value: 'Plus de 10 000', label: 'Clients satisfaits' },
    { icon: Star, value: '4,9/5', label: 'Note moyenne' },
    { icon: MapPin, value: '50 pays et plus', label: 'Pays de livraison' },
    { icon: Shield, value: '2 ans', label: 'Garantie' },
  ];

  return (
    <>
      <Helmet>
        <title>Lampe Méduse LumeaGlow | Lampe LED RGB Premium</title>
        <meta name="description" content="Découvrez la Lampe Méduse LumeaGlow : lampe LED RGB avec mouvements réalistes. Transformez votre espace. Livraison rapide, garantie 12 mois." />
      </Helmet>

      <Header />

      <main className="pt-20">
        {/* Product Section with Carousel */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            {/* Mobile: single column, Desktop: 2 columns */}
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-12 items-start">
              {/* Image Carousel */}
              <div className="w-full space-y-3 lg:space-y-4">
                {/* Main Image - mobile: contain with stable height, desktop: cover */}
                <div className="w-full h-[340px] sm:h-[400px] lg:aspect-square lg:h-auto bg-secondary/30 rounded-2xl lg:rounded-3xl overflow-hidden relative group">
                  {carouselImages[selectedImage].type === 'video' ? (
                    <video
                      className="w-full h-full object-contain"
                      controls
                      playsInline
                      preload="metadata"
                    >
                      <source src={carouselImages[selectedImage].src} type="video/mp4" />
                    </video>
                  ) : (
                    <>
                      <img 
                        src={carouselImages[selectedImage].src} 
                        alt={carouselImages[selectedImage].alt} 
                        className="w-full h-full object-contain lg:object-cover"
                      />
                      <button 
                        className="absolute top-4 right-4 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                        aria-label="Zoom"
                      >
                        <ZoomIn className="w-5 h-5 text-foreground" />
                      </button>
                    </>
                  )}
                </div>

                {/* Thumbnails */}
                <div className="flex gap-2 lg:gap-3 overflow-x-auto pb-2">
                  {carouselImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`relative flex-shrink-0 w-16 h-16 lg:w-20 lg:h-20 rounded-lg lg:rounded-xl overflow-hidden border-2 transition-all ${
                        selectedImage === index 
                          ? 'border-primary ring-2 ring-primary/20' 
                          : 'border-transparent hover:border-border'
                      }`}
                    >
                      {image.type === 'video' ? (
                        <div className="w-full h-full bg-foreground/10 flex items-center justify-center">
                          <Play className="w-5 h-5 lg:w-6 lg:h-6 text-primary" />
                        </div>
                      ) : (
                        <img 
                          src={image.src} 
                          alt={image.alt} 
                          className="w-full h-full object-cover"
                        />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Product Info - Mobile: proper order */}
              <div className="w-full space-y-4 lg:space-y-6 lg:sticky lg:top-24">
                {/* 1. Title */}
                <div>
                  <p className="text-sm text-primary font-semibold uppercase tracking-wide mb-2">Changement de couleur RGB</p>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 lg:mb-4">Lampe Méduse LumeaGlow</h1>
                  <p className="text-sm lg:text-base text-muted-foreground mb-3 lg:mb-4">Transitions de couleurs dynamiques – parcours automatiquement des millions de couleurs éclatantes.</p>
                </div>

                {/* 2. Price */}
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl lg:text-4xl font-bold gradient-text">29,95 €</span>
                  <span className="text-muted-foreground line-through">49,90 €</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">-40%</span>
                </div>

                {/* 3. Stock */}
                <div className="flex items-center gap-2 text-sm text-primary font-medium">
                  <Check className="w-4 h-4" /><span>En stock – Expédition sous 24–48 h</span>
                </div>

                {/* 4. Quantity */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Quantité</label>
                  <div className="inline-flex items-center border border-border rounded-xl">
                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-3 hover:bg-secondary"><Minus className="w-4 h-4" /></button>
                    <span className="w-12 text-center font-semibold">{quantity}</span>
                    <button onClick={() => setQuantity(quantity + 1)} className="p-3 hover:bg-secondary"><Plus className="w-4 h-4" /></button>
                  </div>
                </div>

                {/* 5. Buttons */}
                <div className="space-y-3">
                  <button onClick={handleAddToCart} className="w-full btn-primary flex items-center justify-center gap-2">
                    <ShoppingCart className="w-5 h-5" />Ajouter au panier – {(product.price * quantity).toFixed(2).replace('.', ',')} €
                  </button>
                  <button onClick={handleBuyNow} disabled={isLoading} className="w-full btn-outline-primary flex items-center justify-center gap-2">
                    {isLoading ? 'Traitement...' : <>Commander maintenant <ArrowRight className="w-5 h-5" /></>}
                  </button>
                </div>

                {/* 6. Quick features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 lg:pt-4">
                  {['Tentacules en silicone réalistes', 'LED RGB multicolores', 'Modes automatiques & ambiance', 'Fonctionnement silencieux', 'Alimentation USB', 'Garantie 12 mois'].map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specifications */}
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

        {/* Mini FAQ */}
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

        {/* Video Section */}
        <section className="section-padding bg-secondary/30">
          <div className="container-custom">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">Voir la lampe <span className="gradient-text">en action</span></h2>
            <div className="max-w-4xl mx-auto">
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg bg-black">
                <video
                  className="w-full h-full object-contain"
                  controls
                  playsInline
                  preload="metadata"
                >
                  <source src="/videos/lumeaglow-demo.mp4" type="video/mp4" />
                  Votre navigateur ne supporte pas la lecture de vidéos.
                </video>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4">
                Ce que disent <span className="gradient-text">nos clients</span>
              </h2>
              <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
                Ne vous fiez pas seulement à nos paroles. Voici ce que de vrais clients disent de leur expérience LumeaGlow.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
              {reviews.map((review, index) => (
                <div
                  key={review.name}
                  className="bg-white rounded-2xl p-5 sm:p-6 shadow-md border border-border/30 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex gap-1 mb-3 sm:mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 sm:mb-6">
                    "{review.content}"
                  </p>
                  <div className="flex items-center gap-3">
                    <img src={review.avatar} alt={review.name} className="w-10 h-10 rounded-full object-cover" />
                    <div>
                      <p className="font-semibold text-foreground text-sm">{review.name}</p>
                      <p className="text-xs text-muted-foreground">{review.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center p-4 sm:p-6 bg-secondary/50 rounded-2xl">
                  <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary mx-auto mb-2 sm:mb-3" />
                  <div className="text-lg sm:text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ProductPage;
