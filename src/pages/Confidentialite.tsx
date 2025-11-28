import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';

const Confidentialite = () => {
  return (
    <>
      <Helmet>
        <title>Politique de Confidentialité | AquaGlow</title>
        <meta name="description" content="Politique de confidentialité AquaGlow. Protection de vos données personnelles conformément au RGPD." />
      </Helmet>

      <Header />

      <main className="min-h-screen pt-24 pb-16 bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-bold mb-8">
              Politique de <span className="gradient-text">Confidentialité</span>
            </h1>

            <div className="prose prose-lg max-w-none space-y-6">
              <div className="card-premium p-6 sm:p-8">
                <h2 className="text-xl font-semibold mb-4">1. Introduction</h2>
                <p className="text-muted-foreground">
                  AquaGlow SAS accorde une grande importance à la protection de votre vie privée et de vos données personnelles. Cette politique de confidentialité vous informe sur la manière dont nous collectons, utilisons et protégeons vos informations lorsque vous utilisez notre site aquaglow.fr, conformément au Règlement Général sur la Protection des Données (RGPD).
                </p>
              </div>

              <div className="card-premium p-6 sm:p-8">
                <h2 className="text-xl font-semibold mb-4">2. Données collectées</h2>
                <p className="text-muted-foreground mb-4">Nous collectons les données suivantes :</p>
                <ul className="text-muted-foreground space-y-2 list-disc list-inside">
                  <li><strong>Données d'identification :</strong> nom, prénom, adresse e-mail, numéro de téléphone</li>
                  <li><strong>Données de livraison :</strong> adresse postale</li>
                  <li><strong>Données de transaction :</strong> historique des commandes, informations de paiement (traitées par notre prestataire sécurisé Shopify)</li>
                  <li><strong>Données de navigation :</strong> adresse IP, cookies, pages visitées, durée de visite</li>
                  <li><strong>Données de communication :</strong> messages envoyés via le formulaire de contact</li>
                </ul>
              </div>

              <div className="card-premium p-6 sm:p-8">
                <h2 className="text-xl font-semibold mb-4">3. Finalités du traitement</h2>
                <p className="text-muted-foreground mb-4">Vos données sont collectées pour les finalités suivantes :</p>
                <ul className="text-muted-foreground space-y-2 list-disc list-inside">
                  <li>Traitement et suivi de vos commandes</li>
                  <li>Gestion de la relation client et du service après-vente</li>
                  <li>Envoi de communications commerciales (avec votre consentement)</li>
                  <li>Amélioration de nos services et de l'expérience utilisateur</li>
                  <li>Respect de nos obligations légales et réglementaires</li>
                </ul>
              </div>

              <div className="card-premium p-6 sm:p-8">
                <h2 className="text-xl font-semibold mb-4">4. Base légale du traitement</h2>
                <p className="text-muted-foreground">
                  Le traitement de vos données repose sur : l'exécution du contrat (commande), votre consentement (newsletter, cookies), notre intérêt légitime (amélioration des services), ou nos obligations légales (facturation, comptabilité).
                </p>
              </div>

              <div className="card-premium p-6 sm:p-8">
                <h2 className="text-xl font-semibold mb-4">5. Destinataires des données</h2>
                <p className="text-muted-foreground mb-4">
                  Vos données peuvent être transmises aux destinataires suivants, dans le strict respect de la confidentialité :
                </p>
                <ul className="text-muted-foreground space-y-2 list-disc list-inside">
                  <li>Nos équipes internes (service client, logistique)</li>
                  <li>Nos prestataires de services (hébergeur, transporteur, prestataire de paiement)</li>
                  <li>Les autorités compétentes en cas d'obligation légale</li>
                </ul>
              </div>

              <div className="card-premium p-6 sm:p-8">
                <h2 className="text-xl font-semibold mb-4">6. Durée de conservation</h2>
                <p className="text-muted-foreground">
                  Vos données sont conservées pendant la durée nécessaire aux finalités pour lesquelles elles ont été collectées : données clients (3 ans après la dernière commande), données de facturation (10 ans), données de prospection (3 ans après le dernier contact).
                </p>
              </div>

              <div className="card-premium p-6 sm:p-8">
                <h2 className="text-xl font-semibold mb-4">7. Vos droits</h2>
                <p className="text-muted-foreground mb-4">
                  Conformément au RGPD, vous disposez des droits suivants :
                </p>
                <ul className="text-muted-foreground space-y-2 list-disc list-inside">
                  <li><strong>Droit d'accès :</strong> obtenir la confirmation que vos données sont traitées et en recevoir une copie</li>
                  <li><strong>Droit de rectification :</strong> demander la correction de données inexactes</li>
                  <li><strong>Droit à l'effacement :</strong> demander la suppression de vos données</li>
                  <li><strong>Droit à la limitation :</strong> demander la restriction du traitement</li>
                  <li><strong>Droit à la portabilité :</strong> recevoir vos données dans un format structuré</li>
                  <li><strong>Droit d'opposition :</strong> vous opposer au traitement de vos données</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  Pour exercer ces droits, contactez-nous à : contact@aquaglow.fr
                </p>
              </div>

              <div className="card-premium p-6 sm:p-8">
                <h2 className="text-xl font-semibold mb-4">8. Sécurité</h2>
                <p className="text-muted-foreground">
                  Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, modification, divulgation ou destruction. Toutes les transactions sont sécurisées par cryptage SSL.
                </p>
              </div>

              <div className="card-premium p-6 sm:p-8">
                <h2 className="text-xl font-semibold mb-4">9. Cookies</h2>
                <p className="text-muted-foreground">
                  Notre site utilise des cookies pour améliorer votre expérience de navigation, analyser le trafic et personnaliser les contenus. Vous pouvez configurer votre navigateur pour refuser les cookies ou être alerté lorsque des cookies sont envoyés.
                </p>
              </div>

              <div className="card-premium p-6 sm:p-8">
                <h2 className="text-xl font-semibold mb-4">10. Contact</h2>
                <p className="text-muted-foreground">
                  Pour toute question relative à cette politique ou pour exercer vos droits, vous pouvez nous contacter à : contact@aquaglow.fr ou par courrier à : AquaGlow SAS, 123 Avenue de la Lumière, 75008 Paris, France.
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

export default Confidentialite;
