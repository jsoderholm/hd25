import FlowerGrid from "@/components/flower-grid"
import {
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import { PageHeader } from "@/components/page-header"
import Image from "next/image"
import backgroundFlower from "../../public/flowers/5.png"
import hd from "../../public/hd1.jpeg"
import hd2 from "../../public/hd2.jpeg"

export default function Home() {
  return (
    <>
      <Image
        src={backgroundFlower}
        alt="Blomma"
        className="absolute bottom-2 right-2 w-2/5 opacity-35"
      />
      <div className="m-auto container-wrapper">
        <div className="grid container items-center gap-8 sm:grid-cols-2">
          <div className="grid grid-cols-2 gap-8 rounded-md">
            <div className="rounded-md overflow-hidden aspect-square">
              <Image
                src={hd}
                alt="Hanna & David"
                className="object-cover aspect-square"
              />
            </div>
            <div className="rounded-md overflow-hidden aspect-square">
              <Image
                src={hd2}
                alt="Hanna & David"
                className="object-cover aspect-square"
              />
            </div>
          </div>
          <PageHeader className="z-10">
            <PageHeaderHeading>Hanna & David</PageHeaderHeading>
            <PageHeaderHeading>26/7/25</PageHeaderHeading>
            <PageHeaderDescription>
              Dolore ullamco culpa dolor duis deserunt est nulla culpa non ex
              aute do elit pariatur. Duis consequat sit id dolore.
            </PageHeaderDescription>
          </PageHeader>
          <FlowerGrid />
        </div>
      </div>
    </>
  )
}
