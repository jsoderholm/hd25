"use client"

import BackgroundFlower from "@/components/background-flower"
import Title from "@/components/title"
import bildgalleriFlower from "../../../public/flowers/8.webp"

export default function BildgalleriPage() {
  return (
    <div className="container-wrapper">
      <div className="container flex flex-col space-y-8 justify-center items-center max-w-2xl">
        <BackgroundFlower src={bildgalleriFlower} className="w-full bottom-0" />
        <Title>Bildgalleri</Title>
      </div>
    </div>
  )
}
