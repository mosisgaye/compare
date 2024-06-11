import Footer from '@/components/layouts/Footer'
import Navbar from '@/components/layouts/Navbar'


export default async function LobbyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex-grow">{children}</div>
      <Footer />
    </div>
  )
}

