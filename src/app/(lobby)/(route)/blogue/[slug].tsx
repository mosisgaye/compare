import React from 'react';
import { useRouter } from 'next/router';


const blogPosts = {
  "decouvrez-lg": {
    title: "Découvrez le meilleur et le plus récent de LG",
    content: `
      <ul>
        <li>Explorez la prouesse de nettoyage, les capacités de réduction des bactéries et les fonctions d'économie de temps des lave-linge à vapeur.</li>
        <li>Découvrez comment les lave-linge à vapeur se distinguent en matière de réglages doux pour les tissus.</li>
        <li>Apprenez comment les lave-linge à vapeur peuvent améliorer la vie des personnes allergiques, des parents et des professionnels en réduisant ou éliminant les allergènes.</li>
        <li>Nous nous penchons également sur des questions courantes pour vous aider à prendre une décision informée lors de l'investissement dans ces appareils exceptionnels.</li>
      </ul>
      <p>Dans l'univers des appareils de buanderie modernes, les lave-linge à vapeur ont émergé comme une nouvelle donne, en révolutionnant la façon dont nous lavons nos vêtements. Ces appareils innovants ont gagné en popularité grâce à leur efficacité et la propreté exceptionnelle de votre routine de buanderie. Mais comment fonctionnent-ils, et quels avantages les distinguent ?</p>
      <p>Les lave-linge à vapeur utilisent la puissance de la vapeur générée par un chauffage interne. Cette vapeur est ensuite ajoutée de manière stratégique au tambour via les différents cycles de lavage. Dans le cas des lave-linges LG avec Steam™, cela permet un processus de lavage plus précis et hygiénique qu'un lavage sans l'option Steam d'un lave-linge LG traditionnel. Les bénéfices de la fonction vapeur sont nombreux, allant de la réduction des plis tenaces à l'élimination jusqu'à 99.9% des allergènes et des bactéries courantes.</p>
    `,
    image: "/path/to/image1.jpg",
  },
  "choisir-lave-linge": {
    title: "Choisir le lave-linge qui vous convient – votre guide",
    content: "Contenu détaillé de l'article sur les lave-linges...",
    image: "/path/to/image2.jpg",
  },
  "histoire-oled": {
    title: "L&apos;histoire du téléviseur OLED",
    content: "Contenu détaillé de l'article sur les téléviseurs OLED...",
    image: "/path/to/image3.jpg",
  },
};

// Define a type that represents the keys of the blogPosts object
type BlogPostSlug = keyof typeof blogPosts;

const BlogPost: React.FC = () => {
  const router = useRouter();
  const { slug } = router.query;

  // Ensure slug is of the correct type
  if (!slug || typeof slug !== "string" || !(slug in blogPosts)) {
    // Redirect to a custom 404 page
    if (typeof window !== 'undefined') {
      router.push('/blogue/404');
    }
    return <p>Redirection...</p>;
  }

  // Type assertion to let TypeScript know that slug is a valid key
  const post = blogPosts[slug as BlogPostSlug];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">{post.title}</h1>
      <img src={post.image} alt={post.title} className="w-full h-64 object-cover rounded-lg mb-6"/>
      <div className="text-lg" dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
};

export default BlogPost;
