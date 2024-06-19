'use client'
import React, { useState } from 'react';
import FilterSidebar from '@/components/FilterSidebar';
import PlanCard from '@/components/PlanCard';
import { Plan } from '@/types';
import ZendeskWidget from '@/components/ZendeskWidget';
import Feedback from '@/components/Feedback';

const plans: Plan[] = [
  {
    title: 'SFR Starter Fibre',
    speed: '1 Gb/s',
    price: '29,99€/mois',
    features: ['160 chaines TV'],
    engagement: 'Engagement 12 mois',
    tech: 'Fibre',
    operator: 'SFR',
    tv: true,
    operatorLogo: '/images/sfr.png',

  },
  {
    title: 'SFR Power Fibre',
    speed: '2 Gb/s',
    price: '36,99€/mois',
    features: ['200 chaines TV'],
    promotion: '6 mois Netflix ou Disney+',
    engagement: 'Engagement 12 mois',
    tech: 'Fibre',
    operator: 'SFR',
    tv: true,
    operatorLogo: '/images/free.png',

  },
  {
    title: 'Orange Just Livebox Fibre',
    speed: '400 Mb/s',
    price: '19,99€/mois',
    features: ['Pas de TV'],
    engagement: 'Engagement 12 mois',
    tech: 'Fibre',
    operator: 'Orange',
    operatorLogo: '/images/bouygues.png',

  },
  {
    title: 'SFR Premium Fibre',
    speed: '8 Gb/s',
    price: '44,99€/mois',
    features: ['200 chaines TV'],
    promotion: '9 mois Netflix ou Disney+',
    engagement: 'Sans engagement',
    tech: 'Fibre',
    operator: 'SFR',
    tv: true,
    operatorLogo: '/images/orange.png',

  },
  {
    title: 'Orange Just Livebox Fibre',
    speed: '400 Mb/s',
    price: '19,99€/mois',
    features: ['Pas de TV'],
    engagement: 'Engagement 12 mois',
    tech: 'Fibre',
    operator: 'Orange',
    operatorLogo: '/images/bouygues.png',

  },
  {
    title: 'SFR Starter Fibre',
    speed: '2 Gb/s',
    price: '39,99€/mois',
    features: ['160 chaines TV'],
    engagement: 'Engagement 12 mois',
    tech: 'Fibre',
    operator: 'SFR',
    tv: true,
    operatorLogo: '/images/sfr.png',

  },
];

const Home: React.FC = () => {
  const [filteredPlans, setFilteredPlans] = useState<Plan[]>(plans);

  const handleFilterChange = (filters: any) => {
    const filtered = plans.filter(plan => {
      const price = parseFloat(plan.price.replace('€/mois', ''));
      return (
        (filters.techno.length === 0 || filters.techno.includes(plan.tech)) &&
        price <= filters.maxBudget &&
        (!filters.engagement || plan.engagement === 'Sans engagement') &&
        (!filters.mobile || plan.mobile) &&
        (!filters.tv || plan.tv) &&
        (filters.operators.length === 0 || filters.operators.includes(plan.operator))
      );
    });
    setFilteredPlans(filtered);
  };

  return (

    <>
    <div className='text-center'>
      <h1 className="text-4xl font-bold mb-8 dark:text-white py-5">Comparer les Meilleures Offres de Box</h1>
      <p className="text-lg mb-4 dark:text-white">Découvrez les meilleures offres en un clin d&apos;œil !</p>
    </div>
    <div className="flex flex-col md:flex-row justify-center dark:border-r-2 dark:border-white max-w-7xl mx-auto p-4">
      <div className="w-full md:w-1/4 p-4">
        <FilterSidebar onFilterChange={handleFilterChange} />
      </div>
      <div className="w-full md:w-3/4 p-4">
        {filteredPlans.map((plan, index) => (
          <PlanCard
            key={index}
            title={plan.title}
            speed={plan.speed}
            price={plan.price}
            features={plan.features}
            promotion={plan.promotion}
            engagement={plan.engagement}
            operatorLogo={plan.operatorLogo}
          />
        ))}
      </div>
    </div>
    <div className="p-4">
      <ZendeskWidget />
      <Feedback />
    </div>
  </>
  
  );
};

export default Home;
