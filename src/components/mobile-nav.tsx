"use client"

import { PanelRight } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import FlowerGrid from "./flower-grid"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"

function MobileNav() {
  const [open, onOpenChange] = useState(false)

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetTrigger className="md:hidden">
        <PanelRight />
        <span className="sr-only">Öppna meny</span>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col items-center gap-8">
        <Link
          href="/"
          onClick={() => onOpenChange(false)}
          className="text-2xl font-medium"
        >
          Hanna & David
        </Link>
        <FlowerGrid
          className="gap-y-8 grid sm:grid-cols-1 w-full"
          onClick={() => onOpenChange(false)}
        />
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
