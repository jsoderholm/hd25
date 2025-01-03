import BackgroundFlower from "@/components/background-flower"
import Title from "@/components/title"
import boendeFlower from "../../../public/flowers/4.png"

export default function AccomodationPage() {
  return (
    <div className="container-wrapper">
      <div className="container flex flex-col space-y-8 justify-center items-center max-w-2xl">
        <BackgroundFlower src={boendeFlower} />
        <Title>Boende</Title>
      </div>
    </div>
  )
}
