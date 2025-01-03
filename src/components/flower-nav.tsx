import { cn } from "@/lib/utils"
import Image, { type StaticImageData } from "next/image"
import Link from "next/link"

interface FlowerNavProps extends React.HTMLAttributes<HTMLDivElement> {
  src: StaticImageData
  title: string
  href: string
  imgClassName?: string
}

function FlowerNav({
  src,
  title,
  href,
  className,
  imgClassName,
}: FlowerNavProps) {
  return (
    <Link
      href={href}
      className={cn(
        "bg-wedding-green relative rounded-md p-8 text-2xl font-medium flex items-center justify-center",
        className,
      )}
    >
      <p className="z-10 text-4xl">{title}</p>
      <Image
        src={src}
        alt={title}
        className={cn(
          "object-contain h-4/5 absolute inset-x-0 -translate-x-1/4 opacity-60",
          imgClassName,
        )}
        priority
      />
    </Link>
  )
}

export default FlowerNav
