'use client'
import { useEffect } from 'react';

const ZendeskWidget: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.id = 'ze-snippet';
    script.src = 'https://static.zdassets.com/ekr/snippet.js?key=463befef-4ebc-4dc1-b0dd-f5660101bb32';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      if (script) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return null;
};

export default ZendeskWidget;
