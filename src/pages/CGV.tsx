import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';

const CGV = () => {
  return (
    <>
      <Helmet>
        <title>Conditions Générales de Vente | AquaGlow</title>
        <meta name="description" content="Conditions générales de vente AquaGlow. Prix, commandes, livraison, paiement et garanties." />
      </Helmet>

      <Header />

      <main className="min-h-screen pt-24 pb-16 bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-bold mb-8">
              Conditions Générales de <span className="gradient-text">Vente</span>
            </h1>

            <div className="prose prose-lg max-w-none space-y-6">
              <div className="card-premium p-6 sm:p-8">
                <h2 className="text-xl font-semibold mb-4">Article 1 - Objet</h2>
                <p className="text-muted-foreground">
                  Les présentes conditions générales de vente (CGV) régissent les ventes de produits effectuées sur le site internet aquaglow.fr, édité par AquaGlow SAS. Toute commande implique l'acceptation sans réserve de ces CGV par l'acheteur.
                </p>
              </div>

              <div className="card-premium p-6 sm:p-8">
                <h2 className="text-xl font-semibold mb-4">Article 2 - Prix</h2>
                <p className="text-muted-foreground mb-4">
                  Les prix de nos produits sont indiqués en euros toutes taxes comprises (TTC), hors frais de livraison. AquaGlow SAS se réserve le droit de modifier ses prix à tout moment, mais les produits seront facturés sur la base des tarifs en vigueur au moment de la validation de la commande.
                </p>
                <p className="text-muted-foreground">
                  Les frais de livraison sont indiqués avant validation définitive de la commande et sont offerts pour toute commande livrée en France métropolitaine.
                </p>
              </div>

              <div className="card-premium p-6 sm:p-8">
                <h2 className="text-xl font-semibold mb-4">Article 3 - Commande</h2>
                <p className="text-muted-foreground mb-4">
                  L'acheteur a la possibilité de passer commande en ligne sur le site aquaglow.fr. La validation de la commande implique l'acceptation des présentes CGV. Un e-mail de confirmation récapitulant les éléments essentiels de la commande sera envoyé à l'acheteur.
                </p>
                <p className="text-muted-foreground">
                  AquaGlow SAS se réserve le droit d'annuler toute commande pour motif légitime, notamment en cas de problème d'approvisionnement ou en cas de doute sur l'identité de l'acheteur.
                </p>
              </div>

              <div className="card-premium p-6 sm:p-8">
                <h2 className="text-xl font-semibold mb-4">Article 4 - Paiement</h2>
                <p className="text-muted-foreground mb-4">
                  Le paiement s'effectue en ligne par carte bancaire (Visa, Mastercard, CB) via la plateforme sécurisée Shopify. Le paiement est débité au moment de la validation de la commande.
                </p>
                <p className="text-muted-foreground">
                  AquaGlow SAS met en œuvre tous les moyens pour assurer la confidentialité et la sécurité des données transmises sur le site. Les transactions sont sécurisées par un protocole de cryptage SSL.
                </p>
              </div>

              <div className="card-premium p-6 sm:p-8">
                <h2 className="text-xl font-semibold mb-4">Article 5 - Livraison</h2>
                <p className="text-muted-foreground mb-4">
                  Les produits sont livrés à l'adresse indiquée par l'acheteur lors de la commande. Les délais de livraison sont donnés à titre indicatif et sont généralement de 3 à 5 jours ouvrés pour la France métropolitaine, et de 7 à 15 jours ouvrés pour l'international.
                </p>
                <p className="text-muted-foreground">
                  En cas de retard de livraison supérieur à 30 jours, l'acheteur peut demander l'annulation de sa commande et le remboursement intégral.
                </p>
              </div>

              <div className="card-premium p-6 sm:p-8">
                <h2 className="text-xl font-semibold mb-4">Article 6 - Droit de rétractation</h2>
                <p className="text-muted-foreground mb-4">
                  Conformément à l'article L221-18 du Code de la consommation, l'acheteur dispose d'un délai de 14 jours à compter de la réception du produit pour exercer son droit de rétractation, sans avoir à justifier de motifs ni à payer de pénalités.
                </p>
                <p className="text-muted-foreground">
                  AquaGlow SAS étend ce délai à 30 jours pour offrir une expérience d'achat sans risque. Les frais de retour sont à la charge de l'acheteur, sauf en cas de produit défectueux.
                </p>
              </div>

              <div className="card-premium p-6 sm:p-8">
                <h2 className="text-xl font-semibold mb-4">Article 7 - Garantie</h2>
                <p className="text-muted-foreground mb-4">
                  Tous les produits vendus sur aquaglow.fr bénéficient de la garantie légale de conformité (articles L217-4 à L217-14 du Code de la consommation) et de la garantie contre les vices cachés (articles 1641 à 1649 du Code civil).
                </p>
                <p className="text-muted-foreground">
                  En plus des garanties légales, AquaGlow SAS offre une garantie commerciale de 12 mois couvrant tout défaut de fabrication dans des conditions normales d'utilisation.
                </p>
              </div>

              <div className="card-premium p-6 sm:p-8">
                <h2 className="text-xl font-semibold mb-4">Article 8 - Service client</h2>
                <p className="text-muted-foreground">
                  Pour toute question ou réclamation, le service client AquaGlow est joignable par e-mail à l'adresse contact@aquaglow.fr ou via le formulaire de contact disponible sur le site. Nous nous engageons à répondre sous 24 à 48 heures ouvrées.
                </p>
              </div>

              <div className="card-premium p-6 sm:p-8">
                <h2 className="text-xl font-semibold mb-4">Article 9 - Loi applicable</h2>
                <p className="text-muted-foreground">
                  Les présentes CGV sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents. Toutefois, conformément aux règles applicables en matière de médiation, le consommateur peut recourir à un médiateur de la consommation avant toute action en justice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default CGV;
