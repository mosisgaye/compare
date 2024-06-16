import React from 'react';
import Link from 'next/link';

const Custom404: React.FC = () => {
  return (
    <div className="container mx-auto p-6 text-center">
      <h1 className="text-4xl font-bold mb-4">404 - Page Non Trouvée</h1>
      <p className="text-lg mb-8">Désolé, la page que vous recherchez n'existe pas.</p>
      <Link href="/blogue">
        <a className="text-blue-500 hover:underline">Retour à la page du blog</a>
      </Link>
    </div>
  );
};

export default Custom404;
