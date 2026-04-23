import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import { HelmetProvider } from "react-helmet-async";
import { useCartSync } from "@/hooks/useCartSync";

// Pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Panier from "./pages/Panier";
import Checkout from "./pages/Checkout";
import Confirmation from "./pages/Confirmation";
import Contact from "./pages/Contact";
import MentionsLegales from "./pages/MentionsLegales";
import CGV from "./pages/CGV";
import Confidentialite from "./pages/Confidentialite";
import Livraison from "./pages/Livraison";
import Retours from "./pages/Retours";
import Garantie from "./pages/Garantie";
import ProductPage from "./pages/ProductPage";

const queryClient = new QueryClient();

const AppContent = () => {
  useCartSync();
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/produit/lampe-meduse-lumeaglow" element={<ProductPage />} />
        <Route path="/produit/lampe-meduse-aquaglow" element={<ProductPage />} />
        <Route path="/panier" element={<Panier />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="/cgv" element={<CGV />} />
        <Route path="/confidentialite" element={<Confidentialite />} />
        <Route path="/livraison" element={<Livraison />} />
        <Route path="/retours" element={<Retours />} />
        <Route path="/garantie" element={<Garantie />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner
          position="top-right"
          duration={2500}
          closeButton
          richColors={false}
          offset={88}
        />
        <AppContent />
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
