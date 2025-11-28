import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { RotateCcw, Clock, CreditCard, Package } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Retours = () => {
  return (
    <>
      <Helmet>
        <title>Politique de Retours | AquaGlow</title>
        <meta name="description" content="Politique de retours et d'échanges AquaGlow. 30 jours pour changer d'avis, satisfait ou remboursé." />
      </Helmet>

      <Header />

      <main className="min-h-screen pt-24 pb-16 bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-bold mb-8">
              Politique de <span className="gradient-text">Retours</span>
            </h1>

            {/* Key Info Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              {[
                { icon: Clock, label: '30 jours', sub: 'Pour retourner' },
                { icon: RotateCcw, label: 'Satisfait ou remboursé', sub: 'Garanti' },
                { icon: CreditCard, label: 'Remboursement', sub: 'Sous 5 jours' },
                { icon: Package, label: 'Échange possible', sub: 'Sur demande' },
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
                <h2 className="text-xl font-semibold mb-4">Notre engagement</h2>
                <p className="text-muted-foreground">
                  Chez AquaGlow, votre satisfaction est notre priorité. Nous vous offrons un délai de <strong>30 jours</strong> après réception de votre commande pour retourner votre produit si celui-ci ne vous convient pas. C'est 16 jours de plus que le délai légal de rétractation de 14 jours !
                </p>
              </div>

              <div className="card-premium p-6 sm:p-8">
                <h2 className="text-xl font-semibold mb-4">Conditions de retour</h2>
                <p className="text-muted-foreground mb-4">Pour être éligible au retour, votre produit doit :</p>
                <ul className="text-muted-foreground space-y-2 list-disc list-inside">
                  <li>Être dans son emballage d'origine, complet (accessoires, notice, etc.)</li>
                  <li>Ne pas avoir été utilisé de manière abusive ou endommagé</li>
                  <li>Être retourné dans les 30 jours suivant la réception</li>
                  <li>Être accompagné de la facture ou preuve d'achat</li>
                </ul>
              </div>

              <div className="card-premium p-6 sm:p-8">
                <h2 className="text-xl font-semibold mb-4">Procédure de retour</h2>
                <p className="text-muted-foreground mb-4">Pour effectuer un retour, suivez ces étapes simples :</p>
                <ol className="text-muted-foreground space-y-3 list-decimal list-inside">
                  <li><strong>Contactez-nous</strong> par e-mail à contact@aquaglow.fr en indiquant votre numéro de commande et le motif du retour.</li>
                  <li><strong>Recevez l'autorisation</strong> de retour avec les instructions détaillées et l'adresse d'expédition.</li>
                  <li><strong>Emballez soigneusement</strong> le produit dans son emballage d'origine.</li>
                  <li><strong>Expédiez le colis</strong> en recommandé avec suivi (conservez la preuve d'envoi).</li>
                  <li><strong>Recevez votre remboursement</strong> sous 5 jours ouvrés après réception et vérification du colis.</li>
                </ol>
              </div>

              <div className="card-premium p-6 sm:p-8">
                <h2 className="text-xl font-semibold mb-4">Frais de retour</h2>
                <p className="text-muted-foreground mb-4">
                  Les frais de retour sont à votre charge, sauf dans les cas suivants :
                </p>
                <ul className="text-muted-foreground space-y-2 list-disc list-inside">
                  <li>Produit défectueux ou non conforme à la description</li>
                  <li>Erreur de notre part (mauvais produit envoyé)</li>
                  <li>Produit endommagé pendant le transport</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  Dans ces cas, nous vous fournirons une étiquette de retour prépayée.
                </p>
              </div>

              <div className="card-premium p-6 sm:p-8">
                <h2 className="text-xl font-semibold mb-4">Remboursement</h2>
                <p className="text-muted-foreground mb-4">
                  Une fois votre retour reçu et inspecté, nous vous enverrons un e-mail de confirmation. Le remboursement sera effectué sur le moyen de paiement utilisé lors de l'achat, sous 5 jours ouvrés.
                </p>
                <p className="text-muted-foreground">
                  <strong>Note :</strong> Le délai d'apparition sur votre compte bancaire peut varier selon votre établissement (généralement 5 à 10 jours).
                </p>
              </div>

              <div className="card-premium p-6 sm:p-8">
                <h2 className="text-xl font-semibold mb-4">Échanges</h2>
                <p className="text-muted-foreground">
                  Nous proposons également des échanges. Si vous souhaitez échanger votre produit, contactez-nous et nous organiserons l'échange dans les meilleures conditions. Les frais d'envoi du nouveau produit seront à notre charge.
                </p>
              </div>

              <div className="card-premium p-6 sm:p-8">
                <h2 className="text-xl font-semibold mb-4">Produits non retournables</h2>
                <p className="text-muted-foreground mb-4">
                  Pour des raisons d'hygiène et de sécurité, les produits suivants ne peuvent pas être retournés :
                </p>
                <ul className="text-muted-foreground space-y-2 list-disc list-inside">
                  <li>Produits ayant été utilisés et ne pouvant être revendus</li>
                  <li>Produits personnalisés sur demande</li>
                  <li>Produits endommagés par le client</li>
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

export default Retours;
