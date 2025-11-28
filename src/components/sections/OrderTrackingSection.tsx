import { useState } from 'react';
import { Search, Package, Truck, CheckCircle } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const OrderTrackingSection = () => {
  const [orderNumber, setOrderNumber] = useState('');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!orderNumber.trim() || !email.trim()) {
      toast({
        title: "Champs requis",
        description: "Veuillez remplir tous les champs.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    // Simulation de la recherche (à remplacer par l'intégration réelle)
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: "Commande non trouvée",
      description: "Aucune commande trouvée avec ces informations. Vérifiez vos données ou contactez-nous.",
    });

    setIsLoading(false);
  };

  return (
    <section id="suivi" className="section-padding" style={{ background: 'var(--gradient-hero)' }}>
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center">
          {/* Title */}
          <div className="mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Suivre ma <span className="gradient-text">commande</span>
            </h2>
            <p className="text-muted-foreground">
              Entrez votre numéro de commande et votre adresse e-mail pour suivre votre colis en temps réel.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="card-premium p-6 sm:p-8">
            <div className="space-y-4 mb-6">
              <div>
                <label htmlFor="orderNumber" className="block text-sm font-medium mb-2 text-left">
                  Numéro de commande
                </label>
                <input
                  type="text"
                  id="orderNumber"
                  value={orderNumber}
                  onChange={(e) => setOrderNumber(e.target.value)}
                  placeholder="Ex: AG-2024-12345"
                  className="input-premium"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-left">
                  Adresse e-mail
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="votre@email.fr"
                  className="input-premium"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="btn-primary w-full flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <span className="animate-spin w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full" />
                  Recherche en cours...
                </>
              ) : (
                <>
                  <Search className="w-5 h-5" />
                  Suivre ma commande
                </>
              )}
            </button>
          </form>

          {/* Info Steps */}
          <div className="mt-10 grid grid-cols-3 gap-4">
            {[
              { icon: Package, label: 'Préparation' },
              { icon: Truck, label: 'En transit' },
              { icon: CheckCircle, label: 'Livré' },
            ].map((step, index) => (
              <div key={step.label} className="text-center">
                <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-secondary flex items-center justify-center">
                  <step.icon className="w-5 h-5 text-muted-foreground" />
                </div>
                <span className="text-sm text-muted-foreground">{step.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderTrackingSection;
