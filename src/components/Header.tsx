import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { useCartStore } from '@/stores/cartStore';
import CartDrawer from './CartDrawer';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const items = useCartStore(s => s.items);
  const openCart = useCartStore(s => s.openCart);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const location = useLocation();
  const navigate = useNavigate();

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

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (href === '/') {
      if (location.pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        navigate('/');
      }
      return;
    }

    if (href === '/produit/lampe-meduse-lumeaglow') {
      navigate(href);
      return;
    }

    const sectionId = href.replace('/#', '');
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/', { state: { scrollTo: sectionId } });
    }
  };

  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => {
        const element = document.getElementById(location.state.scrollTo);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  const goToProduct = () => {
    setIsMobileMenuOpen(false);
    navigate('/produit/lampe-meduse-lumeaglow');
  };

  const navLinks = [
    { href: '/', label: 'Accueil' },
    { href: '/produit/lampe-meduse-lumeaglow', label: 'Produit' },
    { href: '/#a-propos', label: 'À propos' },
    { href: '/#faq', label: 'FAQ' },
    { href: '/#footer', label: 'Contact' },
  ];

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
            <Link to="/" className="text-xl lg:text-2xl font-bold gradient-text">
              LumeaGlow
            </Link>

            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors link-hover"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
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

              <button onClick={goToProduct} className="hidden lg:inline-flex btn-primary text-sm">
                Acheter maintenant
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-full hover:bg-secondary transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-white backdrop-blur-md" />
        <nav className="relative z-10 h-full flex flex-col items-center justify-center gap-6 px-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-xl font-medium text-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button onClick={goToProduct} className="mt-6 btn-primary text-lg px-8 py-4">
            Acheter maintenant
          </button>
        </nav>
      </div>

      <CartDrawer />
    </>
  );
};

export default Header;
