import { Link } from 'react-router-dom';
import { Instagram } from 'lucide-react';

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

  const paymentIcons = [
    { name: 'Visa', svg: <svg viewBox="0 0 48 32" className="h-6 w-auto"><rect width="48" height="32" rx="4" fill="#1A1F71"/><path d="M19.5 21h-3l1.9-11.5h3L19.5 21zm7.8-11.2c-.6-.2-1.5-.5-2.7-.5-3 0-5 1.5-5 3.6 0 1.6 1.5 2.5 2.6 3 1.1.5 1.5.9 1.5 1.4 0 .7-.9 1.1-1.7 1.1-1.2 0-1.8-.2-2.7-.5l-.4-.2-.4 2.4c.7.3 2 .6 3.3.6 3.2 0 5.2-1.5 5.2-3.7 0-1.2-.8-2.2-2.5-3-.9-.5-1.5-.8-1.5-1.4 0-.5.5-1 1.6-1 .9 0 1.6.2 2.1.4l.3.1.3-2.3zm7.9-.3h-2.3c-.7 0-1.3.2-1.6.9L27 21h3.2l.6-1.7h3.9l.4 1.7H38L35.2 9.5zm-3.5 7.4l1.2-3.2.2-.5.3 1.5.7 2.2h-2.4zM16 9.5l-2.8 7.8-.3-1.5c-.5-1.7-2.1-3.6-3.9-4.5l2.7 9.7h3.2L19.2 9.5H16z" fill="white"/><path d="M10.4 9.5H5.6l-.1.3c3.8.9 6.3 3.2 7.3 5.9l-1-5.3c-.2-.7-.7-.9-1.4-.9z" fill="#F9A51A"/></svg> },
    { name: 'Mastercard', svg: <svg viewBox="0 0 48 32" className="h-6 w-auto"><rect width="48" height="32" rx="4" fill="#252525"/><circle cx="19" cy="16" r="8" fill="#EB001B"/><circle cx="29" cy="16" r="8" fill="#F79E1B"/><path d="M24 10.3a8 8 0 0 1 3 5.7 8 8 0 0 1-3 5.7 8 8 0 0 1-3-5.7 8 8 0 0 1 3-5.7z" fill="#FF5F00"/></svg> },
    { name: 'PayPal', svg: <svg viewBox="0 0 48 32" className="h-6 w-auto"><rect width="48" height="32" rx="4" fill="#fff" stroke="#e5e5e5" strokeWidth="0.5"/><path d="M18.5 24.5h-2.8l.2-1.3 2.8-14.7h3.6c2.4 0 4.2.5 5 1.6.7.9.9 2.1.5 3.7-.1.6-.4 1.3-.7 1.9a5.7 5.7 0 0 1-3.1 2.8c-.9.3-2 .5-3.3.5h-1.5l-.7 5.5zm3-8.5h.9c1.7 0 2.9-.8 3.3-2.5.3-1.2-.3-1.8-1.7-1.8h-.9L21.5 16z" fill="#253B80"/><path d="M33.5 12.5c.1-.5.1-.9 0-1.3-.6-1.5-2.4-2.2-4.9-2.2h-4.9l-2.8 15h3l.7-4.5h1.3c1.3 0 2.4-.2 3.3-.5a5.7 5.7 0 0 0 3.1-2.8c.3-.6.6-1.3.7-1.9.2-.7.3-1.3.5-1.8z" fill="#179BD7"/></svg> },
    { name: 'Apple Pay', svg: <svg viewBox="0 0 48 32" className="h-6 w-auto"><rect width="48" height="32" rx="4" fill="#000"/><path d="M15.2 11.8c.5-.6.8-1.4.7-2.3-.7 0-1.6.5-2.1 1.1-.4.5-.8 1.4-.7 2.2.8.1 1.6-.4 2.1-1zm.7 1.2c-1.2-.1-2.2.7-2.7.7s-1.4-.6-2.4-.6c-1.2 0-2.3.7-2.9 1.8-1.3 2.2-.3 5.4.9 7.2.6.9 1.3 1.9 2.3 1.8.9 0 1.3-.6 2.4-.6s1.4.6 2.4.6c1 0 1.6-.9 2.2-1.8.7-1 1-2 1-2.1-1-.4-1.8-1.5-1.8-2.9 0-1.2.7-2.2 1.6-2.7-.6-.9-1.6-1.4-2.6-1.4h-.4zm9.1.5h-2.6l-3 9.5h1.8l.8-2.6h2.8l.8 2.6h1.8l-2.4-9.5zm-2.6 5.6l1-3.3.1-.4.1.4 1 3.3h-2.2zm8.3-5.6l-1.9 5.5-1.8-5.5h-1.9l2.8 8.1-.1.5c-.3.7-.7 1-1.3 1-.2 0-.4 0-.6-.1v1.5c.3.1.6.1.9.1 1.4 0 2.1-.8 2.8-2.7l2.9-8.4h-1.8z" fill="white"/></svg> },
    { name: 'Google Pay', svg: <svg viewBox="0 0 48 32" className="h-6 w-auto"><rect width="48" height="32" rx="4" fill="#fff" stroke="#e5e5e5" strokeWidth="0.5"/><path d="M23.2 16.8v3.1h-1V11.5h2.6a2.4 2.4 0 0 1 1.7.7 2.3 2.3 0 0 1 0 3.3 2.4 2.4 0 0 1-1.7.7h-1.6v.6zm0-4.3v3h1.7a1.4 1.4 0 0 0 1-.4 1.3 1.3 0 0 0 0-2 1.4 1.4 0 0 0-1-.4h-1.7v-.2zm6.7 1.7c.7 0 1.3.2 1.8.6.4.4.7 1 .7 1.7v3.4h-.9v-.8c-.4.6-1 .9-1.7.9-.6 0-1.2-.2-1.5-.5a1.7 1.7 0 0 1-.6-1.3c0-.5.2-1 .6-1.3.4-.3 1-.5 1.6-.5.6 0 1.1.2 1.5.5v-.3c0-.5-.2-.8-.5-1-.3-.3-.7-.4-1.2-.4-.7 0-1.2.3-1.6.8l-.7-.5c.5-.7 1.2-1 2.2-1h.3zm-1.3 4.4c.2.2.6.4 1 .4s.8-.1 1.1-.4c.3-.3.5-.6.5-1s-.4-.7-1.1-.7c-.5 0-.9.1-1.1.3-.3.2-.4.5-.4.8 0 .2.1.4.3.6h-.3zm7.1-4.3l-2.5 5.8c-.4 1.1-1.1 1.6-2 1.6-.3 0-.5 0-.7-.1v-.9c.2.1.4.1.6.1.5 0 .9-.3 1.1-.8l.2-.5-2.2-5.2h1.1l1.6 3.9 1.6-3.9h1.2z" fill="#5F6368"/><path d="M19.3 15.8c0-.3 0-.6-.1-.9h-4.4v1.7h2.5a2.2 2.2 0 0 1-.9 1.4v1.2h1.5c.9-.8 1.4-2 1.4-3.4z" fill="#4285F4"/><path d="M14.8 19.3c1.2 0 2.3-.4 3-1.1l-1.5-1.2c-.4.3-.9.4-1.5.4a2.5 2.5 0 0 1-2.4-1.7H11.9v1.2a4.5 4.5 0 0 0 2.9 2.4z" fill="#34A853"/><path d="M12.4 15.7c-.1-.3-.2-.6-.2-1s.1-.7.2-1v-1.2H11a4.5 4.5 0 0 0 0 4l1.4-1.1v.3z" fill="#FBBC05"/><path d="M14.8 12a2.4 2.4 0 0 1 1.7.7l1.3-1.3a4.3 4.3 0 0 0-3-1.2A4.5 4.5 0 0 0 11.9 12.5l1.5 1.2a2.5 2.5 0 0 1 2.4-1.7z" fill="#EA4335"/></svg> },
    { name: 'Amex', svg: <svg viewBox="0 0 48 32" className="h-6 w-auto"><rect width="48" height="32" rx="4" fill="#006FCF"/><path d="M7 21.5V10.5h7l.8 1.8.8-1.8h26v10.3s-1.3.7-2.7.7H28.5l-1-1.2v1.2h-3.3v-2c0-.3-.2-.3-.3-.3h-.3v2.3H12.8l-.8-1.8-.8 1.8H7zm3.1-1.5h2l.8-2 .8 2h6.9v-6.5L22 20h1.7l1.4-6.5V20h2v-8.5H24l-1.2 5.3-1.3-5.3h-3.1V19l-2.8-7.5h-2.5L10 20h2l.1 0zm.4-3l1.1-3 1.1 3H10.5zm19-5.5h-5V20h5l3-2.5V14l-3-2.5zm-.3 6.3h-2.6v-4h2.6l1.4 2-1.4 2zm4.3-6.3h2.3V20h-2.3v-8.5zm3 0h5l1.5 2v-2h2.3V20h-2.3v-2l-1.5 2h-4.8l-.2-1V12.5v-.5 0z" fill="white"/></svg> },
  ];

  return (
    <footer id="footer" className="footer-gradient text-white">
      {/* Main Footer */}
      <div className="container-custom py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4">
              LumeaGlow
            </h3>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Transformez votre espace avec nos lampes méduses haut de gamme. Chaque pièce allie un design élégant à une technologie LED apaisante pour créer l'ambiance parfaite.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com/lumeaglow_officiel"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.tiktok.com/@lumea.glow04"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <TikTokIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Liens rapides</h4>
            <ul className="space-y-3">
              {[
                { to: '/', label: 'Maison' },
                { to: '/produit/lampe-meduse-lumeaglow', label: 'Produits' },
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
            <div className="flex flex-wrap items-center gap-3">
              {paymentIcons.map((icon) => (
                <div key={icon.name} aria-label={icon.name} title={icon.name}>
                  {icon.svg}
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
              © {currentYear} LumeaGlow. Tous droits réservés.
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
