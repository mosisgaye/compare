import React from 'react'
import Image from 'next/image'

const Carousel = () => {
  return (
    <div>

<div className="flex-1">
  <div className="content bg-white dark:bg-[#012737] text-black dark:text-white">
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
    <div className="card-section">
      <div id="carousel" className="carousel-container">
        <div className="carousel-content ">
          {/* Première carte */}
          <div className="carousel-item active">
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
         

          <div className="card text-black">
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
                <div className="text-right">
                  <span>7,99€</span>
                  <span className="text-sm">/mois</span>
                </div>
              </div>
              <p>Appels, SMS et MMS illimités</p>
              <a href="#" className="offer-button">
                Voir l’offre
              </a>
            </div>


            <div className="card text-black">
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
                <div className="text-right">
                  <span>7,99€</span>
                  <span className="text-sm">/mois</span>
                </div>
              </div>
              <p>Appels, SMS et MMS illimités</p>
              <a href="#" className="offer-button">
                Voir l’offre
              </a>
            </div>

            <div className="card text-black">
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
                <div className="text-right">
                  <span>7,99€</span>
                  <span className="text-sm">/mois</span>
                </div>
              </div>
              <p>Appels, SMS et MMS illimités</p>
              <a href="#" className="offer-button">
                Voir l’offre
              </a>
            </div>
          
        </div>
        <button id="prev" />
        <button id="next" />
        {/* Indicateurs de carrousel */}
        <div className="carousel-indicators">
          <div className="carousel-indicator active" data-index={0} />
          <div className="carousel-indicator" data-index={1} />
          <div className="carousel-indicator" data-index={2} />
          <div className="carousel-indicator" data-index={3} />
        </div>
      </div>
    </div>
  </div>

</div>
    </div>
  )
}

export default Carousel
