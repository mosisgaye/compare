import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import GithubStarsSkeleton from '@/components/skeletons/GithubStarsSkeleton';

const Hero = async () => {
  return (
    <section className='relative py-12'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 gap-6 lg:gap-0 md:grid-cols-2 items-center justify-between sm:px-6 lg:px-8 sm:pt-20 space-y-8'>
        <div className='flex flex-col gap-y-4 justify-center items-center text-center sm:items-start sm:text-start'>
          <Suspense fallback={<GithubStarsSkeleton />}>
            {/* Votre composant */}
          </Suspense>
          <h1 className='bold text-4xl'>
            Comparaison des offres télécoms selon votre convenance
          </h1>
          <h2 className='max-w-md sm:max-w-[42rem] leading-normal text-muted-foreground text-sm sm:text-xl sm:leading-8'>
            Comparez les forfaits mobiles les moins chers qui correspondent à vos besoins. Comparez les forfaits mobiles les moins chers qui correspondent à vos besoins.
          </h2>
          <div className='flex flex-wrap items-center gap-4 btn_primary'>
            <Link href='/forfait'>Voir maintenant</Link>
          </div>
        </div>
        <div className='flex items-center justify-center md:justify-end'>
          <Image
            priority
            src='/images/fondnice.png'
            className='rounded-full'
            alt='Hero image'
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

const ComponentBelowHero = () => {
  return (
    <section className="mt-[-5rem]"> {/* Ajoute une marge négative pour réduire l'espace */}
      {/* Contenu de votre composant en dessous */}
    </section>
  );
};

export default Hero;