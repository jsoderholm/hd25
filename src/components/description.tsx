"use client"

import { cn } from "@/lib/utils"
import { motion } from "motion/react"

interface DescriptionProps extends React.ComponentProps<typeof motion.p> {}

function Description({ children, className, ...props }: DescriptionProps) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={cn(
        "text-lg md:text-xl text-center max-w-xl mx-auto mb-8 md:mb-16",
        className,
      )}
      {...props}
    >
      {children}
    </motion.p>
  )
}

export default Description
