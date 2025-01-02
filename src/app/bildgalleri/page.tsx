import Image from "next/image"
import bildgalleriFlower from "../../../public/flowers/8.png"

export default function BildgalleriPage() {
  return (
    <>
      <Image
        src={bildgalleriFlower}
        alt="Blomma"
        className="absolute bottom-0 opacity-35 left-1/2 -translate-x-1/2"
      />
      <div className="container-wrapper">
        <div className="container flex flex-col space-y-8 justify-center items-center max-w-2xl">
          <p className="text-6xl font-bold">Bildgalleri</p>
        </div>
      </div>
    </>
  )
}
