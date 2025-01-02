"use client"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Command } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="mr-4 hidden md:flex">
      <p className="text-2xl mr-4 lg:mr-6 font-medium">Hanna & David</p>
      <nav className="flex items-center gap-4 text-sm xl:gap-6">
        <Link
          href="/"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/" ? "text-foreground" : "text-foreground/80",
          )}
        >
          OSA
        </Link>
        <Link
          href="/about"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/about" ? "text-foreground" : "text-foreground/80",
          )}
        />
      </nav>
    </div>
  )
}
