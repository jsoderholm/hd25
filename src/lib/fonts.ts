import { GeistMono } from "geist/font/mono"
import { GeistSans } from "geist/font/sans"
import { Cormorant, Cormorant_Garamond } from "next/font/google"

export const fontMono = GeistMono
export const fontSans = GeistSans

export const fontCormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
})
