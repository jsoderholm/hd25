import { siteConfig } from "@/config/site"
import { fontCormorant } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import "@/styles/globals.css"
import { SiteHeader } from "@/components/site-header"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  openGraph: {
    type: "website",
    locale: "sv_SE",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-serif antialiased",
          fontCormorant.variable,
        )}
      >
        <div className="relative flex min-h-svh flex-col bg-background">
          <div className="border-grid flex flex-1 flex-col">
            <SiteHeader />
            <main className="flex flex-1 flex-col p-4 md:p-8">{children}</main>
          </div>
        </div>
      </body>
    </html>
  )
}
