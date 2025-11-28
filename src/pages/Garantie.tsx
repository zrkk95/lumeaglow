import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Shield, Check, Clock, Headphones } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Garantie = () => {
  return (
    <>
      <Helmet>
        <title>Garantie 12 Mois | AquaGlow</title>
        <meta name="description" content="Garantie AquaGlow de 12 mois sur tous nos produits. Protection complète contre les défauts de fabrication." />
      </Helmet>

      <Header />

      <main className="min-h-screen pt-24 pb-16 bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-bold mb-8">
              Garantie <span className="gradient-text">12 Mois</span>
            </h1>

            {/* Key Info Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              {[
                { icon: Shield, label: '12 mois', sub: 'Garantie complète' },
                { icon: Check, label: 'Défauts couverts', sub: 'Fabrication' },
                { icon: Clock, label: 'SAV rapide', sub: 'Réponse sous 48h' },
                { icon: Headphones, label: 'Support dédié', sub: 'À votre écoute' },
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
                <h2 className="text-xl font-semibold mb-4">Notre engagement qualité</h2>
                <p className="text-muted-foreground">
                  AquaGlow s'engage à vous fournir des produits de haute qualité. Chaque Lampe Méduse AquaGlow bénéficie d'une garantie commerciale de <strong>12 mois</strong> à compter de la date de livraison, en plus des garanties légales applicables.
                </p>
              </div>

              <div className="card-premium p-6 sm:p-8">
                <h2 className="text-xl font-semibold mb-4">Ce qui est couvert</h2>
                <p className="text-muted-foreground mb-4">Notre garantie couvre :</p>
                <ul className="text-muted-foreground space-y-2 list-disc list-inside">
                  <li>Tous les défauts de fabrication</li>
                  <li>Les dysfonctionnements du système LED</li>
                  <li>Les problèmes de moteur ou de pompe</li>
                  <li>Les défauts de matériaux (fissures, déformations non causées par l'utilisateur)</li>
                  <li>Les problèmes électriques dans des conditions normales d'utilisation</li>
                </ul>
              </div>

              <div className="card-premium p-6 sm:p-8">
                <h2 className="text-xl font-semibold mb-4">Ce qui n'est pas couvert</h2>
                <p className="text-muted-foreground mb-4">La garantie ne s'applique pas dans les cas suivants :</p>
                <ul className="text-muted-foreground space-y-2 list-disc list-inside">
                  <li>Dommages causés par une mauvaise utilisation ou un accident</li>
                  <li>Usure normale des composants (méduses en silicone après utilisation intensive)</li>
                  <li>Modifications ou réparations effectuées par un tiers non autorisé</li>
                  <li>Dommages causés par des surtensions électriques</li>
                  <li>Utilisation non conforme aux instructions du manuel</li>
                  <li>Dommages cosmétiques (rayures, chocs)</li>
                </ul>
              </div>

              <div className="card-premium p-6 sm:p-8">
                <h2 className="text-xl font-semibold mb-4">Comment faire jouer la garantie</h2>
                <p className="text-muted-foreground mb-4">Si vous rencontrez un problème avec votre produit :</p>
                <ol className="text-muted-foreground space-y-3 list-decimal list-inside">
                  <li><strong>Contactez notre service client</strong> à contact@aquaglow.fr avec votre numéro de commande et une description du problème.</li>
                  <li><strong>Envoyez des photos ou vidéos</strong> illustrant le défaut pour accélérer le diagnostic.</li>
                  <li><strong>Notre équipe technique</strong> évaluera votre demande sous 48 heures.</li>
                  <li><strong>Si la garantie s'applique</strong>, nous vous proposerons soit un remplacement, soit une réparation, soit un remboursement.</li>
                </ol>
              </div>

              <div className="card-premium p-6 sm:p-8">
                <h2 className="text-xl font-semibold mb-4">Garanties légales</h2>
                <p className="text-muted-foreground mb-4">
                  En plus de notre garantie commerciale, vous bénéficiez des garanties légales suivantes :
                </p>
                <div className="space-y-4">
                  <div className="bg-secondary/50 rounded-xl p-4">
                    <p className="font-medium mb-2">Garantie légale de conformité (2 ans)</p>
                    <p className="text-sm text-muted-foreground">
                      Articles L217-4 à L217-14 du Code de la consommation. Le vendeur est tenu de livrer un bien conforme au contrat et répond des défauts de conformité existant lors de la délivrance.
                    </p>
                  </div>
                  <div className="bg-secondary/50 rounded-xl p-4">
                    <p className="font-medium mb-2">Garantie des vices cachés</p>
                    <p className="text-sm text-muted-foreground">
                      Articles 1641 à 1649 du Code civil. Le vendeur garantit l'acheteur contre les défauts cachés rendant le bien impropre à l'usage auquel on le destine.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card-premium p-6 sm:p-8">
                <h2 className="text-xl font-semibold mb-4">Extension de garantie</h2>
                <p className="text-muted-foreground">
                  Pour une tranquillité d'esprit prolongée, nous proposons une extension de garantie de 12 mois supplémentaires (soit 24 mois au total). Contactez notre service client pour plus d'informations.
                </p>
              </div>

              <div className="card-premium p-6 sm:p-8">
                <h2 className="text-xl font-semibold mb-4">Conseils d'entretien</h2>
                <p className="text-muted-foreground mb-4">Pour maximiser la durée de vie de votre lampe :</p>
                <ul className="text-muted-foreground space-y-2 list-disc list-inside">
                  <li>Utilisez de l'eau distillée pour éviter les dépôts calcaires</li>
                  <li>Changez l'eau tous les 3-4 mois</li>
                  <li>Nettoyez l'extérieur avec un chiffon doux et sec</li>
                  <li>Évitez l'exposition directe au soleil prolongée</li>
                  <li>N'utilisez pas de produits chimiques pour le nettoyage</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Garantie;
