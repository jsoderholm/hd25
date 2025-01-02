import { siteConfig } from "@/config/site"
import { Copyright } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-grid border-t py-6 md:px-8 md:py-0">
      <div className="container-wrapper">
        <div className="flex items-center justify-between container py-4">
          <div className="flex items-center text-muted-foreground gap-2">
            <Copyright className="size-3" />
            <p className="text-sm text-balance leading-loose">
              {siteConfig.name} 2025
            </p>
          </div>
          <div className="flex items-center gap-3 text-muted-foreground text-sm leading-loose text-balance">
            <a
              href={siteConfig.url}
              target="_blank"
              rel="noreferrer"
              className="font-medium hover:underline underline-offset-4"
            >
              Användarvillkor
            </a>
            <a
              href={siteConfig.url}
              target="_blank"
              rel="noreferrer"
              className="font-medium  hover:underline underline-offset-4"
            >
              Integritetspolicy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
