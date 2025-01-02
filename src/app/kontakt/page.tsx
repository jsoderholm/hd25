import Image from "next/image"
import kontaktFlower from "../../../public/flowers/1.png"

export default function ContactPage() {
  return (
    <>
      <Image
        src={kontaktFlower}
        alt="Blomma"
        className="absolute bottom-4 left-4 w-2/5 opacity-35"
      />
      <div className="container-wrapper">
        <div className="container flex flex-col space-y-8 justify-center items-center max-w-2xl">
          <p className="text-6xl font-bold">Kontakt</p>
        </div>
      </div>
    </>
  )
}
