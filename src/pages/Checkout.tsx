import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ShoppingBag } from 'lucide-react';
import { useCartStore } from '@/stores/cartStore';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';

const Checkout = () => {
  const { items, getCheckoutUrl } = useCartStore();
  const navigate = useNavigate();

  // Redirect to Shopify checkout automatically
  useEffect(() => {
    const checkoutUrl = getCheckoutUrl();
    if (checkoutUrl && items.length > 0) {
      window.open(checkoutUrl, '_blank');
    }
  }, []);

  if (items.length === 0) {
    return (
      <>
        <Header />
        <main className="min-h-screen pt-24 pb-16 bg-background">
          <div className="container-custom">
            <div className="max-w-lg mx-auto card-premium p-8 text-center">
              <ShoppingBag className="w-16 h-16 mx-auto text-muted-foreground/30 mb-4" />
              <h1 className="text-2xl font-bold mb-4">Votre panier est vide</h1>
              <p className="text-muted-foreground mb-6">Ajoutez des produits à votre panier pour passer commande.</p>
              <Link to="/#produit" className="btn-primary">Voir le produit</Link>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Finaliser la commande | LumeaGlow</title>
        <meta name="description" content="Finalisez votre commande LumeaGlow via Shopify Checkout sécurisé." />
      </Helmet>

      <Header />

      <main className="min-h-screen pt-24 pb-16 bg-background">
        <div className="container-custom">
          <div className="mb-8">
            <Link to="/panier" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="w-4 h-4" /> Retour au panier
            </Link>
          </div>

          <div className="max-w-lg mx-auto card-premium p-8 text-center">
            <h1 className="text-2xl font-bold mb-4">Redirection vers le <span className="gradient-text">paiement sécurisé</span></h1>
            <p className="text-muted-foreground mb-6">
              Vous allez être redirigé vers Shopify Checkout pour finaliser votre commande en toute sécurité.
            </p>
            <button
              onClick={() => {
                const checkoutUrl = getCheckoutUrl();
                if (checkoutUrl) window.open(checkoutUrl, '_blank');
              }}
              className="btn-primary inline-flex items-center gap-2"
            >
              Accéder au paiement sécurisé
            </button>
            <p className="text-xs text-muted-foreground mt-4">Paiement 100% sécurisé via Shopify Payments</p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Checkout;
