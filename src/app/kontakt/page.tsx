import BackgroundFlower from "@/components/background-flower"
import Description from "@/components/description"
import { InfoCard } from "@/components/info-card"
import Title from "@/components/title"
import kontaktFlower from "../../../public/flowers/kontakt.webp"

export default function ContactPage() {
  return (
    <>
      <BackgroundFlower src={kontaktFlower} />
      <div className="container">
        <Title className="mb-2 md:mb-8">Kontakt</Title>
        <Description>
          Vill ni hålla tal? Kontakta toastmasters. Vill ni sjunga en trudelutt?
          Kontakta toastmasters. Vill ni att en rolig visa klistras in i
          bröllopshäftet? Kontakta toastmasters.
        </Description>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <InfoCard
            title="Rebecka Angerbjörn"
            items={["rebeckaangerbjorn@gmail.com"]}
            footer={
              <a
                href="mailto:rebeckaangerbjorn@gmail.com"
                className="underline block"
              >
                rebeckaangerbjorn@gmail.com
              </a>
            }
          >
            <p>
              En god vän till både Hanna och David. Nämndsekreterare by day,
              stand-up komiker by night. Född och uppvuxen i Uppsala men med
              starka kopplingar till “Norrland”. En av de tre inofficiella
              brudtärnorna.
            </p>
          </InfoCard>

          <InfoCard
            title="Filip Rosengren"
            items={["filip-rosengren@hotmail.com"]}
            footer={
              <a
                href="mailto:filip-rosengren@hotmail.com"
                className="underline block"
              >
                filip-rosengren@hotmail.com
              </a>
            }
          >
            <p>
              En god vän till både David och Hanna. En av alla lärare här, grym
              på BJ, Davids bästa sambo någonsin. En av de fyra inofficiella
              marskalkerna.
            </p>
          </InfoCard>
        </div>
      </div>
    </>
  )
}
