import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const blogPosts = [
  {
    title: "Guide Complet des Offres de Télécommunications : Comment Choisir le Meilleur Forfait ?",
    description: "Explorez les différentes offres de télécommunications, comparez les tarifs, les vitesses et les services pour trouver le forfait idéal qui répond à vos besoins.",
    image: "/images/Banner-01.png",
    slug: "guide-offres-telecom",
  },
  {
    title: "La Révolution de la 5G : Ce que Vous Devez Savoir",
    description: "Découvrez comment la technologie 5G transforme les communications mobiles avec une connectivité ultra-rapide et une latence minimale, ouvrant de nouvelles possibilités pour les consommateurs et les entreprises.",
    image: "/images/5g-revolution.png",
    slug: "revolution-5g",
  },
  {
    title: "Fibre Optique vs. Câble : Quelle Technologie Internet Choisir ?",
    description: "Comparez les avantages de la fibre optique et du câble pour l'internet à domicile, en examinant la vitesse, la fiabilité et la couverture géographique pour trouver la meilleure solution pour vos besoins.",
    image: "/images/fibre-vs-cable.png",
    slug: "fibre-optique-vs-cable",
  },
  {
    "title": "Guide Complet de l'eSIM : Révolution dans les Télécommunications Mobiles",
    "description": "Découvrez la technologie de l'eSIM, également connue sous le nom de carte SIM intégrée, et son impact sur les offres de télécommunications. Comparez les fournisseurs en France, explorez les avantages comme la facilité d'activation et la sécurité accrue, et trouvez le meilleur forfait eSIM adapté à vos besoins mobiles.",
    "image": "/images/esim.png",
    "slug": "guide-esim",
  },
 
  {
    "title": "Sécurité des Données Mobiles : Protégez Vos Informations Personnelles en Utilisant les Bonnes Pratiques",
    "description": "Explorez les meilleures pratiques pour assurer la sécurité de vos données mobiles. Découvrez comment protéger vos informations personnelles contre les menaces croissantes, telles que le vol d'identité et l'accès non autorisé, sur vos appareils mobiles en France.",
    "image": "/images/securite-donnee-mobile.png",
    "slug": "securite-donnees-mobiles",
  },
  {
    "title": "Intelligence Artificielle : Comment Elle Impacte la Sécurité des Données Mobiles",
    "description": "Explorez comment l'intelligence artificielle influence la sécurité des données mobiles. Découvrez les nouvelles technologies et méthodes utilisées pour protéger vos informations personnelles contre les menaces croissantes, telles que le vol d'identité et l'accès non autorisé, sur vos appareils mobiles en France.",
    "image": "/images/ia.png",
    "slug": "ia-securite-donnees-mobiles",
  }
  

];


const BlogIndex: React.FC = () => {
  return (
    <div className="container mx-auto p-6 text-center dark:bg-[#012737]">
      <h1 className="text-4xl font-bold mb-8 dark:text-white">Guide D&apos;achats et Conseils</h1>
      <p className="text-lg mb-8 dark:text-white">Conseils pratiques, guides détaillés et une expertise approfondie à votre disposition.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-4 justify-items-center dark:bg-[#012737]">
        {blogPosts.map((post) => (
          <Link key={post.slug} href={`/blogue`} className="block w-full max-w-md p-4 bg-white dark:bg-[#012737] dark:text-white rounded-lg shadow-lg hover:shadow-xl dark:shadow-white transition-shadow duration-300">
            <div className="overflow-hidden rounded-t-lg mb-4 relative">
              <Image 
                src={post.image} 
                alt={post.title} 
                width={400}
                height={375}
               
              />
            </div>
            <h2 className="text-2xl font-semibold mb-2 dark:text-white">{post.title}</h2>
            <p className="text-gray-700 dark:text-white">{post.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogIndex;
