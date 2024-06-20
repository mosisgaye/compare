// app/lobby-layout.tsx
import React from 'react';
import Footer from '@/components/layouts/Footer';
import Navbar from '@/components/layouts/Navbar';
import Script from 'next/script';

export default async function LobbyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='dark:bg-[#012737]'>
      <Navbar />
      <Script
        src="//static.klaviyo.com/onsite/js/klaviyo.js?company_id=TJWZAy"
        strategy="afterInteractive" 
      />
      <div>{children}</div>
      <Footer />
    </div>
  )
}


