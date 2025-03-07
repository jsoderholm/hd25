import BackgroundFlower from "@/components/background-flower"
import Title from "@/components/title"
import bildgalleriFlower from "../../../public/flowers/bildgalleri.webp"

export default function BildgalleriPage() {
  return (
    <>
      <BackgroundFlower src={bildgalleriFlower} className="w-full bottom-0" />
      <div className="container">
        <Title>Bildgalleri</Title>
      </div>
    </>
  )
}
