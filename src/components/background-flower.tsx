"use client"

import { useMediaQuery } from "@/hooks/use-media-query"
import { cn } from "@/lib/utils"
import Image, { type StaticImageData } from "next/image"

interface BackgroundFlowerProps extends React.HTMLAttributes<HTMLImageElement> {
  src: StaticImageData
}

function BackgroundFlower({ src, className, ...props }: BackgroundFlowerProps) {
  const isMobile = useMediaQuery("(max-width: 768px)")

  return (
    <Image
      src={src}
      alt="Blomma"
      className={cn(
        "absolute bottom-2 left-2 w-2/5 opacity-35",
        isMobile ? "left-1/2 bottom-6 transform -translate-x-1/2 w-2/3" : "",
        className,
      )}
      {...props}
    />
  )
}

export default BackgroundFlower
