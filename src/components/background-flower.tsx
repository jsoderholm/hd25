"use client"

import { useMediaQuery } from "@/hooks/use-media-query"
import { cn } from "@/lib/utils"
import { motion } from "motion/react"
import Image, { type StaticImageData } from "next/image"

interface BackgroundFlowerProps extends React.HTMLAttributes<HTMLImageElement> {
  src: StaticImageData
}

function BackgroundFlower({ src, className, ...props }: BackgroundFlowerProps) {
  const isMobile = useMediaQuery("(max-width: 768px)")

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Image
        src={src}
        alt="Blomma"
        className={cn(
          "absolute bottom-2 left-2 w-2/5 opacity-15",
          isMobile ? "left-1/2 bottom-6 transform -translate-x-1/2 w-2/3" : "",
          className,
        )}
        priority
        {...props}
      />
    </motion.div>
  )
}

export default BackgroundFlower
