import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const FAQSection = () => {
  const titleRef = useScrollReveal<HTMLDivElement>();
  const faqRef = useScrollReveal<HTMLDivElement>({ delay: 80 });
  const faqs = [
    {
      question: 'Combien de couleurs peut afficher la lampe méduse ?',
      answer: 'Notre lampe méduse AquaGlow peut afficher des millions de combinaisons de couleurs grâce à sa technologie LED RGB avancée. Vous pouvez choisir parmi des modes prédéfinis ou laisser la lampe parcourir automatiquement l\'ensemble du spectre de couleurs pour une expérience visuelle toujours renouvelée.',
    },
    {
      question: 'Que contient la boîte ?',
      answer: 'La boîte contient : 1x Lampe Méduse AquaGlow complète, 2x méduses en silicone réalistes, 1x câble USB d\'alimentation, 1x télécommande (avec pile incluse), 1x guide d\'utilisation en français, et 1x carte de garantie 12 mois.',
    },
    {
      question: 'Comment contrôler les changements de couleur ?',
      answer: 'Vous pouvez contrôler la lampe de deux façons : via les commandes tactiles situées sur la base de la lampe, ou avec la télécommande incluse qui vous permet de changer les couleurs, régler la luminosité et sélectionner différents modes d\'éclairage depuis votre canapé.',
    },
    {
      question: 'La lampe est-elle sûre à utiliser pendant la nuit ?',
      answer: 'Absolument ! La lampe AquaGlow est conçue pour être utilisée en continu et en toute sécurité. Les LED ne chauffent pas, la consommation est très faible, et le fonctionnement est totalement silencieux. Elle est parfaite comme veilleuse apaisante dans une chambre.',
    },
    {
      question: 'Quelle est votre politique de retour ?',
      answer: 'Nous offrons une garantie satisfait ou remboursé de 30 jours. Si vous n\'êtes pas entièrement satisfait de votre achat, vous pouvez retourner la lampe dans son état d\'origine pour un remboursement complet, sans poser de questions.',
    },
    {
      question: 'Combien de temps prend la livraison ?',
      answer: 'Les commandes sont expédiées sous 24 à 48 heures ouvrées. La livraison standard en France métropolitaine prend généralement 3 à 5 jours ouvrés. Vous recevrez un e-mail de confirmation avec un numéro de suivi dès l\'expédition.',
    },
    {
      question: 'Proposez-vous la livraison internationale ?',
      answer: 'Oui, nous livrons dans plus de 50 pays à travers le monde ! Les frais et délais de livraison varient selon la destination. Les détails sont affichés lors du processus de commande.',
    },
    {
      question: 'Quelle est la couverture de la garantie ?',
      answer: 'Toutes nos lampes AquaGlow sont couvertes par une garantie fabricant de 12 mois. Cette garantie couvre tous les défauts de fabrication et les problèmes de fonctionnement normaux. Notre service client est disponible pour vous aider en cas de besoin.',
    },
  ];

  return (
    <section id="faq" className="section-padding bg-background">
      <div className="container-custom">
        {/* Title */}
        <div className="text-center mb-12" ref={titleRef}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Foire aux <span className="gradient-text">questions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tout ce que vous devez savoir sur votre lampe méduse AquaGlow.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto mb-12" ref={faqRef}>
          <Accordion type="single" defaultValue="item-0" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-2xl border border-border/50 px-6 overflow-hidden shadow-sm"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-5 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact CTA */}
        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            Vous avez encore des questions ? Nous sommes là pour vous aider !
          </p>
          <Link
            to="/contact"
            className="btn-primary"
          >
            Contacter l'assistance
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
