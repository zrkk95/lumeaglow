import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import CartDrawer from './CartDrawer';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems, openCart } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { href: '/', label: 'Accueil' },
    { href: '/#produit', label: 'Produits' },
    { href: '/#a-propos', label: 'À propos' },
    { href: '/#faq', label: 'FAQ' },
    { href: '/contact', label: 'Contact' },
  ];

  const scrollToProduct = () => {
    const productSection = document.getElementById('produit');
    if (productSection) {
      productSection.scrollIntoView({ behavior: 'smooth' });
    } else if (location.pathname !== '/') {
      window.location.href = '/#produit';
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-card/95 backdrop-blur-md shadow-md'
            : 'bg-transparent'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link
              to="/"
              className="text-xl lg:text-2xl font-bold gradient-text"
            >
              AquaGlow
            </Link>

            {/* Navigation desktop */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors link-hover"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-3">
              {/* Bouton panier */}
              <button
                onClick={openCart}
                className="relative p-2 rounded-full hover:bg-secondary transition-colors"
                aria-label="Ouvrir le panier"
              >
                <ShoppingBag className="w-5 h-5 text-foreground" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center text-xs font-bold text-primary-foreground bg-primary rounded-full animate-scale-in">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* CTA desktop */}
              <button
                onClick={scrollToProduct}
                className="hidden sm:inline-flex btn-primary text-sm"
              >
                Acheter maintenant
              </button>

              {/* Menu mobile toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-full hover:bg-secondary transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Menu mobile */}
        <div
          className={`lg:hidden absolute top-full left-0 right-0 bg-card/98 backdrop-blur-md border-b border-border shadow-lg transition-all duration-300 ${
            isMobileMenuOpen
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
        >
          <nav className="container-custom py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="py-3 px-4 rounded-xl text-foreground/80 hover:text-primary hover:bg-secondary/50 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={scrollToProduct}
              className="mt-2 btn-primary w-full"
            >
              Acheter maintenant
            </button>
          </nav>
        </div>
      </header>

      {/* Cart Drawer */}
      <CartDrawer />
    </>
  );
};

export default Header;
