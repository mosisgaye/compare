import { Metadata } from 'next'
import "@/app/globals.css";

export const metadata: Metadata = {
  title: 'Mention',
}

const Mention = () => {
  return (
    <div className="max-w-7xl mx-auto text-center px-4">
      <div className="text-4xl pb-14  ">
        
        {"  "}</div>

      <article className="ph_spacer">
        <h1 className="heading1 normal text-center">Mention légale</h1>
        <p className="paragraph2">
         
          
          <h3>Éditeur: ComparaTelecom </h3>
      

          <h3>Hébergeur Vercel Inc. 340 S Lemon Ave #4133 Walnut, CA 91789</h3>

          <h2>Cookies </h2>
          
          Les cookies sont de petits fichiers utilisés pour
          identifier les utilisateurs d&apos;un site. Depuis la mise en œuvre du
          règlement européen sur la protection des données personnelles, leur
          usage est encadré et il est nécessaire d'obtenir le consentement de
          l&apos;utilisateur avant de les utiliser. Sur ComparaTelecom, nous ne
          utilisons pas de cookies et ne recueillons pas de données personnelles
          lors de la navigation. 
          
          **Liens d&apos;affiliation 💶** 
          
          Lorsque vous cliquez
          sur une offre, nous utilisons un lien d&apos;affiliation et recevons une
          rémunération de l'opérateur si vous souscrivez à un forfait. --- Cette
          reformulation clarifie les informations légales de manière concise et
          précise pour les utilisateurs de votre site, en conformité avec les
          exigences légales et les pratiques recommandées.
        </p>
      </article>
    </div>
  );
};

export default Mention;
