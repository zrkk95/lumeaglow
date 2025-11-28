import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-light to-accent-light">
              AquaGlow
            </h3>
            <p className="text-background/70 text-sm leading-relaxed mb-6">
              Apportez la magie de l'océan chez vous avec notre lampe méduse LED innovante. Design unique, qualité premium, satisfaction garantie.
            </p>
            <div className="flex items-center gap-3 text-sm text-background/60">
              <Mail className="w-4 h-4" />
              <span>contact@aquaglow.fr</span>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-3">
              {[
                { to: '/', label: 'Accueil' },
                { to: '/#produit', label: 'Produits' },
                { to: '/#a-propos', label: 'À propos' },
                { to: '/#faq', label: 'FAQ' },
                { to: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-background/70 hover:text-primary-light transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              {[
                { to: '/livraison', label: 'Livraison' },
                { to: '/retours', label: 'Retours & Échanges' },
                { to: '/garantie', label: 'Garantie' },
                { to: '/#suivi', label: 'Suivi de commande' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-background/70 hover:text-primary-light transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Légal */}
          <div>
            <h4 className="font-semibold mb-4">Informations légales</h4>
            <ul className="space-y-3">
              {[
                { to: '/mentions-legales', label: 'Mentions légales' },
                { to: '/cgv', label: 'Conditions générales de vente' },
                { to: '/confidentialite', label: 'Politique de confidentialité' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-background/70 hover:text-primary-light transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container-custom py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-background/60 text-center sm:text-left">
              © {currentYear} AquaGlow. Tous droits réservés.
            </p>
            <div className="flex items-center gap-4 text-sm text-background/60">
              <span>Paiement sécurisé via Shopify</span>
              <div className="flex items-center gap-2">
                <div className="w-10 h-6 bg-background/20 rounded flex items-center justify-center text-[10px] font-bold">
                  VISA
                </div>
                <div className="w-10 h-6 bg-background/20 rounded flex items-center justify-center text-[10px] font-bold">
                  MC
                </div>
                <div className="w-10 h-6 bg-background/20 rounded flex items-center justify-center text-[10px] font-bold">
                  CB
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
