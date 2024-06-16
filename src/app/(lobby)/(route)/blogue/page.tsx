import React from 'react';
import Link from 'next/link';

const blogPosts = [
  {
    title: "Découvrez le meilleur et le plus récent de LG",
    description: "Des conseils, des guides et des connaissances techniques pointues, provenant directement de la source.",
    image: "/path/to/image1.jpg",
    slug: "decouvrez-lg",
  },
  {
    title: "Choisir le lave-linge qui vous convient – votre guide",
    description: "Des conseils, des guides et des connaissances techniques pointues, provenant directement de la source.",
    image: "/path/to/image2.jpg",
    slug: "choisir-lave-linge",
  },
  {
    title: "L’histoire du téléviseur OLED",
    description: "Des conseils, des guides et des connaissances techniques pointues, provenant directement de la source.",
    image: "/path/to/image3.jpg",
    slug: "histoire-oled",
  },
];

const BlogIndex: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">LG Experience</h1>
      <p className="text-lg mb-8">Des conseils, des guides et des connaissances techniques pointues, provenant directement de la source.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Link key={post.slug} href={`/blogue/${post.slug}`} className="block p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover rounded-t-lg mb-4"/>
            <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-700">{post.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogIndex;
