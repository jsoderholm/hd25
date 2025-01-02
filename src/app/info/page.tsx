import { motion } from "motion/react"
import Image from "next/image"
import infoFlower from "../../../public/flowers/3.png"

export default function InfoPage() {
  return (
    <>
      <Image
        src={infoFlower}
        alt="Blomma"
        className="absolute bottom-2 left-2 w-2/5 opacity-35"
      />
      <div className="container-wrapper">
        <div className="container flex flex-col space-y-8 justify-center items-center max-w-2xl">
          <p className="text-6xl font-bold">Viktig Information</p>
        </div>
      </div>
    </>
  )
}
