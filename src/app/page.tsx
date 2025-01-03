import BackgroundFlower from "@/components/background-flower"
import FlowerGrid from "@/components/flower-grid"
import Title from "@/components/title"
import Image from "next/image"
import backgroundFlower from "../../public/flowers/5.png"
import hd from "../../public/hd1.jpeg"
import hd2 from "../../public/hd2.jpeg"

export default function Home() {
  return (
    <div className="container-wrapper">
      <div className="grid container items-center gap-y-6 sm:gap-8 grid-cols-1 lg:grid-cols-2">
        <BackgroundFlower src={backgroundFlower} />
        <div className="hidden lg:grid grid-cols-2 gap-8 rounded-md">
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
        <div className="flex flex-col items-center gap-y-6">
          <Title>
            Hanna & David <br /> 26/7/25
          </Title>
          <p className="text-center text-xl font-light max-w-[750px] text-foreground">
            Dolore ullamco culpa dolor duis deserunt est nulla culpa non ex aute
            do elit pariatur. Duis consequat sit id dolore.
          </p>
        </div>
        <FlowerGrid />
      </div>
    </div>
  )
}
