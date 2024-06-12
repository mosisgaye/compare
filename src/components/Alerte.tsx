/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image';
import '@/app/globals.css';

const Alerte = () => {
  return (
    <div className="relative max-w-screen-xl mx-auto shadow-md bg-[#f1ffe2] pb-8 mt-8 pt-4 mb-12 rounded-md">
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Texte */}
        <div className="text-center md:text-left mb-4 md:mb-0 md:w-2/3">
          <p className="text-xl font-bold text-gray-900">
            Les tarifs des forfaits Internet
          </p>
          <p className="text-gray-900">
            sont sujets à des fluctuations fréquentes. Laissez PlanHub Price Alert vous envoyer un e-mail avec les prix les moins chers disponibles.
          </p>
        </div>

        {/* Bouton */}
        <div className="w-full flex justify-center md:w-1/3 mb-4 md:mb-0">
          <a
            href="#"
            className="bg-[#79CE25] text-white font-semibold py-2 px-6 rounded-lg flex items-center justify-center"
            title="Search"
            aria-label="Search"
          >
            Laissez un message
          </a>
        </div>

        {/* Icônes */}
        <div className="flex items-center justify-center space-x-2 md:w-1/3">
          <Image
            src="/svg/price.svg"
            alt="statistics"
            className="h-10 w-20"
            height={38}
            width={80}
          />
          <Image
            src="/svg/arrow.svg"
            alt="arrow"
            className="h-8 w-5"
            height={34}
            width={19}
          />
          <Image
            src="/svg/notif.svg"
            alt="alert"
            className="h-10 w-20"
            height={38}
            width={85}
          />
          <Image
            src="/svg/arrow.svg"
            alt="arrow"
            className="h-8 w-5"
            height={34}
            width={19}
          />
          <Image
            src="/svg/mail_send.svg"
            alt="mail-phone"
            className="h-10 w-20"
            height={38}
            width={85}
          />
        </div>
      </div>
    </div>
  );
};

export default Alerte;
