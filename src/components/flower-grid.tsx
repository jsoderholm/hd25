"use client"

import { useMediaQuery } from "@/hooks/use-media-query"
import { cn } from "@/lib/utils"
import kontaktFlower from "../../public/flowers/1.webp"
import osaFlower from "../../public/flowers/2.webp"
import infoFlower from "../../public/flowers/3.webp"
import boendeFlower from "../../public/flowers/4.webp"
import bildgalleriFlower from "../../public/flowers/8.webp"
import FlowerNav from "./flower-nav"

function FlowerGrid({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const isMobile = useMediaQuery("(max-width: 768px)")

  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 col-span-2 gap-6 sm:gap-8 text-center rounded-md",
        className,
      )}
      {...props}
    >
      <FlowerNav
        src={osaFlower}
        title="OSA"
        href="/osa"
        className="transition-transform duration-300 hover:scale-105"
      />
      <FlowerNav
        src={infoFlower}
        title="Viktig Info"
        href="/info"
        className="transition-transform duration-300 hover:scale-105"
      />
      <FlowerNav
        src={boendeFlower}
        title="Boende"
        href="/boende"
        className="transition-transform duration-300 hover:scale-105"
      />
      <FlowerNav
        src={kontaktFlower}
        title="Kontakt"
        href="/kontakt"
        className="transition-transform duration-300 hover:scale-105"
      />
      {isMobile && (
        <FlowerNav
          src={bildgalleriFlower}
          title="Bildgalleri"
          href="/bildgalleri"
          className="transition-transform duration-300 hover:scale-105"
          imgClassName="left-1/2 -translate-x-2/3"
        />
      )}
    </div>
  )
}

export default FlowerGrid
