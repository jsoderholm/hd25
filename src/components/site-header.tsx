"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import MobileNav from "./mobile-nav"

export function SiteHeader() {
  const pathname = usePathname()
  const isActive = (path: string) => pathname === path

  return (
    <header className="border-grid sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-wrapper">
        <div className="container flex h-14 items-center justify-between">
          <MobileNav />
          <Link href="/" className="md:block hidden text-2xl font-medium">
            Hanna & David
          </Link>
          <div className="gap-6 hidden md:flex items-center text-lg">
            <Link
              href="/osa"
              className={cn(
                "text-lg transition-colors hover:text-foreground hover:bg-wedding-green/20 py-1 px-2 rounded-md",
                isActive("/osa") && "bg-wedding-green/20",
              )}
            >
              OSA
            </Link>
            <Link
              href="/info"
              className={cn(
                "text-lg transition-colors hover:bg-wedding-green/20 py-1 px-2 rounded-md",
                isActive("/info") && "bg-wedding-green/20",
              )}
            >
              Viktig Information
            </Link>
            <Link
              href="/boende"
              className={cn(
                "text-lg transition-colors hover:text-foreground hover:bg-wedding-green/20 py-1 px-2 rounded-md",
                isActive("/boende") && "bg-wedding-green/20",
              )}
            >
              Boende
            </Link>
            <Link
              href="/kontakt"
              className={cn(
                "text-lg transition-colors hover:text-foreground hover:bg-wedding-green/20 py-1 px-2 rounded-md",
                isActive("/kontakt") && "bg-wedding-green/20",
              )}
            >
              Kontakt
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
