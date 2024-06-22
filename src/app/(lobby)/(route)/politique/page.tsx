// Importation des métadonnées de Next.js
import { Metadata } from 'next';
import "@/app/globals.css";

// Définition des métadonnées de la page
export const metadata: Metadata = {
  title: 'Politique de Confidentialité | comparetelecom',
  description: 'Découvrez notre politique de confidentialité détaillée et notre engagement envers la protection de vos données personnelles.'
};

// Composant de la politique de confidentialité
const Politique = () => {
  return (
    <div className="max-w-7xl mx-auto text-center px-4">
      <div className="text-4xl pb-14">{"  "}</div>

      <article className="ph_spacer">
        <h1 className="heading1 normal text-center dark:text-white">
          Politique de Confidentialité
        </h1>
        <p className="paragraph2 dark:text-white">
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

// Exportation du composant par défaut
export default Politique;
