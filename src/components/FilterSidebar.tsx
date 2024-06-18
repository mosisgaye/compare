'use client'
import React, { useState, useEffect } from 'react';
import { FiRefreshCw } from 'react-icons/fi';  // Icône de rafraîchissement pour le bouton de réinitialisation
import { FaWifi, FaTv, FaMobileAlt } from 'react-icons/fa'; // Icônes pour les options

interface FilterSidebarProps {
  onFilterChange: (filters: any) => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({ onFilterChange }) => {
  const [techno, setTechno] = useState<string[]>(['Fibre']);
  const [maxBudget, setMaxBudget] = useState(50);
  const [engagement, setEngagement] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [tv, setTv] = useState(false);
  const [operators, setOperators] = useState<string[]>([]);

  useEffect(() => {
    const handleFilterChange = () => {
      onFilterChange({
        techno,
        maxBudget,
        engagement,
        mobile,
        tv,
        operators,
      });
    };
    handleFilterChange();
  }, [techno, maxBudget, engagement, mobile, tv, operators, onFilterChange]);

  const handleTechnoChange = (tech: string) => {
    setTechno(prev =>
      prev.includes(tech) ? prev.filter(t => t !== tech) : [...prev, tech]
    );
  };

  const handleOperatorChange = (operator: string) => {
    setOperators(prev =>
      prev.includes(operator)
        ? prev.filter(o => o !== operator)
        : [...prev, operator]
    );
  };

  return (
    <div className="w-full p-4 bg-white text-black dark:bg-[#012737] dark:text-white rounded shadow-lg sticky top-4">
      <h2 className="text-lg font-semibold mb-4">Filtrer les offres</h2>
      <div>
        <div className="mb-4">
          <label className="block mb-2">Trier:</label>
          <div className="flex space-x-2">
            <button className="px-4 py-2 border rounded bg-[#79CE25] text-white transition duration-300 hover:bg-[#79CE25]">
              Prix
            </button>
            <button className="px-4 py-2 border rounded transition duration-300 hover:bg-blue-100">
              Débit
            </button>
          </div>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Techno:</label>
          <div className="flex space-x-2">
            {['Fibre', 'ADSL', '4G'].map((tech) => (
              <button
                key={tech}
                className={`px-4 py-2 border rounded ${
                  techno.includes(tech) ? 'bg-[#79CE25] text-white' : 'transition duration-300 hover:bg-blue-100'
                }`}
                onClick={() => handleTechnoChange(tech)}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Budget Max:</label>
          <div className="flex items-center space-x-2">
            <input
              type="range"
              min="0"
              max="100"
              value={maxBudget}
              onChange={(e) => setMaxBudget(Number(e.target.value))}
              className="w-full"
            />
            <span>{maxBudget}€ et plus</span>
          </div>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Options:</label>
          <div className="flex flex-col space-y-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox"
                checked={engagement}
                onChange={() => setEngagement(!engagement)}
              />
              <span className="ml-2 flex items-center"><FaWifi className="mr-2"/>Sans engagement</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox"
                checked={mobile}
                onChange={() => setMobile(!mobile)}
              />
              <span className="ml-2 flex items-center"><FaMobileAlt className="mr-2"/>Avec forfait mobile</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox"
                checked={tv}
                onChange={() => setTv(!tv)}
              />
              <span className="ml-2 flex items-center"><FaTv className="mr-2"/>Avec TV</span>
            </label>
          </div>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Opérateurs:</label>
          <div className="flex space-x-2">
            {['SFR', 'Orange', 'Bouygues', 'Free'].map((operator) => (
              <button
                key={operator}
                className={`px-1 py-2 border rounded ${
                  operators.includes(operator) ? 'bg-[#79CE25] text-white' : 'transition duration-300 hover:bg-blue-100'
                }`}
                onClick={() => handleOperatorChange(operator)}
              >
                {operator}
              </button>
            ))}
          </div>
        </div>
        <button
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded flex items-center justify-center transition duration-300 hover:bg-gray-300"
          onClick={() => {
            setTechno([]);
            setMaxBudget(50);
            setEngagement(false);
            setMobile(false);
            setTv(false);
            setOperators([]);
          }}
        >
          <FiRefreshCw className="mr-2" /> Réinitialiser les filtres
        </button>
      </div>
    </div>
  );
};

export default FilterSidebar;
