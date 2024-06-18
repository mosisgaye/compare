// components/MainContent.tsx
import React from 'react';

const MainContent = () => {
  return (
    <main className="ml-64 p-8">
      <section id="top-5">
        <h2 className="text-3xl font-bold mb-4">Les 5 Meilleurs Forfaits Mobiles de Juin 2024</h2>
        <p className="mb-4">Découvrez les meilleures offres de forfaits mobiles disponibles ce mois-ci. Que vous cherchiez un forfait avec beaucoup de données, un prix bas, ou sans engagement, voici notre sélection.</p>
        <ul className="space-y-4">
          <li className="bg-gray-50 p-4 rounded-lg shadow-md">
            <strong>Forfait Lebara</strong> - 40 Go à 5,99€/mois
          </li>
          <li className="bg-gray-50 p-4 rounded-lg shadow-md">
            <strong>Forfait RED by SFR</strong> - 120 Go 5G à 8,99€/mois
          </li>
          <li className="bg-gray-50 p-4 rounded-lg shadow-md">
            <strong>Forfait Prixtel</strong> - L’Oxygène 100 Go à 7,99€/mois
          </li>
          <li className="bg-gray-50 p-4 rounded-lg shadow-md">
            <strong>Forfait B&YOU</strong> - 80 Go 5G à 8,99€/mois
          </li>
          <li className="bg-gray-50 p-4 rounded-lg shadow-md">
            <strong>Forfait Syma</strong> - Le huit 100 Go à 8,99€/mois
          </li>
        </ul>
      </section>
     
    </main>
  );
};

export default MainContent;
