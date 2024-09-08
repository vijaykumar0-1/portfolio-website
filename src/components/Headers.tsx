import MobileNav from "./MobileNav"
import { Nav } from "./Nav"
import { Button } from "./ui/button"
import Link from "next/link"

export const Headers = () => {
  return (
    <header className="py-8 xl:py-12 text-white/80">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-4xl font-semibold">
          Vijay
          <span className="text-accent">
            .
          </span>
        </Link>
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button className="text-black/80">Hire me !</Button>
          </Link>
        </div>
        {/* Mobile Nav */}
        <div className="md:hidden mx-4">
          <MobileNav />
        </div>
      </div>
    </header>
  )
}
