import React from 'react';

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
    <div className="p-4 dark:bg-[#052c3e] rounded-md shadow-md mb-4 flex flex-col space-y-4 border-white hover:border-[#79CE25] transition-all duration-200">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <img src={operatorLogo} alt={`${title} logo`} className="w-16 h-16 object-contain" />
        
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
