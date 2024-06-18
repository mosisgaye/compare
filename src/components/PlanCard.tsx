import React from 'react';
import Image from 'next/image';

interface PlanCardProps {
  title: string;
  speed: string;
  price: string;
  features: string[];
  promotion?: string;
  engagement: string;
  operatorLogo: string;
}

const PlanCard: React.FC<PlanCardProps> = ({
  title,
  speed,
  price,
  features,
  promotion,
  engagement,
  operatorLogo,
}) => {
  return (
    <div className="border border-gray-300 dark:border-white p-4 mb-4 rounded-lg dark:bg-[#052c3e] shadow-md flex flex-col space-y-4  hover:border-[#79CE25] transition-all duration-200">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <Image 
          src={operatorLogo} 
          alt={`${title} logo`} 
          className="object-contain"
          width={16}
          height={16} />
        
        <div className="flex flex-col items-center text-black dark:text-white">
          <p className="text-xl">{speed}</p>
          <p className="text-sm">{features.join(', ')}</p>
          <p className="text-xl">{price}</p>
        </div>
        
        <div className="flex flex-col items-center">
          <button className="px-4 py-2 bg-red-500 text-white rounded-md">View Offer</button>
          <p className="text-sm text-gray-600 mt-2 text-center dark:text-white">{engagement}</p>
        </div>
      </div>

 
    </div>
  );
};

export default PlanCard;
