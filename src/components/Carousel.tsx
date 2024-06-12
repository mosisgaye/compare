'use client'

import Image from 'next/image';
import React, { useState, useEffect } from 'react';

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!isPaused) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % 4);
      }
    }, 3000);

    return () => clearInterval(intervalId);
  }, [isPaused]);

  const pauseCarousel = () => {
    setIsPaused(true);
  };

  const resumeCarousel = () => {
    setIsPaused(false);
  };

  return (
    <div className="flex justify-center py-8 bg-white dark:bg-[#012737] text-black dark:text-white">
      <div className="max-w-screen-xl flex flex-col md:flex-row items-center justify-between w-full px-4 space-y-8 md:space-y-0">
        {/* Section de texte */}
        <section className="text-section md:w-1/2 flex flex-col justify-center items-start space-y-4">
          <h1 className="text-4xl font-bold mb-4">Trouvez votre forfait mobile</h1>
          <p className="mb-4">
          Découvrez les meilleures offres en un clin d'œil ! Chaque jour, nous comparons <strong>des centaines de forfaits</strong> mobile, Box Internet et Énergie (Gaz et Électricité) pour vous dénicher celui qui vous correspond parfaitement.
          </p>
          <a href="/" className="compare-button bg-[#79CE25] text-white font-semibold py-2 px-4 rounded-lg">
            Comparer les forfaits
          </a>
        </section>
        {/* Section du carrousel de cartes */}
        <div className="card-section md:w-1/2">
          <div id="carousel" className="carousel-container relative w-full h-[300px] md:h-[350px]">
            <div className="carousel-content w-full h-full">
              {/* Première carte */}
              <div className={`carousel-item absolute inset-0 transition-opacity duration-500 ${currentIndex === 0 ? 'opacity-100' : 'opacity-0'}`}>
                <div className="card bg-white dark:bg-[#012737] text-black dark:text-white p-4 shadow-lg rounded-lg flex flex-col h-full">
                  <header className="card-details mb-4 flex items-center">
                    <Image
                      src="/images/sfr.png"
                      alt="Logo de SFR"
                      className="card-logo"
                      width={50}
                      height={50}
                    />
                  </header>
                  <div className="card-details flex justify-between mb-2 flex-1">
                    <div className="text-left">
                      <span className="block text-xl font-bold">100 Go</span>
                      <span className="block text-lg">15 Go en Europe</span>
                    </div>
                    <div className="text-right">
                      <span className="block text-xl font-bold">7,99€</span>
                      <span className="text-sm">/mois</span>
                    </div>
                  </div>
                  <p className="mb-4 flex-1">Appels, SMS et MMS illimités</p>
                  <span
                    role="button"
                    className="button-offre inline-block rounded-[20px] whitespace-nowrap bg-[#f05153] text-white px-3 py-1 self-center font-semibold shadow-sm"
                  >
                    Voir l&apos;offre
                  </span>
                </div>
              </div>
              {/* Deuxième carte */}
              <div className={`carousel-item absolute inset-0 transition-opacity duration-500 ${currentIndex === 1 ? 'opacity-100' : 'opacity-0'}`}>
                <div className="card bg-white dark:bg-[#012737] text-black dark:text-white p-4 shadow-lg rounded-lg flex flex-col h-full">
                  <header className="card-details mb-4 flex items-center">
                    <Image
                      src="/images/orange.png"
                      alt="Logo de Orange"
                      className="card-logo"
                      width={50}
                      height={50}
                    />
                  </header>
                  <div className="card-details flex justify-between mb-2 flex-1">
                    <div className="text-left">
                      <span className="block text-xl font-bold">100 Go</span>
                      <span className="block text-lg">15 Go en Europe</span>
                    </div>
                    <div className="text-right">
                      <span className="block text-xl font-bold">10,99€</span>
                      <span className="text-sm">/mois</span>
                    </div>
                  </div>
                  <p className="mb-4 flex-1">Appels, SMS et MMS illimités</p>
                  <span
                    role="button"
                    className="button-offre inline-block rounded-[20px] whitespace-nowrap bg-[#f05153] text-white px-3 py-1 self-center font-semibold shadow-sm"
                  >
                    Voir l&apos;offre
                  </span>
                </div>
              </div>
              {/* Troisième carte */}
              <div className={`carousel-item absolute inset-0 transition-opacity duration-500 ${currentIndex === 2 ? 'opacity-100' : 'opacity-0'}`}>
                <div className="card bg-white dark:bg-[#012737] text-black dark:text-white p-4 shadow-lg rounded-lg flex flex-col h-full">
                  <header className="card-details mb-4 flex items-center">
                    <Image
                      src="/images/sosh.png"
                      alt="Logo de Sosh"
                      className="card-logo"
                      width={50}
                      height={50}
                    />
                  </header>
                  <div className="card-details flex justify-between mb-2 flex-1">
                    <div className="text-left">
                      <span className="block text-xl font-bold">80 Go</span>
                      <span className="block text-lg">15 Go en Europe</span>
                    </div>
                    <div className="text-right">
                      <span className="block text-xl font-bold">7,99€</span>
                      <span className="text-sm">/mois</span>
                    </div>
                  </div>
                  <p className="mb-4 flex-1">Appels, SMS et MMS illimités</p>
                  <span
                    role="button"
                    className="button-offre inline-block rounded-[20px] whitespace-nowrap bg-[#f05153] text-white px-3 py-1 self-center font-semibold shadow-sm"
                  >
                    Voir l&apos;offre
                  </span>
                </div>
              </div>
              {/* Quatrième carte */}
              <div className={`carousel-item absolute inset-0 transition-opacity duration-500 ${currentIndex === 3 ? 'opacity-100' : 'opacity-0'}`}>
                <div className="card bg-white dark:bg-[#012737] text-black dark:text-white p-4 shadow-lg rounded-lg flex flex-col h-full">
                  <header className="card-details mb-4 flex items-center">
                    <Image
                      src="/images/free.png"
                      alt="Logo de Free"
                      className="card-logo"
                      width={50}
                      height={50}
                    />
                  </header>
                  <div className="card-details flex justify-between mb-2 flex-1">
                    <div className="text-left">
                      <span className="block text-xl font-bold">100 Go</span>
                      <span className="block text-lg">15 Go en Europe</span>
                    </div>
                    <div className="text-right">
                      <span className="block text-xl font-bold">7,99€</span>
                      <span className="text-sm">/mois</span>
                    </div>
                  </div>
                  <p className="mb-4 flex-1">Appels, SMS et MMS illimités</p>
                  <span
                    role="button"
                    className="button-offre inline-block rounded-[20px] whitespace-nowrap bg-[#f05153] text-white px-3 py-1 self-center font-semibold shadow-sm"
                  >
                    Voir l&apos;offre
                  </span>
                </div>
              </div>
            </div>

            {/* Navigation (précédent et suivant) */}
            <button
              onClick={() => setCurrentIndex((currentIndex - 1 + 4) % 4)}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full focus:outline-none"
            >
              &#9664;
            </button>
            <button
              onClick={() => setCurrentIndex((currentIndex + 1) % 4)}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full focus:outline-none"
            >
              &#9654;
            </button>

            {/* Indicateurs de carrousel */}
            <div className="carousel-indicators absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {[0, 1, 2, 3].map(index => (
                <div
                  key={index}
                  className={`carousel-indicator h-2 w-2 rounded-full bg-gray-400 ${currentIndex === index ? 'bg-gray-800' : ''}`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
