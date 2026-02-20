import { useState } from 'react';
import { Mail, Check, Users, Shield, Bell } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Email requis",
        description: "Veuillez saisir votre adresse e-mail.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitted(true);
    toast({
      title: "Inscription réussie !",
      description: "Merci de vous être inscrit à notre newsletter.",
    });
    setEmail('');
  };

  const features = [
    { icon: Bell, text: 'Pas de spam, désabonnement possible à tout moment.' },
    { icon: Shield, text: 'Nous respectons votre vie privée.' },
    { icon: Users, text: 'Plus de 5 000 abonnés' },
  ];

  return (
    <section className="py-20 sm:py-24 lg:py-32 banner-gradient">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">
            Restez dans le flux
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Abonnez-vous à notre newsletter pour recevoir des offres exclusives, des informations sur nos nouveaux produits et des conseils d'éclairage pour transformer votre espace.
          </p>

          {/* Form */}
          {isSubmitted ? (
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Merci pour votre inscription !
              </h3>
              <p className="text-white/80">
                Vous recevrez bientôt nos meilleures offres.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto mb-8"
            >
              <div className="flex-1 relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Saisissez votre adresse e-mail"
                  className="w-full pl-12 pr-4 py-4 rounded-full bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-white/30"
                />
              </div>
              <button
                type="submit"
                className="px-8 py-4 rounded-full font-semibold bg-foreground text-white hover:bg-foreground/90 transition-all hover:scale-105"
              >
                S'abonner
              </button>
            </form>
          )}

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-sm text-white/80"
              >
                <feature.icon className="w-4 h-4" />
                <span>{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
