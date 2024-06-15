'use client'

import React, { useState } from 'react';

const Articles = () => {
  const [isExpanded, setIsExpanded] = useState([false, false, false, false]);

  const toggleExpand = (index: number) => {
    setIsExpanded(isExpanded.map((expand, i) => (i === index ? !expand : expand)));
  };

  const ChevronDownIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
    </svg>
  );

  const ChevronUpIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path fillRule="evenodd" d="M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z" clipRule="evenodd" />
    </svg>
  );

  return (
    <article className="section-how-it-works__step ph_inner_spacer p-4 md:p-8 shadow-lg rounded-lg dark:bg-[#012737] dark:text-white">
      <h1 className="text-xl md:text-2xl font-medium mb-4">
        Forfait Mobile Pas Cher
      </h1>

      <div>
        <p className="text-black dark:text-white mb-4">
          Découvrez comment choisir un forfait mobile pas cher en 2024. Trouvez des conseils pour économiser sur vos factures mensuelles tout en obtenant les services dont vous avez besoin. Comparez les offres de forfaits mobiles économiques et trouvez celui qui correspond à votre budget et à vos besoins en communication.
        </p>
      </div>

      <div className="mb-8">
        <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleExpand(0)}>
          <h2 className="text-lg font-medium mb-2">Critères pour un Forfait Mobile Pas Cher</h2>
          {isExpanded[0] ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </div>
        {isExpanded[0] && (
          <p className="text-black dark:text-white">
            Apprenez quels critères sont importants pour choisir un forfait mobile pas cher. Comparez les options sans engagement, les promotions et les meilleures pratiques pour économiser sur votre forfait mobile.
          </p>
        )}
      </div>

      <div className="mb-8">
        <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleExpand(1)}>
          <h2 className="text-lg font-medium mb-2">Comparaison des Forfaits Mobiles Économiques</h2>
          {isExpanded[1] ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </div>
        {isExpanded[1] && (
          <p className="text-black dark:text-white">
            Consultez notre comparaison détaillée des différents forfaits mobiles pas chers. Découvrez les différences de prix, les avantages inclus, et comment choisir celui qui convient le mieux à vos besoins en télécommunication.
          </p>
        )}
      </div>

      <div className="mb-8">
        <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleExpand(2)}>
          <h2 className="text-lg font-medium mb-2">Avantages des Forfaits Mobiles Sans Engagement</h2>
          {isExpanded[2] ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </div>
        {isExpanded[2] && (
          <p className="text-black dark:text-white">
            Découvrez les avantages des forfaits mobiles sans engagement. Flexibilité, économies et liberté : tout ce que vous devez savoir pour prendre une décision éclairée sur votre forfait mobile.
          </p>
        )}
      </div>

      <div>
        <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleExpand(3)}>
          <h2 className="text-lg font-medium mb-2">Conclusion</h2>
          {isExpanded[3] ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </div>
        {isExpanded[3] && (
          <p className="text-black dark:text-white mb-4">
            En résumé, trouver un forfait mobile pas cher peut être simple si vous savez où chercher et quels critères prendre en compte. Explorez nos recommandations pour économiser sur votre facture mensuelle de télécommunication. Utilisez notre outil de comparaison pour trouver l&apos;offre qui vous convient le mieux ou contactez-nous pour obtenir des conseils personnalisés sur les forfaits mobiles pas chers.
          </p>
        )}
      </div>
    </article>
  );
};

export default Articles;