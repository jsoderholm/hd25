import BackgroundFlower from "@/components/background-flower"
import Description from "@/components/description"
import Title from "@/components/title"
import onskelistaFlower from "../../../public/flowers/root.webp"

export default function OnskelistaPage() {
  return (
    <>
      <BackgroundFlower src={onskelistaFlower} />
      <div className="container text-center">
        <Title className="mb-0 md:mb-8">Önskelista</Title>
        <Description>
          Det finns de som frågat oss om bröllopspresenter, så här
          tillhandahåller vi en lista för den som söker inspiration. Självklart
          uppskattar vi vadhelst är personligt och vackert, och vi är redan så
          glada att ni vill fira vår dag med oss - gåvor är givetvis inget
          måste. Hör gärna av er till Helene Söderholm, 070-5361184, om ni
          planerar att köpa något på listan. Hon har koll på vad som är
          köpt/inte köpt.
        </Description>
        <a
          href="https://docs.google.com/document/d/10Z5OhBHgSQBocCZou6N1wPdhQaHDWK6IgB7_WDJiX64/edit?tab=t.0"
          target="_blank"
          rel="noreferrer"
          className="text-xl md:text-2xl z-10 font-semibold hover:underline underline-offset-4 text-center"
        >
          Klicka här för att komma till listan!
        </a>
      </div>
    </>
  )
}
