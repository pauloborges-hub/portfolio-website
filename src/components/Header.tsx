import Link from 'next/link'

import MobileNav from './MobileNav'
//Components
import Nav from './Nav'
import { Button } from './ui/button'

function Header() {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Paulo<span className="text-[#00ff99]">.</span>dev
          </h1>
        </Link>
        {/* Desktop nav & hire me button*/}
        <div className="hidden xl:flex gap-12">
          <Nav />
          <Link href="/contact">
            <Button className="hover:cursor-pointer hover:text-[#00ff99] hover:bg-[#1c1c22] transition-all duration-500">
              Hire me
            </Button>
          </Link>
        </div>
        {/* Mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  )
}
export default Header
