import { Link } from 'react-router-dom';
import { CheckCircle, Package, Mail, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';

const Confirmation = () => {
  // Génération d'un numéro de commande fictif
  const orderNumber = `AG-${Date.now().toString().slice(-8)}`;

  return (
    <>
      <Helmet>
        <title>Commande confirmée | AquaGlow</title>
        <meta name="description" content="Votre commande AquaGlow a été confirmée. Merci pour votre achat !" />
      </Helmet>

      <Header />

      <main className="min-h-screen pt-24 pb-16 bg-background">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            {/* Success Icon */}
            <div className="mb-8">
              <div className="w-24 h-24 mx-auto rounded-full bg-green-100 flex items-center justify-center animate-scale-in">
                <CheckCircle className="w-12 h-12 text-green-600" />
              </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 animate-fade-in-up">
              Commande <span className="gradient-text">confirmée</span> !
            </h1>
            <p className="text-lg text-muted-foreground mb-8 animate-fade-in-up delay-100">
              Merci pour votre achat. Votre commande a été enregistrée avec succès.
            </p>

            {/* Order Info Card */}
            <div className="card-premium p-6 sm:p-8 mb-8 animate-fade-in-up delay-200">
              <div className="flex items-center justify-center gap-2 mb-6">
                <Package className="w-5 h-5 text-primary" />
                <span className="font-medium">Numéro de commande</span>
              </div>
              <p className="text-2xl font-bold gradient-text mb-6">{orderNumber}</p>

              <div className="bg-secondary/50 rounded-xl p-4 text-left space-y-3">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Confirmation par e-mail</p>
                    <p className="text-sm text-muted-foreground">
                      Un e-mail de confirmation avec les détails de votre commande vous a été envoyé.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Package className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Expédition sous 24-48h</p>
                    <p className="text-sm text-muted-foreground">
                      Vous recevrez un e-mail avec le numéro de suivi dès l'expédition.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* What's Next */}
            <div className="card-premium p-6 sm:p-8 mb-8 animate-fade-in-up delay-300">
              <h2 className="text-xl font-semibold mb-4">Et maintenant ?</h2>
              <div className="space-y-3 text-left">
                <p className="text-muted-foreground">
                  <span className="font-medium text-foreground">1.</span> Gardez votre numéro de commande pour suivre votre colis.
                </p>
                <p className="text-muted-foreground">
                  <span className="font-medium text-foreground">2.</span> Vérifiez votre boîte de réception (et vos spams) pour l'e-mail de confirmation.
                </p>
                <p className="text-muted-foreground">
                  <span className="font-medium text-foreground">3.</span> Utilisez notre outil de suivi pour connaître l'avancement de votre livraison.
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-400">
              <Link
                to="/#suivi"
                className="btn-primary flex items-center justify-center gap-2"
              >
                Suivre ma commande
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/" className="btn-secondary">
                Retour à l'accueil
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Confirmation;
