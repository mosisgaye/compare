import { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Mentions Légales",
  description: "Consultez les mentions légales de notre site pour plus d&apos;informations sur l&apos;éditeur, l&apos;hébergeur, l&apos;utilisation des cookies et les liens d&apos;affiliation.",
  keywords: "mentions légales, éditeur, hébergeur, cookies, liens d&apos;affiliation, ComparaTelecom",
  openGraph: {
    title: "Mentions Légales",
    description: "Consultez les mentions légales de notre site pour plus d&apos;informations sur l&apos;éditeur, l&apos;hébergeur, l&apos;utilisation des cookies et les liens d&apos;affiliation.",
    url: `${process.env.NEXT_PUBLIC_APP_URL}/mentions-legales`,
  },
  twitter: {
    card: "summary",
    site: "@votrecompte",
    title: "Mentions Légales",
    description: "Consultez les mentions légales de notre site pour plus d&apos;informations sur l&apos;éditeur, l&apos;hébergeur, l&apos;utilisation des cookies et les liens d&apos;affiliation.",
  },
};

const Mention = () => {
  return (
    <div className="max-w-7xl mx-auto text-center px-4">
      <div className="text-4xl pb-14"></div>

      <article className="ph_spacer">
        <h1 className="heading1 normal text-center">Mentions Légales</h1>

        <section className="text-left">
          <h2 className="heading2">Éditeur</h2>
          <p className="paragraph2">ComparaTelecom</p>

          <h2 className="heading2">Hébergeur</h2>
          <p className="paragraph2">
            Vercel Inc. <br />
            340 S Lemon Ave #4133 <br />
            Walnut, CA 91789
          </p>

          <h2 className="heading2">Cookies</h2>
          <p className="paragraph2">
            Les cookies sont de petits fichiers utilisés pour identifier les
            utilisateurs d&apos;un site. Depuis la mise en œuvre du règlement
            européen sur la protection des données personnelles, leur usage est
            encadré et il est nécessaire d&apos;obtenir le consentement de
            l&apos;utilisateur avant de les utiliser. Sur ComparaTelecom, nous
            n&apos;utilisons pas de cookies et ne recueillons pas de données
            personnelles lors de la navigation.
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