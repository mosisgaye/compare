import { Metadata } from 'next';
import "@/app/globals.css";

// Définition des métadonnées de la page
export const metadata: Metadata = {
  title: 'Conditions Générales | Comparetelecom',
  description: 'Découvrez les conditions générales d\'utilisation de notre site, y compris les informations sur les cookies et leur gestion.'
};

const Condition = () => {
  return (
    <div className="max-w-7xl mx-auto text-center px-4">
      <div className="text-4xl pb-14">{"  "}</div>

      <article className="ph_spacer">
        <h1 className="heading1 normal text-center dark:text-white">
          Conditions Générales
        </h1>
        <p className="paragraph2 dark:text-white">
          Notre site utilise des cookies pour améliorer votre expérience utilisateur et vous fournir un contenu personnalisé. En continuant à naviguer sur ce site, vous consentez à l'utilisation de cookies. Pour plus d'informations sur l'utilisation des cookies et sur la manière de les gérer, veuillez consulter notre politique de cookies.
        </p>
      </article>
    </div>
  );
};

export default Condition;
