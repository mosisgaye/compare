import { Metadata } from 'next';
import "@/app/globals.css";

// Définition des métadonnées de la page
export const metadata: Metadata = {
  title: 'Mentions Légales | ComparaTelecom',
  description: 'Découvrez les mentions légales de ComparaTelecom, y compris les informations sur l\'éditeur, l\'hébergeur, l\'utilisation des cookies et les liens d\'affiliation.'
};

const Mention = () => {
  return (
    <div className="max-w-7xl mx-auto text-center px-4">
      <div className="text-4xl pb-14"></div>

      <article className="ph_spacer dark:text-white">
        <h1 className="heading1 normal text-center mentions-legales">Mentions Légales</h1>

        <section className="text-left">
          <h2 className="heading2">Éditeur</h2>
          <p className="paragraph2">ComparaTelecom</p>

          <h2 className="heading2">Hébergeur</h2>
          <p className="paragraph2">
            Vercel Inc. <br />
            340 S Lemon Ave #4133 <br />
            Walnut, CA 91789
          </p>

          <h2 className="heading2">Liens d&apos;affiliation</h2>
          <p className="paragraph2">
            Lorsque vous cliquez sur une offre, nous utilisons un lien
            d&apos;affiliation et recevons une rémunération de l&apos;opérateur
            si vous souscrivez à un forfait.
          </p>
        </section>
      </article>
    </div>
  );
};

export default Mention;
