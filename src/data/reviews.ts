export interface Review {
  rating: number;
  content: string;
  reviewDate: string;
  experienceDate: string;
  name: string;
}

const reviews: Review[] = [
  { rating: 5, content: 'Super joli.', reviewDate: '12/11/2025', experienceDate: '28/10/2025', name: 'Chloé P.' },
  { rating: 5, content: 'Belle ambiance, surtout le soir.', reviewDate: '29/10/2025', experienceDate: '15/10/2025', name: 'Julie M.' },
  { rating: 4, content: 'Un peu plus petit que je pensais, mais top.', reviewDate: '18/10/2025', experienceDate: '05/10/2025', name: 'Karim D.' },
  { rating: 5, content: 'Conforme aux photos.', reviewDate: '02/10/2025', experienceDate: '20/09/2025', name: 'Nadia F.' },
  { rating: 5, content: 'Très relaxant le soir.', reviewDate: '19/09/2025', experienceDate: '08/09/2025', name: 'Sarah L.' },
  { rating: 5, content: "Super, ça change l'ambiance.", reviewDate: '04/09/2025', experienceDate: '22/08/2025', name: 'Emma V.' },
  { rating: 5, content: 'Très beau rendu, couleurs douces.', reviewDate: '20/08/2025', experienceDate: '10/08/2025', name: 'Manon C.' },
  { rating: 5, content: 'Top pour une chambre.', reviewDate: '05/08/2025', experienceDate: '25/07/2025', name: 'Léa S.' },
  { rating: 5, content: 'Ambiance sympa.', reviewDate: '22/07/2025', experienceDate: '10/07/2025', name: 'Hugo T.' },
  { rating: 4, content: "Bonne qualité, j'aurais aimé un peu plus lumineux.", reviewDate: '08/07/2025', experienceDate: '25/06/2025', name: 'Thomas R.' },
  { rating: 5, content: "Effet apaisant, j'adore.", reviewDate: '22/06/2025', experienceDate: '10/06/2025', name: 'Camille B.' },
  { rating: 5, content: 'Simple et très joli.', reviewDate: '05/06/2025', experienceDate: '25/05/2025', name: 'Joelle F.' },
  { rating: 5, content: 'Magnifique au top.', reviewDate: '20/05/2025', experienceDate: '08/05/2025', name: 'Charlène P.' },
  { rating: 4, content: 'Très sympa, beau rendu.', reviewDate: '03/05/2025', experienceDate: '20/04/2025', name: 'Antoine G.' },
];

export default reviews;

export const TOTAL_REVIEWS = reviews.length;
export const AVERAGE_RATING = 4.8;
export const RATING_COUNTS = { 5: 11, 4: 3, 3: 0, 2: 0, 1: 0 };
