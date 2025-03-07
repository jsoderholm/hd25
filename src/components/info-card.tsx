import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface InfoCardProps extends React.ComponentProps<typeof Card> {
  title: string
  items?: string[]
  footer?: React.ReactNode
  children: React.ReactNode
}

export function InfoCard({
  title,
  items = [],
  footer,
  children,
  className,
  ...props
}: InfoCardProps) {
  return (
    <Card
      className={cn(
        "bg-wedding-card flex flex-col z-10 border-wedding-sand",
        className,
      )}
      {...props}
    >
      <CardHeader className="space-y-4">
        <CardTitle>{title}</CardTitle>
        <div className="flex flex-wrap items-center gap-4">
          {items.map((i) => (
            <InfoBadge key={i}>{i}</InfoBadge>
          ))}
        </div>
      </CardHeader>
      <CardContent className="flex-1 text-lg">
        <div className="space-y-4">{children}</div>
      </CardContent>
      {footer && <CardFooter className="text-lg">{footer}</CardFooter>}
    </Card>
  )
}

interface InfoBadgeProps extends React.ComponentProps<typeof Badge> {
  children: React.ReactNode
}

function InfoBadge({ children, className, ...props }: InfoBadgeProps) {
  return (
    <Badge
      className={cn(
        "bg-wedding-sand pointer-events-none text-wedding-olive text-base font-bold rounded-lg",
        className,
      )}
      {...props}
    >
      {children}
    </Badge>
  )
}
