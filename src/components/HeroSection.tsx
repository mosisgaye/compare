import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

type Offer = {
  id: string;
  operatorName: string;
  operatorLogo: string;
  planName: string;
  description: string;
  link: string;
  calls: string;
  sms: string;
  mms: string;
  data: string;
  price: string;
};

type HeroSectionProps = {
  offers: Offer[];
};

const HeroSection: React.FC<HeroSectionProps> = ({ offers }) => {
  return (
    <div className="bg-white text-black dark:bg-[#012737] dark:text-white mt-14 pt-14">
      <div className="container mx-auto flex flex-col lg:flex-row items-start lg:items-center space-y-6 lg:space-y-0 lg:space-x-8">
        <div className="relative flex-shrink-0 lg:w-1/3 lg:h-full p-6">
          <div className="flex flex-col gap-y-4 justify-center items-center text-center sm:items-start sm:text-start">
            <h1 className='font-bold text-4xl'>Comparaison des offres mobiles en France</h1>
            <h2 className='max-w-md sm:max-w-[42rem] leading-normal text-muted-foreground text-sm sm:text-xl sm:leading-8'>
              Comparez les forfaits mobiles les moins chers qui correspondent à vos besoins. Comparez les forfaits mobiles les moins chers qui correspondent à vos besoins.
            </h2>
            <div className='flex flex-wrap items-center gap-4 btn_primary cursor-pointer'>
              <Link href='/forfait' className='text-white'>Voir maintenant</Link>
            </div>
          </div>
        </div>
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          {offers.map((offer) => (
            <div key={offer.id} className="bg-white text-black dark:bg-[#012737] dark:text-white rounded-lg p-6 flex flex-col justify-between h-full transform transition-transform hover:-translate-y-1 shadow-2xl">
              <div className="flex items-center">
                <Image src={offer.operatorLogo} alt={offer.operatorName} className="w-12 h-12 mr-4" />
                <div className="flex flex-col">
                  <h3 className="text-lg font-bold">{offer.operatorName}</h3>
                  <span className="text-gray-400">{offer.planName}</span>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-bold mb-2">
                  <a href={offer.link} className="text-black dark:text-white">{offer.description}</a>
                </h3>
                <div className="text-sm mb-2">
                  <strong>Appels/SMS/MMS: :</strong> {offer.calls}
                </div>
          
                <div className="text-sm mb-2">
                  <strong>Data :</strong> {offer.data}
                </div>
                <div className="text-sm font-bold mb-2">
                  <strong>Prix :</strong> {offer.price}
                </div>
              </div>
              <a href={offer.link} className="bg-[#f05153] text-white rounded px-3 py-1 font-semibold text-center mt-4">
                Voir l'offre
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
