"use client"

import { PanelRight } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import boendeFlower from "../../public/flowers/boende.webp"
import infoFlower from "../../public/flowers/info.webp"
import kontaktFlower from "../../public/flowers/kontakt.webp"
import osaFlower from "../../public/flowers/osa.webp"
import MobileNavItem from "./mobile-nav-item"
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet"

function MobileNav() {
  const [open, onOpenChange] = useState(false)

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetTrigger className="md:hidden">
        <PanelRight />
        <span className="sr-only">Öppna meny</span>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col items-center gap-8">
        <SheetHeader>
          <Link
            href="/"
            onClick={() => onOpenChange(false)}
            className="text-3xl font-medium"
          >
            Hanna & David
          </Link>
        </SheetHeader>

        <div className="flex flex-col w-full gap-6 sm:gap-8">
          <MobileNavItem
            src={osaFlower}
            title="OSA"
            href="/osa"
            handleClick={() => onOpenChange(false)}
          />
          <MobileNavItem
            src={infoFlower}
            title="Viktig Info"
            href="/info"
            handleClick={() => onOpenChange(false)}
          />
          <MobileNavItem
            src={boendeFlower}
            title="Boende"
            href="/boende"
            handleClick={() => onOpenChange(false)}
          />
          <MobileNavItem
            src={kontaktFlower}
            title="Kontakt"
            href="/kontakt"
            handleClick={() => onOpenChange(false)}
          />
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
