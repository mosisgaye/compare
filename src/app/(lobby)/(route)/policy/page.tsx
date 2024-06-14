import { Metadata } from 'next';
import "@/app/globals.css";

export const metadata: Metadata = {
  title: 'Policy',
  description: 'Découvrez notre politique de confidentialité et comment nous protégeons vos informations personnelles.',
  keywords: 'politique de confidentialité, protection des données, sécurité des informations',
  openGraph: {
    type: 'website',
    url: 'https://comparetelecom.net/policy',
    title: 'Politique de Confidentialité',
    description: 'Découvrez notre politique de confidentialité et comment nous protégeons vos informations personnelles.',
    images: [
      {
        url: 'https://votresite.com/images/policy-og-image.jpg',
        width: 800,
        height: 600,
        alt: 'Politique de Confidentialité',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@votrecompte',
    title: 'Politique de Confidentialité',
    description: 'Découvrez notre politique de confidentialité et comment nous protégeons vos informations personnelles.',
    images: [
      {
        url: 'https://votresite.com/images/policy-twitter-image.jpg',
        alt: 'Politique de Confidentialité',
      },
    ],
  },
};

const Policy = () => {
  return (
    <div className="max-w-7xl mx-auto text-center px-4">
      <div className="text-4xl pb-14">{"  "}</div>

      <article className="ph_spacer">
        <h1 className="heading1 normal text-center">
          Politique de Confidentialité
        </h1>
        <p className="paragraph2">
          Notre engagement envers la protection de votre vie privée est
          fondamental. Nous prenons très au sérieux la sécurité et la
          confidentialité de vos informations personnelles. Notre politique de
          confidentialité décrit en détail comment nous recueillons, utilisons,
          stockons et protégeons vos données. Elle précise également vos droits
          en tant qu&apos;utilisateur et les mesures que nous prenons pour assurer la
          sécurité de vos informations. Pour explorer notre approche en matière
          de confidentialité, veuillez consulter notre politique de
          confidentialité complète.
        </p>
      </article>
    </div>
  );
};

export default Policy;
