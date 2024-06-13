import { Metadata } from 'next'
import "@/app/globals.css";


export const metadata: Metadata = {
  title: 'Policy',
}

const Policy = () => {
  return (
    <div className="max-w-7xl mx-auto text-center px-4">
      <div className="text-4xl pb-14  ">{"  "}</div>

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
          en tant qu'utilisateur et les mesures que nous prenons pour assurer la
          sécurité de vos informations. Pour explorer notre approche en matière
          de confidentialité, veuillez consulter notre politique de
          confidentialité complète.
        </p>
      </article>
    </div>
  );
};

export default Policy;
