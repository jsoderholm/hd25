import { cn } from "@/lib/utils"
import Image from "next/image"
import osaFlower from "../../../public/flowers/2.png"

export default function OsaPage() {
  return (
    <>
      <Image
        src={osaFlower}
        alt="Blomma"
        className="absolute bottom-2 left-2 w-2/5 opacity-35"
      />
      <div className="container-wrapper">
        <div className="container flex flex-col space-y-8 justify-center items-center max-w-2xl">
          <p className="text-6xl font-bold">OSA</p>
          <p className="text-2xl font-medium">
            Följ länken nedan till Google-formuläret och svara så noggrant du
            kan på alla frågor.
          </p>
          <ul className="flex flex-col gap-2 list-disc text-2xl">
            <li>Varje enskild gäst måste fylla i sitt eget OSA-formulär.</li>
            <li>OSA senast 25 mars.</li>
            <li>
              Enbart personer som fått en personlig inbjudan med sitt namn på
              ska OSA.
            </li>
            <li>
              Alltså, man får inte ta med t.ex en partner om hen inte är
              skriftligen inbjuden.
            </li>
          </ul>
          <a
            href="https://1177.se"
            target="_blank"
            rel="noreferrer"
            className="text-2xl font-semibold hover:underline underline-offset-4"
          >
            Klicka här för att komma till formuläret!
          </a>
        </div>
      </div>
    </>
  )
}
