import BackgroundFlower from "@/components/background-flower"
import Title from "@/components/title"
import kontaktFlower from "../../../public/flowers/1.png"

export default function ContactPage() {
  return (
    <div className="container-wrapper">
      <div className="container flex flex-col space-y-8 justify-center items-center max-w-2xl">
        <BackgroundFlower src={kontaktFlower} />
        <Title>Kontakt</Title>
      </div>
    </div>
  )
}
