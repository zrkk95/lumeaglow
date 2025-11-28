import { useState } from 'react';
import { Send, Check } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      toast({
        title: "E-mail requis",
        description: "Veuillez entrer votre adresse e-mail.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    // Simulation de l'inscription (à remplacer par l'intégration réelle)
    await new Promise(resolve => setTimeout(resolve, 1000));

    setIsSubscribed(true);
    toast({
      title: "Inscription réussie !",
      description: "Bienvenue dans la communauté AquaGlow.",
    });

    setIsLoading(false);
  };

  return (
    <section className="section-padding" style={{ background: 'var(--gradient-hero)' }}>
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center">
          {/* Title */}
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Restez <span className="gradient-text">informé</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Inscrivez-vous à notre newsletter pour recevoir nos offres exclusives, nouveautés et conseils déco.
          </p>

          {/* Form */}
          {isSubscribed ? (
            <div className="card-premium p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                <Check className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Merci pour votre inscription !</h3>
              <p className="text-muted-foreground">
                Vous recevrez bientôt nos meilleures offres.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="card-premium p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Votre adresse e-mail"
                  className="input-premium flex-grow"
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="btn-primary flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  {isLoading ? (
                    <>
                      <span className="animate-spin w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full" />
                      Inscription...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      S'inscrire
                    </>
                  )}
                </button>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                Pas de spam, promis. Désabonnez-vous à tout moment. Vos données restent confidentielles.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
