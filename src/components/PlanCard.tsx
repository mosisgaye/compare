import React from 'react';

interface PlanCardProps {
  title: string;
  speed: string;
  price: string;
  features: string[];
  promotion?: string;
  engagement: string;
  operatorLogo: string;
  boxImage: string;
}

const PlanCard: React.FC<PlanCardProps> = ({
  title,
  speed,
  price,
  features,
  promotion,
  engagement,
  operatorLogo,
  boxImage,
}) => {
  return (
    <div className="p-4 bg-white dark:bg-[#012737] dark:text-white rounded shadow-md mb-4 flex flex-col space-y-4">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center space-x-2">
          <img src={operatorLogo} alt={`${title} logo`} className="w-10 h-10 object-contain" />
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        {promotion && <span className="px-2 py-1 bg-red-500 text-white text-sm rounded">{promotion}</span>}
      </div>

      <div className="flex justify-between items-center">
     
        <p className="text-2xl font-semibold dark:text-[white] text-black">{price}</p>
      </div>

      <ul className="mt-2 mb-2">
        {features.map((feature, index) => (
          <li key={index} className="text-sm text-[#79CE25] flex items-center space-x-1">
            <svg className="w-4 h-4 text-[#79CE25]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      
      <p className="text-sm text-gray-600">{engagement}</p>
      
      <button className="mt-4 btn-primary mx-auto px-4 py-2 bg-[#79CE25] text-white rounded">
        En savoir +
      </button>
    </div>
  );
};

export default PlanCard;
