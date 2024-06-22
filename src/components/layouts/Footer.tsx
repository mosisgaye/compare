'use client'

import React from 'react';
import * as Separator from '@radix-ui/react-separator';
import Link from "next/link";
import '@/app/globals.css';

const Footer = () => {
  return (
    <footer className="text-white border-t ph_footer py-12" style={{ backgroundColor: "#012737" }}>
      <div className="max-w-screen-xl mx-auto text-center px-4">
        <div className="item_copyright whitespace-nowrap">
          <div className="made_with italic">
            <span className="text-green-500">
              {/* Texte ou icône supplémentaire si nécessaire */}
            </span>
          </div>
          <h6 className="text-xs leading-4 tracking-wide mb-4"></h6>
          <div className="copyrights">
            Copyright{" "}
            <Link
              href="#"
              title="Meilleurs Plans de Téléphonie Cellulaire - Trouvez les Prix les Moins Chers"
              className="ph_link text-[15px] leading-5 font-medium"
            >
              Comparetelecom
            </Link>{" "}
            2024. Tous droits réservés -{" "}
            <Link href="/condition-generale" title="Page : Conditions Générales de Service" className="text-white">
              Conditions Générales -{" "}
            </Link>{" "}
            <Link href="/politique" title="Page : Votre Vie Privée Compte. Notre Politique de Confidentialité" className="text-white">
              Politique de Confidentialité -{" "}
            </Link>{" "}
            <Link href="/cookies" title="Page : Votre Vie Privée Compte. Notre Politique de Cookie" className="text-white">
              Politique de Cookie - {" "}
            </Link>
            <Link href="/mentions-legales" title="Page : Mentions Légales" className="text-white">
              Mention légale{" "}
            </Link>
          </div>
        </div>
        {/* Separator */}
        <Separator.Root className="max-w-screen-2xl my-6 mx-auto" aria-orientation="horizontal" />
        {/* Separator */}
      </div>
    </footer>
  );
};

export default Footer;
