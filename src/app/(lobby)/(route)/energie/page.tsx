import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Banner from '@/components/Banner';

// Définition des métadonnées de la page
export const metadata: Metadata = {
  title: 'Fournisseurs d\'Énergie | ComparaTelecom',
  description: 'Découvrez la liste complète des fournisseurs d\'électricité et de gaz actifs avec leurs coordonnées et leurs sites web.'
};

const EnergySuppliers: React.FC = () => {
  const suppliers = [
    {
      name: 'OHM Énergie',
      logo: 'https://dte.ohm-energie.com/11/76711/img_13_17_1.png',
      contact: '+33971071421',
      contactLink: 'tel:+33971071421',
      link: 'https://dte.ohm-energie.com/?P512BA75828231D17'
    },
    {
      name: 'Alpiq',
      logo: '/images/alpiq.png',
      contact: '+33186266489',
      contactLink: 'tel:+33186266489',
      link: 'https://particuliers.alpiq.fr/'
    },
    {
      name: 'Alterna',
      logo: '/images/alterna.png',
      contact: '+33549605458',
      contactLink: 'tel:+33549605458',
      link: 'https://www.alterna-energie.fr/'
    },
    {
      name: 'Dyneff',
      logo: '/images/dyneff.png',
      contact: '+33467126830',
      contactLink: 'tel:+33467126830',
      link: 'https://www.dyneff.fr/'
    },
    {
      name: 'EDF',
      logo: '/images/edf.png',
      contact: '3404',
      contactLink: 'tel:3404',
      link: 'https://www.edf.fr/'
    },
    {
      name: 'Ekwateur',
      logo: '/images/ekwateur.png',
      contact: '+33987671674',
      contactLink: 'tel:+33987671674',
      link: 'https://ekwateur.fr/'
    },
    {
      name: 'Elmy',
      logo: '/images/elmy.png',
      contact: '+33971079458',
      contactLink: 'tel:+33971079458',
      link: 'https://elmy.fr/'
    },
    {
      name: 'Enercoop',
      logo: '/images/enercoop.png',
      contact: '+33970680765',
      contactLink: 'tel:+33970680765',
      link: 'https://souscription.enercoop.fr/'
    },
    {
      name: 'Energie d\'ici',
      logo: '/images/energie-d-ici.png',
      contact: '+33564270488',
      contactLink: 'tel:+33564270488',
      link: 'https://www.energiedici.fr/'
    },
    {
      name: 'Engie',
      logo: '/images/engie.png',
      contact: '+33974594085',
      contactLink: 'tel:+33974594085',
      link: 'https://particuliers.engie.fr/'
    },
    {
      name: 'Eni',
      logo: '/images/eni.png',
      contact: '+33974591286',
      contactLink: 'tel:+33974591286',
      link: 'https://fr.eni.com/particuliers'
    },
    {
      name: 'Gaz de Bordeaux',
      logo: '/images/gaz-de-bordeaux.png',
      contact: '+33556794141',
      contactLink: 'tel:+33556794141',
      link: 'https://www.gazdebordeaux.fr/'
    },
    {
      name: 'Happ-e',
      logo: '/images/happ-e.png',
      contact: '',
      contactLink: '',
      link: 'https://www.happ-e.fr/'
    },
    {
      name: 'La Bellenergie',
      logo: '/images/la-bellenergie.png',
      contact: '+33974594750',
      contactLink: 'tel:+33974594750',
      link: 'https://labellenergie.fr/'
    },
    {
      name: 'Mint Énergie',
      logo: '/images/mint-energie.png',
      contact: '+33974594630',
      contactLink: 'tel:+33974594630',
      link: 'https://www.mint-energie.com/Pages/Accueil/accueil.aspx'
    },
    {
      name: 'Octopus Energy',
      logo: '/images/octopus-energy.png',
      contact: '+33987675305',
      contactLink: 'tel:+33987675305',
      link: 'https://octopus.energy/'
    },
    {
      name: 'Papernest Énergie',
      logo: '/images/papernest-energie.png',
      contact: '+33970252165',
      contactLink: 'tel:+33970252165',
      link: 'https://www.papernest.com/energie/'
    },
    {
      name: 'Primeo',
      logo: '/images/primeo.png',
      contact: '+33170232497',
      contactLink: 'tel:+33170232497',
      link: 'https://www.primeo-energie.fr/'
    },
    {
      name: 'Sowee',
      logo: '/images/sowee.png',
      contact: '',
      contactLink: '',
      link: 'https://www.sowee.fr/'
    },
    {
      name: 'TotalEnergies',
      logo: '/images/totalenergies.png',
      contact: '+33974594487',
      contactLink: 'tel:+33974594487',
      link: 'https://www.totalenergies.fr/particuliers'
    },
    {
      name: 'Urban Solar Energy',
      logo: '/images/urban-solar-energy.png',
      contact: '+33974592225',
      contactLink: 'tel:+33974592225',
      link: 'https://www.urbansolarenergy.fr/'
    },
    {
      name: 'Vattenfall',
      logo: '/images/vattenfall.png',
      contact: '+33974733975',
      contactLink: 'tel:+33974733975',
      link: 'https://www.vattenfall.fr/'
    },
    {
      name: 'Wekiwi',
      logo: '/images/wekiwi.png',
      contact: '+33970152320',
      contactLink: 'tel:+33970152320',
      link: 'https://www.wekiwi.fr/'
    },
  ];

  return (
    <div className="flex justify-center py-8">
      <table className="w-full md:w-2/4 p-4 mx-auto divide-y divide-gray-200">
        <Banner />
        <caption className="text-2xl font-semibold mb-6 dark:text-white">⚡ Liste de tous les fournisseurs d'électricité et gaz actifs au 21/06/2024</caption>
        <tbody>
          {suppliers.map((supplier, index) => (
            <React.Fragment key={index}>
              <tr>
                <th className="px-6 py-4 text-left text-xs font-medium dark:text-white uppercase tracking-wider">
                  Nom des fournisseurs
                </th>
                <td className="px-6 py-4 whitespace-nowrap">
                  <strong>{supplier.name}</strong>
                </td>
              </tr>
              <tr>
                <th className="px-6 py-4 text-left text-xs font-medium dark:text-white uppercase tracking-wider">
                  Logo
                </th>
                <td className="px-6 py-4 whitespace-nowrap">
                  <a href={supplier.link} target="_blank" rel="noopener noreferrer">
                    <Image src={supplier.logo} alt={`Logo ${supplier.name}`} width={32} height={32} loading="lazy" />
                  </a>
                </td>
              </tr>
              <tr>
                <th className="px-6 py-4 text-left text-xs font-medium dark:text-white uppercase tracking-wider">
                  Contact 
                </th>
                <td className="px-6 py-4 whitespace-nowrap">
                  <a href={supplier.contactLink} className="text-blue-500 hover:underline" aria-label={`Appeler ${supplier.contact}`}>
                    {supplier.contact}
                  </a>
                </td>
              </tr>
              <tr>
                <td colSpan={2} className="border-b-2 border-gray-200"></td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EnergySuppliers;
