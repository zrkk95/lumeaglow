import { Link } from 'react-router-dom';
import { Instagram, Youtube } from 'lucide-react';

// TikTok icon component
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const paymentMethods = [
    { name: 'VISA', bg: 'bg-blue-600' },
    { name: 'MC', bg: 'bg-red-500' },
    { name: 'PayPal', bg: 'bg-blue-500' },
    { name: 'Apple', bg: 'bg-gray-800' },
    { name: 'Google', bg: 'bg-white text-gray-800' },
    { name: 'AMEX', bg: 'bg-blue-400' },
  ];

  return (
    <footer className="footer-gradient text-white">
      {/* Main Footer */}
      <div className="container-custom py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4">
              AquaGlow
            </h3>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Transformez votre espace avec nos lampes méduses haut de gamme. Chaque pièce allie un design élégant à une technologie LED apaisante pour créer l'ambiance parfaite.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com/aquaglow_officiel"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://tiktok.com/@aquaglow_vibes"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <TikTokIcon className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com/@aquaglow"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Liens rapides</h4>
            <ul className="space-y-3">
              {[
                { to: '/', label: 'Maison' },
                { to: '/produit/lampe-meduse-aquaglow', label: 'Produits' },
                { to: '/#a-propos', label: 'À propos de nous' },
                { to: '/#faq', label: 'FAQ' },
                { to: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Soutien</h4>
            <ul className="space-y-3">
              {[
                { to: '/#suivi', label: 'Suivre votre commande' },
                { to: '/livraison', label: 'Expédition' },
                { to: '/retours', label: 'Retours' },
                { to: '/garantie', label: 'Garantie' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Payment Methods */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Méthodes de paiement sécurisées</h4>
            <div className="flex flex-wrap gap-2">
              {paymentMethods.map((method) => (
                <div
                  key={method.name}
                  className={`px-3 py-2 rounded-md text-xs font-bold ${method.bg}`}
                >
                  {method.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/60 text-center sm:text-left">
              © {currentYear} AquaGlow. Tous droits réservés.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-white/60">
              <Link to="/confidentialite" className="hover:text-white transition-colors">
                Politique de confidentialité
              </Link>
              <Link to="/cgv" className="hover:text-white transition-colors">
                Conditions d'utilisation
              </Link>
              <Link to="/mentions-legales" className="hover:text-white transition-colors">
                Mentions légales
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
