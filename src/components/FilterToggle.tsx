// src/components/FilterToggle.tsx
'use client'
import React, { useState } from 'react';
import { Signal, SlidersHorizontal } from 'lucide-react';
import { FaDollarSign, FaFeather, FaGlobe } from 'react-icons/fa';
import { useRouter, useSearchParams } from 'next/navigation'; // Importer useRouter et useSearchParams depuis next/navigation
import Button from './Button';
import { Bird } from 'lucide-react';

const FilterToggle: React.FC = () => {
  const [showFilters, setShowFilters] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const handleFilterChange = (filter: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('filter', filter);
    router.push(`/forfait-mobile?${params.toString()}`);
  };

  return (
    <div>
      <div className="flex justify-center mb-4 sm:mb-6 lg:hidden dark:text-white">
        <button 
          onClick={toggleFilters} 
          className="flex items-center space-x-2"
        >
          <SlidersHorizontal size={28} absoluteStrokeWidth />
          <span>Filtres</span>
        </button>
      </div>

      <div className={`flex-wrap justify-center mb-4 sm:mb-6 space-y-2 sm:space-y-0 sm:space-x-3 ${showFilters ? 'flex' : 'hidden'} lg:flex`}>
        <div className="w-full sm:w-auto">
          <Button icon={<Bird />} label="Sans engagement" onClick={() => handleFilterChange('sans-engagement')} />
        </div>
        <div className="w-full sm:w-auto">
          <Button icon={<FaDollarSign />} label="Les moins chers" onClick={() => handleFilterChange('les-moins-chers')} />
        </div>
        <div className="w-full sm:w-auto">
          <Button icon={<Signal /> } label="Forfait 5G" onClick={() => handleFilterChange('forfait-5g')} />
        </div>
        <div className="w-full sm:w-auto">
          <Button icon={<FaGlobe />} label="Internationales" onClick={() => handleFilterChange('operateurs')} />
        </div>
      </div>
    </div>
  );
};

export default FilterToggle;
