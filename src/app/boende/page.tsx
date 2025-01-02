import Image from "next/image"
import boendeFlower from "../../../public/flowers/4.png"

export default function AccomodationPage() {
  return (
    <>
      <Image
        src={boendeFlower}
        alt="Blomma"
        className="absolute bottom-2 left-2 w-2/5 opacity-35"
      />
      <div className="container-wrapper">
        <div className="container flex flex-col space-y-8 justify-center items-center max-w-2xl">
          <p className="text-6xl font-bold">Boende</p>
        </div>
      </div>
    </>
  )
}
