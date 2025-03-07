"use client"

import { cn } from "@/lib/utils"
import { motion } from "motion/react"

interface TitleProps extends React.ComponentProps<typeof motion.h1> {
  children: React.ReactNode
}

function Title({ children, className, ...props }: TitleProps) {
  return (
    <motion.h1
      className={cn(
        "text-4xl md:text-6xl text-center font-semibold leading-tight tracking-tighter mb-8 md:mb-16 z-10",
        className,
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      {...props}
    >
      {children}
    </motion.h1>
  )
}

export default Title
