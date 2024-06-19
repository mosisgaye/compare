'use client'

import React, { useEffect } from 'react';

const HubSpotForm: React.FC = () => {
  useEffect(() => {
    if (!document.querySelector(`script[src="//js-eu1.hsforms.net/forms/embed/v2.js"]`)) {
      const script = document.createElement('script');
      script.charset = 'utf-8';
      script.type = 'text/javascript';
      script.src = '//js-eu1.hsforms.net/forms/embed/v2.js';

      script.onload = () => {
        (window as any).hbspt.forms.create({
          region: 'eu1',
          portalId: '144900260',
          formId: '8dcbb52a-6416-4217-a309-a1f759a1047e',
          target: '#hubspot-form'
        });
      };

      document.body.appendChild(script);

      // Clean up script on component unmount
      return () => {
        document.body.removeChild(script);
      };
    } else {
      (window as any).hbspt.forms.create({
        region: 'eu1',
        portalId: '144900260',
        formId: '8dcbb52a-6416-4217-a309-a1f759a1047e',
        target: '#hubspot-form'
      });
    }
  }, []);

  return (
    <div id="hubspot-form" className="p-6 border-2 border-[#79CE25] bg-white rounded-lg shadow-md w-full max-w-md"></div>
  );
};

export default HubSpotForm;
