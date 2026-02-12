import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/sections/HeroSection';
import ProductSection from '@/components/sections/ProductSection';
import AdvantagesSection from '@/components/sections/AdvantagesSection';
import AboutSection from '@/components/sections/AboutSection';
import OrderTrackingSection from '@/components/sections/OrderTrackingSection';
import VideoSection from '@/components/sections/VideoSection';
import FAQSection from '@/components/sections/FAQSection';
import CommunitySection from '@/components/sections/CommunitySection';
import ReviewsSection from '@/components/sections/ReviewsSection';
import HomeReviewsSlider from '@/components/sections/HomeReviewsSlider';
import NewsletterSection from '@/components/sections/NewsletterSection';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>LumeaGlow - Lampe Méduse LED | Ambiance Océan Apaisante</title>
        <meta 
          name="description" 
          content="Découvrez la Lampe Méduse LumeaGlow : lampe LED à couleurs changeantes RGB qui recrée le mouvement naturel des méduses. Ambiance apaisante et hypnotisante. Livraison rapide, garantie 12 mois." 
        />
        <meta name="keywords" content="lampe méduse, lampe LED, décoration, ambiance, LumeaGlow, veilleuse, relaxation" />
        <link rel="canonical" href="https://lumeaglow.fr" />
      </Helmet>

      <Header />
      
      <main>
        {/* 1. Hero */}
        <HeroSection />
        {/* 2. Product Section */}
        <ProductSection />
        {/* 3. Advantages */}
        <AdvantagesSection />
        {/* 4. About */}
        <AboutSection />
        {/* 5. Video Section - after About */}
        <VideoSection />
        {/* 6. Community */}
        <CommunitySection />
        {/* 7. FAQ */}
        <FAQSection />
        {/* 8. Reviews Slider */}
        <HomeReviewsSlider />
        {/* 8b. Full Reviews */}
        <ReviewsSection />
        {/* 9. Order Tracking */}
        <OrderTrackingSection />
        {/* 10. Newsletter */}
        <NewsletterSection />
      </main>

      <Footer />
    </>
  );
};

export default Index;
