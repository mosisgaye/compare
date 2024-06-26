'use client'
import { useState, useEffect } from 'react';

const Cookies = () => {
  const [showCookieConsent, setShowCookieConsent] = useState(false);
  const [cookieAccepted, setCookieAccepted] = useState(false);
  const [cookieDeclined, setCookieDeclined] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCookieConsent(true);
    }, 2000); // Affiche le composant après 2 secondes

    return () => clearTimeout(timer); // Nettoyage du timer
  }, []);

  const handleAcceptCookies = () => {
    setCookieAccepted(true);
    setShowCookieConsent(false);
    // Logique pour accepter les cookies
  };

  const handleDeclineCookies = () => {
    setCookieDeclined(true);
    setShowCookieConsent(false);
    // Logique pour refuser les cookies
  };

  return (
    <div>
      {!cookieAccepted && !cookieDeclined && showCookieConsent && (
        <div className="fixed bottom-0 left-0 w-full p-4 md:p-8 bg-white border-t-4 border-[#79CE25] shadow-lg transition-transform duration-500 ease-in-out" style={{ backgroundColor: "#FFFFFF" }}>
          <div className="cky-notice">
            <p className="cky-title font-bold text-lg mb-2" role="heading" aria-level={1} style={{ color: "#012737" }}>
              Nous accordons de l&apos;importance à votre vie privée
            </p>
            <div className="cky-notice-group">
              <div className="cky-notice-des text-gray-800" style={{ color: "#012737" }}>
                <p>
                  Nous utilisons des cookies pour améliorer votre expérience de navigation, diffuser des annonces ou du contenu personnalisé et analyser notre trafic. En cliquant sur Accepter Tout, vous consentez à notre utilisation des cookies. Pour en savoir plus, consultez notre {" "}
                  <a href="/cookies" className="cky-policy underline text-[#79CE25]" aria-label="Cookie Policy" target="_blank" rel="noopener noreferrer">
                    Politique de cookie
                  </a>.
                </p>
              </div>
              <div className="cky-notice-btn-wrapper mt-4 flex gap-2">
                <button className="cky-btn cky-btn-customize transition ease-in-out duration-300 hover:bg-gray-300 border-2 border-[#79CE25] text-[#79CE25] px-4 py-2 rounded-md" aria-label="Decline Cookies" onClick={handleDeclineCookies}>
                  Refuser
                </button>
                <button className="cky-btn cky-btn-accept transition ease-in-out duration-300 hover:bg-[#79CE25] hover:text-white border-2 border-[#79CE25] bg-[#79CE25] text-white px-4 py-2 rounded-md" aria-label="Accept All Cookies" onClick={handleAcceptCookies}>
                  Accepter
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cookies;
