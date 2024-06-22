// Importation des métadonnées de Next.js
import { Metadata } from 'next';
import "@/app/globals.css";

// Définition des métadonnées de la page
export const metadata: Metadata = {
  title: 'Politique de Cookies | comparetelecom',
  description: 'Découvrez comment notre site utilise des cookies pour améliorer votre expérience utilisateur et vous fournir un contenu personnalisé.'
};

// Composant de la politique de cookies
const Cookies = () => {
  return (
    <div className="max-w-7xl mx-auto text-center px-4">
      <div className="text-4xl pb-14  ">{"  "}</div>

      <article className="ph_spacer">
        <h1 className="heading1 normal text-center dark:text-white">
          Politique de Cookies
        </h1>
        <p className="paragraph2 dark:text-white">
          Notre site utilise des cookies pour améliorer votre expérience
          utilisateur et vous fournir un contenu personnalisé. En continuant à
          naviguer sur ce site, vous consentez à l&apos;utilisation de cookies. Pour
          plus d&apos;informations sur l&apos;utilisation des cookies et sur la manière de
          les gérer, veuillez consulter notre politique de cookies.
        </p>
      </article>
    </div>
  );
};

// Exportation du composant par défaut
export default Cookies;
