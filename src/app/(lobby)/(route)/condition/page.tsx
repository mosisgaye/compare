/* eslint-disable react/no-unescaped-entities */
import { Metadata } from 'next'
import "@/app/globals.css";

export const metadata: Metadata = {
  title: 'Condition',
}

const Condition = () => {
  return (
    <div className="max-w-7xl mx-auto text-center px-4">
      <div className="text-4xl pb-14  ">{"  "}</div>

      <article className="ph_spacer">
        <h1 className="heading1 normal text-center">
          Condition Générale
        </h1>
        <p className="paragraph2">
          Notre site utilise des cookies pour améliorer votre expérience
          utilisateur et vous fournir un contenu personnalisé. En continuant à
          naviguer sur ce site, vous consentez à l&apos;utilisation de cookies. Pour
          plus d&apos;informations sur l'utilisation des cookies et sur la manière de
          les gérer, veuillez consulter notre politique de cookies.
        </p>
      </article>
    </div>
  );
};

export default Condition;