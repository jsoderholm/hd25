import { cn } from "@/lib/utils"
import Image, { type StaticImageData } from "next/image"
import Link from "next/link"

interface MobileNavItemProps extends React.HTMLAttributes<HTMLDivElement> {
  src: StaticImageData
  title: string
  href: string
  handleClick: () => void
}

function MobileNavItem({
  src,
  title,
  href,
  handleClick,
  className,
}: MobileNavItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        "bg-wedding-green/20 rounded-md p-6 text-2xl font-medium flex items-center gap-4",
        className,
      )}
      onClick={handleClick}
    >
      <Image
        src={src}
        alt={title}
        className={cn("object-contain h-14 w-fit opacity-60")}
        priority
      />
      <p className="z-10 text-3xl">{title}</p>
    </Link>
  )
}

export default MobileNavItem
