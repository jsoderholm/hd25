import kontaktFlower from "../../public/flowers/1.png"
import osaFlower from "../../public/flowers/2.png"
import infoFlower from "../../public/flowers/3.png"
import boendeFlower from "../../public/flowers/4.png"
import FlowerNav from "./flower-nav"

function FlowerGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 col-span-2 gap-8 text-center rounded-md">
      <FlowerNav
        src={osaFlower}
        title="OSA"
        href="/osa"
        className=" transition-transform duration-300 hover:scale-105"
      />
      <FlowerNav
        src={infoFlower}
        title="Viktig Info"
        href="/info"
        className=" transition-transform duration-300 hover:scale-105"
      />
      <FlowerNav
        src={boendeFlower}
        title="Boende"
        href="/boende"
        className=" transition-transform duration-300 hover:scale-105"
      />
      <FlowerNav
        src={kontaktFlower}
        title="Kontakt"
        href="/kontakt"
        className=" transition-transform duration-300 hover:scale-105"
      />
    </div>
  )
}

export default FlowerGrid
