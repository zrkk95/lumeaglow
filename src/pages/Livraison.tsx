import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Truck, Clock, MapPin, Package } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Livraison = () => {
  return (
    <>
      <Helmet>
        <title>Politique de Livraison | AquaGlow</title>
        <meta name="description" content="Informations sur la livraison AquaGlow. Délais, zones de livraison, frais et suivi de colis." />
      </Helmet>

      <Header />

      <main className="min-h-screen pt-24 pb-16 bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-bold mb-8">
              Politique de <span className="gradient-text">Livraison</span>
            </h1>

            {/* Key Info Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              {[
                { icon: Truck, label: 'Livraison gratuite', sub: 'France métropolitaine' },
                { icon: Clock, label: '3-5 jours ouvrés', sub: 'Délai standard' },
                { icon: Package, label: 'Expédition 24-48h', sub: 'Après validation' },
                { icon: MapPin, label: 'Suivi en ligne', sub: 'Numéro de tracking' },
              ].map((item) => (
                <div key={item.label} className="card-premium p-4 text-center">
                  <item.icon className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <p className="font-semibold text-sm">{item.label}</p>
                  <p className="text-xs text-muted-foreground">{item.sub}</p>
                </div>
              ))}
            </div>

            <div className="prose prose-lg max-w-none space-y-6">
              <div className="card-premium p-6 sm:p-8">
                <h2 className="text-xl font-semibold mb-4">Délais de livraison</h2>
                <p className="text-muted-foreground mb-4">
                  Chez AquaGlow, nous nous efforçons de préparer et expédier votre commande dans les meilleurs délais. Votre commande sera traitée et expédiée sous 24 à 48 heures ouvrées après validation du paiement.
                </p>
                <div className="bg-secondary/50 rounded-xl p-4">
                  <p className="font-medium mb-2">Délais indicatifs de livraison :</p>
                  <ul className="text-muted-foreground space-y-1 text-sm">
                    <li>• <strong>France métropolitaine :</strong> 3 à 5 jours ouvrés</li>
                    <li>• <strong>Belgique, Luxembourg :</strong> 4 à 6 jours ouvrés</li>
                    <li>• <strong>Europe :</strong> 5 à 10 jours ouvrés</li>
                    <li>• <strong>DOM-TOM :</strong> 10 à 15 jours ouvrés</li>
                    <li>• <strong>International :</strong> 7 à 15 jours ouvrés</li>
                  </ul>
                </div>
              </div>

              <div className="card-premium p-6 sm:p-8">
                <h2 className="text-xl font-semibold mb-4">Frais de livraison</h2>
                <p className="text-muted-foreground mb-4">
                  Bonne nouvelle ! La livraison est <strong>gratuite</strong> pour toutes les commandes livrées en France métropolitaine, sans minimum d'achat.
                </p>
                <div className="bg-secondary/50 rounded-xl p-4">
                  <p className="font-medium mb-2">Frais par destination :</p>
                  <ul className="text-muted-foreground space-y-1 text-sm">
                    <li>• <strong>France métropolitaine :</strong> Gratuit</li>
                    <li>• <strong>Belgique, Luxembourg :</strong> 4,90 €</li>
                    <li>• <strong>Europe :</strong> 7,90 €</li>
                    <li>• <strong>DOM-TOM :</strong> 12,90 €</li>
                    <li>• <strong>Autres pays :</strong> Calculé au checkout</li>
                  </ul>
                </div>
              </div>

              <div className="card-premium p-6 sm:p-8">
                <h2 className="text-xl font-semibold mb-4">Suivi de commande</h2>
                <p className="text-muted-foreground mb-4">
                  Dès l'expédition de votre colis, vous recevrez un e-mail contenant votre numéro de suivi. Ce numéro vous permettra de suivre l'acheminement de votre commande en temps réel sur le site du transporteur.
                </p>
                <p className="text-muted-foreground">
                  Vous pouvez également utiliser notre outil de suivi de commande disponible directement sur notre site en vous rendant dans la section "Suivre ma commande".
                </p>
              </div>

              <div className="card-premium p-6 sm:p-8">
                <h2 className="text-xl font-semibold mb-4">Transporteurs partenaires</h2>
                <p className="text-muted-foreground mb-4">
                  Nous travaillons avec des transporteurs reconnus pour leur fiabilité :
                </p>
                <ul className="text-muted-foreground space-y-2 list-disc list-inside">
                  <li>Colissimo (La Poste) pour la France</li>
                  <li>DHL pour l'international</li>
                  <li>Chronopost pour les livraisons express</li>
                </ul>
              </div>

              <div className="card-premium p-6 sm:p-8">
                <h2 className="text-xl font-semibold mb-4">Réception du colis</h2>
                <p className="text-muted-foreground mb-4">
                  À la réception de votre colis, nous vous recommandons de :
                </p>
                <ul className="text-muted-foreground space-y-2 list-disc list-inside">
                  <li>Vérifier l'état de l'emballage avant de signer</li>
                  <li>En cas de dommage visible, émettre des réserves écrites auprès du livreur</li>
                  <li>Ouvrir le colis et vérifier le contenu dans les 24 heures</li>
                  <li>Nous contacter immédiatement en cas de problème</li>
                </ul>
              </div>

              <div className="card-premium p-6 sm:p-8">
                <h2 className="text-xl font-semibold mb-4">Questions fréquentes</h2>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium mb-1">Ma commande est en retard, que faire ?</p>
                    <p className="text-sm text-muted-foreground">
                      Si votre colis n'est pas arrivé dans les délais indiqués, vérifiez d'abord le suivi en ligne. Si le problème persiste, contactez notre service client qui fera le nécessaire.
                    </p>
                  </div>
                  <div>
                    <p className="font-medium mb-1">Puis-je modifier mon adresse de livraison ?</p>
                    <p className="text-sm text-muted-foreground">
                      Si votre commande n'a pas encore été expédiée, contactez-nous rapidement pour modifier l'adresse. Une fois expédiée, la modification n'est plus possible.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Livraison;
