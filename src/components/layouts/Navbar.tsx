'use client'

import type { User } from 'next-auth'

import DesktopNav from '@/components/layouts/DesktopNav'
import MobileNav from '@/components/layouts/MobileNav'


interface NavbarProps {
  user?: User & {
    id: string
  }
}

const Navbar: React.FC<NavbarProps> = ({ user }) => {
  return (
    <header>
      
        {/* Left */}
        <MobileNav />
        <DesktopNav />

      
      
    </header>
  )
}

export default Navbar
