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
    <div>
      <div className="flex-1 ">
        <div className="content flex flex-col md:flex-row items-center justify-between p-4 bg-white dark:bg-[#012737] text-black dark:text-white">
          {/* Section de texte */}
          <section className="text-section">
            <h1>Trouvez votre forfait mobile</h1>
            <p>
              Nous comparons au quotidien <strong>plus de 100 forfaits</strong>
              mobile et Box Internet pour vous aider à trouver celui qu’il vous faut.
              mobile et Box Internet pour vous aider à trouver celui qu’il vous faut.
            </p>
            <p>
              <a href="/" className="compare-button">
                Comparer les forfaits
              </a>
            </p>
          </section>
          {/* Section du carrousel de cartes */}
          <div className="card-section ">
            <div id="carousel" className="carousel-container">
              <div className="carousel-content ">
                {/* Première carte */}
                <div className={`carousel-item ${currentIndex === 0 ? 'active' : ''}`}>
                  <div className="card bg-white dark:bg-[#012737] text-black dark:text-white ">
                    <header className="card-details">
                      <Image
                        src="/images/sfr.png"
                        alt="Logo de SFR"
                        className="card-logo"
                        width={50}
                        height={50}
                      />
                    </header>
                    <div className="card-details">
                      <div className="text-left">
                        <span>100 Go</span>
                        <span className="text-lg">15 Go en Europe</span>
                      </div>
                      <div className="text-right bg-white dark:bg-[#012737] text-black dark:text-white  ">
                        <span>7,99€</span>
                        <span className="text-sm  bg-white dark:bg-[#012737] text-black dark:text-white ">/mois</span>
                      </div>
                    </div>
                    <p>Appels, SMS et MMS illimités</p>
                    <span
                      role="button"
                      className="button-offre inline-block rounded-[20px] whitespace-nowrap bg-[#f05153] text-white px-3 py-1 self-center font-semibold shadow-sm bf-1x8vhjm"
                    >
                      Voir l’offre
                    </span>
                  </div>
                </div>
                {/* Ajoutez vos autres cartes ici */}
             
                <div className={`carousel-item ${currentIndex === 1 ? 'active' : ''}`}>
                  <div className="card bg-white dark:bg-[#012737] text-black dark:text-white ">
                    <header className="card-details">
                      <Image
                        src="/images/orange.png"
                        alt="Logo de SFR"
                        className="card-logo"
                        width={50}
                        height={50}
                      />
                    </header>
                    <div className="card-details">
                      <div className="text-left">
                        <span>100 Go</span>
                        <span className="text-lg">15 Go en Europe</span>
                      </div>
                      <div className="text-right bg-white dark:bg-[#012737] text-black dark:text-white  ">
                        <span>10,99€</span>
                        <span className="text-sm  bg-white dark:bg-[#012737] text-black dark:text-white ">/mois</span>
                      </div>
                    </div>
                    <p>Appels, SMS et MMS illimités</p>
                    <span
                      role="button"
                      className="button-offre inline-block rounded-[20px] whitespace-nowrap bg-[#f05153] text-white px-3 py-1 self-center font-semibold shadow-sm bf-1x8vhjm"
                    >
                      Voir l’offre
                    </span>
                  </div>
                </div>

                <div className={`carousel-item ${currentIndex === 2 ? 'active' : ''}`}>
                  <div className="card md: bg-white dark:bg-[#012737] text-black dark:text-white ">
                    <header className="card-details">
                      <Image
                        src="/images/sosh.png"
                        alt="Logo de SFR"
                        className="card-logo"
                        width={50}
                        height={50}
                      />
                      
                    </header>
                    <div className="card-details">
                      <div className="text-left">
                        <span>80 Go</span>
                        <span className="text-lg">15 Go en Europe</span>
                      </div>
                      <div className="text-right bg-white dark:bg-[#012737] text-black dark:text-white  ">
                        <span>7,99€</span>
                        <span className="text-sm  bg-white dark:bg-[#012737] text-black dark:text-white ">/mois</span>
                      </div>
                    </div>
                    <p>Appels, SMS et MMS illimités</p>
                    <span
                      role="button"
                      className="button-offre inline-block rounded-[20px] whitespace-nowrap bg-[#f05153] text-white px-3 py-1 self-center font-semibold shadow-sm bf-1x8vhjm"
                    >
                      Voir l’offre
                    </span>
                  </div>
                </div>

                <div className={`carousel-item ${currentIndex === 3 ? 'active' : ''}`}>
                  <div className="card bg-white dark:bg-[#012737] text-black dark:text-white ">
                    <header className="card-details">
                      <Image
                        src="/images/free.png"
                        alt="Logo de SFR"
                        className="card-logo"
                        width={50}
                        height={50}
                      />
                    </header>
                    <div className="card-details">
                      <div className="text-left">
                        <span>100 Go</span>
                        <span className="text-lg">15 Go en Europe</span>
                      </div>
                      <div className="text-right bg-white dark:bg-[#012737] text-black dark:text-white  ">
                        <span>7,99€</span>
                        <span className="text-sm  bg-white dark:bg-[#012737] text-black dark:text-white ">/mois</span>
                      </div>
                    </div>
                    <p>Appels, SMS et MMS illimités</p>
                    <span
                      role="button"
                      className="button-offre inline-block rounded-[20px] whitespace-nowrap bg-[#f05153] text-white px-3 py-1 self-center font-semibold shadow-sm bf-1x8vhjm"
                    >
                      Voir l’offre
                    </span>
                  </div>
                </div>

              </div>
       
           
             


                <button id="prev" className="absolute left-0 top-1/2 transform -translate-y-1/2" />
               <button id="next" className="absolute right-0 top-1/2 transform -translate-y-1/2" />
          {/* Indicateurs de carrousel */}
          <div className="carousel-indicators absolute bottom-4 left-1/2 transform -translate-x-1/2">
            <div className={`carousel-indicator ${currentIndex === 0 ? 'active' : ''}`} data-index={0} />
            <div className={`carousel-indicator ${currentIndex === 1 ? 'active' : ''}`} data-index={1} />
            <div className={`carousel-indicator ${currentIndex === 2 ? 'active' : ''}`} data-index={2} />
            <div className={`carousel-indicator ${currentIndex === 3 ? 'active' : ''}`} data-index={3} />
          </div>
        </div>
              </div>
            </div>
          </div>
        </div>

  );
};

export default Carousel;
