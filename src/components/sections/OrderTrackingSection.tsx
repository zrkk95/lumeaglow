import { useState } from 'react';
import { Package, Truck, CheckCircle2 } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const OrderTrackingSection = () => {
  const [orderNumber, setOrderNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!orderNumber || !email) {
      toast({
        title: "Champs requis",
        description: "Veuillez remplir tous les champs.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Recherche en cours...",
      description: "Nous recherchons votre commande.",
    });
  };

  const steps = [
    {
      icon: Package,
      title: 'Traitement',
      description: 'Commande confirmée et en cours de préparation',
    },
    {
      icon: Truck,
      title: 'Expédié',
      description: 'En route vers votre adresse',
    },
    {
      icon: CheckCircle2,
      title: 'Livré',
      description: 'Profitez bien de votre lampe AquaGlow !',
    },
  ];

  return (
    <section id="suivi" className="section-padding bg-secondary/30">
      <div className="container-custom">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Suivre votre <span className="gradient-text">commande</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Saisissez les détails de votre commande ci-dessous pour suivre la livraison de votre lampe méduse AquaGlow.
          </p>
        </div>

        {/* Form */}
        <div className="max-w-xl mx-auto mb-16">
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-md p-6 sm:p-8 space-y-4"
          >
            <div>
              <label className="block text-sm font-medium mb-2">
                Numéro de commande
              </label>
              <input
                type="text"
                value={orderNumber}
                onChange={(e) => setOrderNumber(e.target.value)}
                placeholder="Saisissez votre numéro de commande"
                className="input-premium"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Adresse email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Saisissez votre adresse e-mail"
                className="input-premium"
              />
            </div>
            <button type="submit" className="w-full btn-primary">
              Suivre la commande
            </button>
          </form>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="text-center p-6 bg-white rounded-2xl shadow-sm"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <step.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-foreground">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrderTrackingSection;
