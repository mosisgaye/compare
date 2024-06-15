import React from 'react';

interface StarFilledProps {
  className: string;
}

const StarFilled: React.FC<StarFilledProps> = ({ className }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9.049 2.927a.998.998 0 011.902 0l1.134 3.486a1 1 0 00.95.69h3.59a1 1 0 01.588 1.81l-2.905 2.11a1 1 0 00-.364 1.118l1.11 3.413a1 1 0 01-1.537 1.117l-2.926-2.122a1 1 0 00-1.18 0l-2.926 2.122a1 1 0 01-1.537-1.117l1.11-3.413a1 1 0 00-.364-1.118l-2.905-2.11a1 1 0 01.588-1.81h3.59a1 1 0 00.95-.69l1.134-3.486z" />
  </svg>
);

const Review = () => {
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-semibold dark:text-white">A propos des clients de CompareTelecom</h2>
          <div className="flex items-center justify-center mt-4">
            <h2 className="text-5xl font-bold dark:text-white">4.9</h2>
            <div className="ml-4">
              <div className="flex space-x-1 text-yellow-400">
                <StarFilled className="w-6 h-6" />
                <StarFilled className="w-6 h-6" />
                <StarFilled className="w-6 h-6" />
                <StarFilled className="w-6 h-6" />
                <StarFilled className="w-6 h-6" />
              </div>
              <div className="text-lg font-light dark:text-white">56 Votes</div>
            </div>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white text-black p-6 rounded-2xl shadow-md">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold">{review.name}</h3>
                  <div className="flex space-x-1 text-yellow-400">
                    {Array(review.rating).fill(0).map((_, i) => (
                      <StarFilled key={i} className="w-4 h-4" />
                    ))}
                  </div>
                </div>
                <div className="text-sm font-light">{review.date}</div>
              </div>
              <p className="text-gray-700">{review.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href="#"
            className="inline-block text-white py-3 px-6 rounded-full shadow-lg transition"
            style={{ background: "#79CE25" }}
            target="_blank"
            rel="noopener noreferrer"
            title="Google: Soumettre un avis"
          >
            Soumettre un avis <StarFilled className="inline-block w-5 h-5 ml-2 text-yellow-400" />
          </a>
        </div>
      </div>
    </section>
  );
};

const reviews = [
  {
    name: 'Leo Mile',
    rating: 5,
    date: 'Il y a 3 mois',
    text: 'Simplement l\'outil le plus efficace !! Merci à toute votre équipe !!',
  },
  {
    name: 'Diane Trudel',
    rating: 4,
    date: 'Il y a 2 mois',
    text: 'Je reste à jour avec de meilleurs forfaits de téléphonie mobile, donc ce site est une excellente référence. Je l\'adopte, je vous le recommande.',
  },
  {
    name: 'Félix',
    rating: 5,
    date: 'Il y a 3 mois',
    text: 'très bon service et gratuit ... MERCI ....',
  },
  {
    name: 'Jean-Pierre Marcil',
    rating: 4,
    date: 'Il y a 2 mois',
    text: 'Utiles pour comparer les tarifs internet et TV.',
  },
  {
    name: 'Yann Edi',
    rating: 5,
    date: 'Il y a 4 mois',
    text: 'Très bon site je le recommande !',
  },
  {
    name: 'Diane Mallette',
    rating: 4,
    date: 'Il y a 2 mois',
    text: 'Facile à magasiner, j\'ai l\'habitude d\'aller à Carrefour Laval et de me renseigner sur les différents forfaits.',
  },
];

export default Review;
