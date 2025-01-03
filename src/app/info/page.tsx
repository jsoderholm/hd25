import BackgroundFlower from "@/components/background-flower"
import Title from "@/components/title"
import infoFlower from "../../../public/flowers/3.webp"

export default function InfoPage() {
  return (
    <div className="container-wrapper">
      <div className="flex flex-col container space-y-8 justify-center items-center max-w-2xl">
        <BackgroundFlower src={infoFlower} />
        <Title>Viktig Information</Title>
      </div>
    </div>
  )
}
