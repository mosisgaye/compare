import React from 'react';
import '@/app/globals.css';

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

type MiniCardGridProps = {
  offers: Offer[];
};

const MiniCardGrid: React.FC<MiniCardGridProps> = ({ offers }) => {
  return (
    <div className="mini-card-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {offers.map((offer) => (
        <div key={offer.id} className="bg-white text-black dark:bg-[#012737] dark:text-white rounded-lg p-6 flex flex-col justify-between h-full transform transition-transform hover:-translate-y-1 shadow-2xl">
          <div className="flex items-center mt-4">
            <img src={offer.operatorLogo} alt={offer.operatorName} className="w-20 h-20 rounded-full mr-4" />
            <div className="flex flex-col">
              <h3 className="text-lg font-bold">{offer.operatorName}</h3>
              <span className="text-gray-400">{offer.planName}</span>
            </div>
          </div>
          <div className="flex-grow mt-4">
            <h3 className="text-xl font-bold mb-2"><a href={offer.link} className="text-black dark:text-white">{offer.description}</a></h3>
            <div className="text-sm mb-2">
              <strong>Appels/SMS/MMS:</strong> {offer.calls}
            </div>
        
            <div className="text-sm mb-2">
              <strong>Data :</strong> {offer.data}
            </div>
            <div className="text-sm font-bold mb-2">
              <strong>Prix :</strong> {offer.price}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MiniCardGrid;

