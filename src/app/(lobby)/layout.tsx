import Footer from '@/components/layouts/Footer'
import Navbar from '@/components/layouts/Navbar'


export default async function LobbyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='dark:bg-[#012737]'>
      <Navbar />
      <div>{children}</div>
     
      <Footer />
    </div>
   
  )
}

