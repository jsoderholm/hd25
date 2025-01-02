"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function SiteHeader() {
  const pathname = usePathname()
  const isActive = (path: string) => pathname === path

  return (
    <header className="border-grid sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-wrapper">
        <div className="container flex h-14 items-center justify-between">
          <Link href="/" className="text-2xl font-medium">
            Hanna & David
          </Link>
          <div className="flex gap-8 items-center text-lg">
            <Link
              href="/osa"
              className={cn(
                "text-lg transition-colors hover:text-foreground text-foreground/80",
                isActive("/osa") && "text-foreground",
              )}
            >
              OSA
            </Link>
            <Link
              href="/info"
              className={cn(
                "transition-colors hover:text-foreground/80 text-foreground/80",
              )}
            >
              Viktig Information
            </Link>
            <Link
              href="/boende"
              className={cn(
                "transition-colors hover:text-foreground/80 text-foreground/80",
              )}
            >
              Boende
            </Link>
            <Link
              href="/kontakt"
              className={cn(
                "transition-colors hover:text-foreground/80 text-foreground/80",
              )}
            >
              Kontakt
            </Link>
            <Link
              href="/bildgalleri"
              className={cn(
                "transition-colors hover:text-foreground/80 text-foreground/80",
              )}
            >
              Bildgalleri
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
