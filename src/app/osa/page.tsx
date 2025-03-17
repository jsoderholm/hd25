import BackgroundFlower from "@/components/background-flower"
import Description from "@/components/description"
import Title from "@/components/title"
import osaFlower from "../../../public/flowers/osa.webp"

export default function OsaPage() {
  return (
    <>
      <BackgroundFlower src={osaFlower} />
      <div className="container">
        <Title className="mb-0 md:mb-8">OSA</Title>
        <Description>
          Följ länken nedan till Google-formuläret för att besvara inbjudan.
        </Description>
        <div className="grid items-center place-items-center gap-8 md:gap-16">
          <ul className="z-10 space-y-2 list-disc text-lg md:text-xl">
            <li>Varje enskild gäst måste fylla i sitt eget formulär.</li>
            <li>
              Svar anbehålles <span className="font-bold">senast 31 maj</span>,
              men gärna tidigare.
            </li>
            <li>
              Enbart personer som fått en personlig inbjudan med sitt namn på
              kuvertet bör svara.
            </li>
            <li>
              Alltså kan ni tyvärr <span className="font-bold">inte</span> inte
              ta med exempelvis en partner om hen inte är skriftligen inbjuden.
            </li>
          </ul>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeZL-VDGDh-7PmT0ObMl3AIZ_tJ-NW5lOof2R_2kEzfqxiA5g/viewform?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="text-xl md:text-2xl z-10 font-semibold hover:underline underline-offset-4 text-center"
          >
            Klicka här för att komma till formuläret!
          </a>
        </div>
      </div>
    </>
  )
}
