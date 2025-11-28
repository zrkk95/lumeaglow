import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';

const MentionsLegales = () => {
  return (
    <>
      <Helmet>
        <title>Mentions Légales | AquaGlow</title>
        <meta name="description" content="Mentions légales du site AquaGlow. Informations sur l'éditeur, l'hébergeur et les conditions d'utilisation." />
      </Helmet>

      <Header />

      <main className="min-h-screen pt-24 pb-16 bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-bold mb-8">
              Mentions <span className="gradient-text">légales</span>
            </h1>

            <div className="prose prose-lg max-w-none">
              <div className="card-premium p-6 sm:p-8 mb-6">
                <h2 className="text-xl font-semibold mb-4">1. Éditeur du site</h2>
                <p className="text-muted-foreground mb-4">
                  Le site internet aquaglow.fr est édité par :
                </p>
                <ul className="text-muted-foreground space-y-2 list-disc list-inside">
                  <li><strong>Raison sociale :</strong> AquaGlow SAS</li>
                  <li><strong>Siège social :</strong> 123 Avenue de la Lumière, 75008 Paris, France</li>
                  <li><strong>Capital social :</strong> 10 000 €</li>
                  <li><strong>RCS :</strong> Paris B 123 456 789</li>
                  <li><strong>SIRET :</strong> 123 456 789 00012</li>
                  <li><strong>Numéro TVA intracommunautaire :</strong> FR 12 345678901</li>
                  <li><strong>Directeur de la publication :</strong> [Nom du directeur]</li>
                  <li><strong>E-mail :</strong> contact@aquaglow.fr</li>
                </ul>
              </div>

              <div className="card-premium p-6 sm:p-8 mb-6">
                <h2 className="text-xl font-semibold mb-4">2. Hébergeur</h2>
                <p className="text-muted-foreground">
                  Le site aquaglow.fr est hébergé par :
                </p>
                <ul className="text-muted-foreground space-y-2 list-disc list-inside mt-4">
                  <li><strong>Nom :</strong> Lovable / Shopify</li>
                  <li><strong>Adresse :</strong> [Adresse de l'hébergeur]</li>
                  <li><strong>Contact :</strong> [Contact de l'hébergeur]</li>
                </ul>
              </div>

              <div className="card-premium p-6 sm:p-8 mb-6">
                <h2 className="text-xl font-semibold mb-4">3. Propriété intellectuelle</h2>
                <p className="text-muted-foreground mb-4">
                  L'ensemble des éléments constituant le site aquaglow.fr (textes, graphismes, logiciels, photographies, images, vidéos, sons, plans, noms, logos, marques, créations et œuvres protégeables diverses, bases de données, etc.) ainsi que le site lui-même, relèvent des législations françaises et internationales sur le droit d'auteur et la propriété intellectuelle.
                </p>
                <p className="text-muted-foreground">
                  Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable d'AquaGlow SAS.
                </p>
              </div>

              <div className="card-premium p-6 sm:p-8 mb-6">
                <h2 className="text-xl font-semibold mb-4">4. Données personnelles</h2>
                <p className="text-muted-foreground mb-4">
                  AquaGlow SAS s'engage à respecter la réglementation en vigueur applicable au traitement de données à caractère personnel et, en particulier, le Règlement (UE) 2016/679 du Parlement européen et du Conseil du 27 avril 2016 (RGPD).
                </p>
                <p className="text-muted-foreground">
                  Pour plus d'informations sur le traitement de vos données personnelles, veuillez consulter notre <a href="/confidentialite" className="text-primary hover:underline">Politique de confidentialité</a>.
                </p>
              </div>

              <div className="card-premium p-6 sm:p-8 mb-6">
                <h2 className="text-xl font-semibold mb-4">5. Cookies</h2>
                <p className="text-muted-foreground">
                  Le site aquaglow.fr peut utiliser des cookies pour améliorer l'expérience utilisateur, analyser le trafic et personnaliser les contenus. En poursuivant votre navigation sur ce site, vous acceptez l'utilisation de cookies conformément à notre politique de confidentialité.
                </p>
              </div>

              <div className="card-premium p-6 sm:p-8">
                <h2 className="text-xl font-semibold mb-4">6. Limitation de responsabilité</h2>
                <p className="text-muted-foreground mb-4">
                  AquaGlow SAS s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site, dont elle se réserve le droit de corriger le contenu à tout moment et sans préavis.
                </p>
                <p className="text-muted-foreground">
                  AquaGlow SAS décline toute responsabilité en cas de difficulté d'accès à son site ou de toute interruption de connexion, quel qu'en soit le motif.
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

export default MentionsLegales;
