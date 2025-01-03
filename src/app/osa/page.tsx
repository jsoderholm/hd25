import BackgroundFlower from "@/components/background-flower"
import Title from "@/components/title"
import osaFlower from "../../../public/flowers/2.webp"

export default function OsaPage() {
  return (
    <div className="container-wrapper">
      <div className="flex container flex-col space-y-4 sm:space-y-8 justify-center items-center max-w-2xl">
        <BackgroundFlower src={osaFlower} />
        <Title>OSA</Title>
        <p className="text-xl font-medium">
          Följ länken nedan till Google-formuläret och svara så noggrant du kan
          på alla frågor.
        </p>
        <ul className="flex flex-col z-10 gap-2 list-disc font-medium text-xl">
          <li>Varje enskild gäst måste fylla i sitt eget OSA-formulär.</li>
          <li>
            OSA <span className="font-bold">senast 25 mars.</span>
          </li>
          <li>
            Enbart personer som fått en personlig inbjudan med sitt namn på ska
            OSA.
          </li>
          <li>
            Alltså, man får <span className="font-bold">inte</span> ta med t.ex
            en partner om hen inte är skriftligen inbjuden.
          </li>
        </ul>
        <a
          href="https://1177.se"
          target="_blank"
          rel="noreferrer"
          className="text-2xl z-10 font-semibold hover:underline underline-offset-4 text-center"
        >
          Klicka här för att komma till formuläret!
        </a>
      </div>
    </div>
  )
}
