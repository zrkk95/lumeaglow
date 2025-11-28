import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Combien de couleurs sont disponibles ?',
      answer: 'La Lampe Méduse AquaGlow offre un spectre complet de couleurs RGB, soit des millions de combinaisons possibles. Vous pouvez choisir une couleur fixe parmi les teintes prédéfinies (bleu océan, violet profond, rose corail, vert émeraude, etc.), ou activer le mode cycle automatique qui fait défiler harmonieusement toutes les couleurs. Un mode "coucher de soleil" et un mode "aurore boréale" sont également disponibles pour des ambiances spécifiques.',
    },
    {
      question: 'Comment fonctionne la lampe ?',
      answer: 'La lampe utilise un système de courant d\'eau contrôlé qui fait circuler les méduses en silicone de manière fluide et naturelle. Un moteur silencieux génère un flux d\'eau doux qui imite parfaitement le mouvement des vraies méduses dans l\'océan. Les LED RGB intégrées à la base illuminent l\'eau et les méduses, créant un effet visuel hypnotisant. Il suffit de brancher le câble USB fourni à n\'importe quelle source d\'alimentation (adaptateur, ordinateur, batterie externe) pour profiter du spectacle.',
    },
    {
      question: 'Que contient la boîte ?',
      answer: 'Votre commande comprend : 1x Lampe Méduse AquaGlow complète avec sa base et son réservoir, 2x Méduses en silicone premium de couleurs différentes, 1x Câble USB d\'alimentation de 1,5 mètre, 1x Guide d\'utilisation détaillé en français avec instructions de mise en route et conseils d\'entretien, 1x Carte de garantie 12 mois. Tout est soigneusement emballé pour une livraison en parfait état.',
    },
    {
      question: 'Est-ce sûr de l\'utiliser comme veilleuse la nuit ?',
      answer: 'Absolument. La Lampe AquaGlow est parfaitement sûre pour une utilisation continue, y compris pendant la nuit. Les LED utilisées ne chauffent quasiment pas, le moteur est ultra-basse consommation, et tous les composants électriques sont isolés du réservoir d\'eau. La lampe est certifiée conforme aux normes de sécurité européennes CE. De nombreux clients l\'utilisent comme veilleuse apaisante dans les chambres d\'enfants ou d\'adultes.',
    },
    {
      question: 'Quels sont les délais de livraison ?',
      answer: 'Nous expédions votre commande sous 24 à 48 heures ouvrées après validation du paiement. La livraison standard en France métropolitaine prend généralement 3 à 5 jours ouvrés. Une option de livraison express est disponible (1-2 jours ouvrés) pour les commandes urgentes. Vous recevrez un e-mail de confirmation avec un numéro de suivi dès l\'expédition de votre colis.',
    },
    {
      question: 'Quelle est votre politique de retour ?',
      answer: 'Nous offrons une politique de retour sans risque. Vous disposez de 30 jours après réception pour retourner votre lampe si elle ne vous convient pas, dans son emballage d\'origine et en parfait état. Le remboursement intégral sera effectué sous 5 jours ouvrés après réception du retour. Les frais de retour sont à votre charge, sauf en cas de produit défectueux où nous prenons en charge les frais de port.',
    },
    {
      question: 'Livrez-vous à l\'international ?',
      answer: 'Oui, nous livrons dans toute l\'Union européenne et dans plusieurs pays internationaux. Les frais de livraison varient selon la destination. Pour les pays hors UE, des droits de douane peuvent s\'appliquer selon la législation locale. Les délais de livraison internationale sont généralement de 7 à 15 jours ouvrés. Consultez notre page Livraison pour plus de détails sur les zones couvertes.',
    },
    {
      question: 'Quelle garantie offrez-vous ?',
      answer: 'Toutes nos lampes AquaGlow sont couvertes par une garantie fabricant de 12 mois. Cette garantie couvre tous les défauts de fabrication et les dysfonctionnements non liés à une mauvaise utilisation. En cas de problème, notre service client vous proposera soit un remplacement, soit une réparation, soit un remboursement selon les circonstances. Notre équipe est disponible pour vous accompagner à chaque étape.',
    },
  ];

  return (
    <section id="faq" className="section-padding bg-background">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          {/* Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Questions <span className="gradient-text">fréquentes</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Tout ce que vous devez savoir sur la Lampe Méduse AquaGlow
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="card-premium overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left hover:bg-secondary/30 transition-colors"
                >
                  <span className="font-semibold pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <p className="px-5 sm:px-6 pb-5 sm:pb-6 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
