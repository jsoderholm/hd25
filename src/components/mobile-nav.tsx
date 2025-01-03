import { PanelRight } from "lucide-react"
import Link from "next/link"
import FlowerGrid from "./flower-grid"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"

function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden">
        <PanelRight />
        <span className="sr-only">Öppna meny</span>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col items-center gap-8">
        <Link href="/" className="text-2xl font-medium">
          Hanna & David
        </Link>
        <FlowerGrid className="gap-y-8 grid sm:grid-cols-1 w-full" />
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
