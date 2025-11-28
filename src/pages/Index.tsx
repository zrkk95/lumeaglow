import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/sections/HeroSection';
import ProductSection from '@/components/sections/ProductSection';
import AdvantagesSection from '@/components/sections/AdvantagesSection';
import AboutSection from '@/components/sections/AboutSection';
import OrderTrackingSection from '@/components/sections/OrderTrackingSection';
import FAQSection from '@/components/sections/FAQSection';
import CommunitySection from '@/components/sections/CommunitySection';
import ReviewsSection from '@/components/sections/ReviewsSection';
import NewsletterSection from '@/components/sections/NewsletterSection';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>AquaGlow - Lampe Méduse LED | Ambiance Océan Apaisante</title>
        <meta 
          name="description" 
          content="Découvrez la Lampe Méduse AquaGlow : lampe LED à couleurs changeantes RGB qui recrée le mouvement naturel des méduses. Ambiance apaisante et hypnotisante. Livraison rapide, garantie 12 mois." 
        />
        <meta name="keywords" content="lampe méduse, lampe LED, décoration, ambiance, AquaGlow, veilleuse, relaxation" />
        <link rel="canonical" href="https://aquaglow.fr" />
      </Helmet>

      <Header />
      
      <main>
        <HeroSection />
        <ProductSection />
        <AdvantagesSection />
        <AboutSection />
        <OrderTrackingSection />
        <FAQSection />
        <CommunitySection />
        <ReviewsSection />
        <NewsletterSection />
      </main>

      <Footer />
    </>
  );
};

export default Index;
