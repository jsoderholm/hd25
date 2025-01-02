import {
  PageActions,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import { PageHeader } from "@/components/page-header"
import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Bike } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import hd from "../../public/hd1.jpeg"
import hd2 from "../../public/hd2.jpeg"
export default function Home() {
  return (
    <div className="m-auto container-wrapper">
      <div className="grid container sm:grid-cols-2 items-center gap-8">
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-wedding-green rounded-md aspect-square overflow-hidden">
            <Image
              src={hd}
              alt="Hanna & David"
              className="object-cover aspect-square"
            />
          </div>
          <div className="grid row-span-2 gap-8">
            <Link
              href="/osa"
              className="bg-wedding-green rounded-md p-8 text-2xl font-medium flex items-center justify-center"
            >
              OSA
            </Link>
            <Link
              href="/viktig-info"
              className="bg-wedding-green rounded-md p-8 text-2xl font-medium flex items-center justify-center"
            >
              Viktig Info
            </Link>
            <Link
              href="/boende"
              className="bg-wedding-green rounded-md p-8 text-2xl font-medium flex items-center justify-center"
            >
              Boende
            </Link>
            <Link
              href="/kontakt"
              className="bg-wedding-green rounded-md p-8 text-2xl font-medium flex items-center justify-center"
            >
              Kontakt
            </Link>
          </div>
          <div className="bg-wedding-green rounded-md aspect-square overflow-hidden">
            <Image
              src={hd2}
              alt="Hanna & David"
              className="object-cover aspect-square w-full "
            />
          </div>
        </div>
        <PageHeader>
          <PageHeaderHeading>Hanna & David</PageHeaderHeading>
          <PageHeaderHeading>26/7/25</PageHeaderHeading>
          <PageHeaderDescription>
            Dolore ullamco culpa dolor duis deserunt est nulla culpa non ex aute
            do elit pariatur. Duis consequat sit id dolore.
          </PageHeaderDescription>
        </PageHeader>
      </div>
    </div>
  )
}
