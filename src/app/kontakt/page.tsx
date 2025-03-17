import BackgroundFlower from "@/components/background-flower"
import Description from "@/components/description"
import { InfoCard } from "@/components/info-card"
import Title from "@/components/title"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import filip from "../../../public/filip.webp"
import kontaktFlower from "../../../public/flowers/kontakt.webp"
import rebecka from "../../../public/rebecka.webp"

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
        <div className="grid lg:grid-cols-2 gap-8">
          <InfoCard
            title="Rebecka Angerbjörn"
            items={["rebeckaangerbjorn@gmail.com"]}
            footer={
              <Avatar className="size-48 md:size-64 mx-auto">
                <AvatarImage src={rebecka.src} className="object-cover" />
                <AvatarFallback className="text-2xl font-bold text-wedding-olive bg-wedding-green/20">
                  Rebecka Angerbjörn
                </AvatarFallback>
              </Avatar>
            }
          >
            <p>
              En god vän till både Hanna och David. Nämndsekreterare by day,
              stand-up komiker by night. Född och uppvuxen i Uppsala men med
              starka kopplingar till “Norrland”. En av de tre inofficiella
              brudtärnorna.
            </p>
            <a
              href="mailto:rebeckaangerbjorn@gmail.com"
              className="underline block"
            >
              rebeckaangerbjorn@gmail.com
            </a>
          </InfoCard>

          <InfoCard
            title="Filip Rosengren"
            items={["filip-rosengren@hotmail.com"]}
            footer={
              <Avatar className="size-48 md:size-64 mx-auto">
                <AvatarImage src={filip.src} className="object-cover" />
                <AvatarFallback className="text-2xl font-bold text-wedding-olive bg-wedding-green/20">
                  Filip Rosengren
                </AvatarFallback>
              </Avatar>
            }
          >
            <p>
              En god vän till både David och Hanna. En av alla lärare här, grym
              på BJJ, Davids bästa sambo någonsin. En av de fyra inofficiella
              marskalkerna.
            </p>
            <a
              href="mailto:filip-rosengren@hotmail.com"
              className="underline block"
            >
              filip-rosengren@hotmail.com
            </a>
          </InfoCard>
        </div>
      </div>
    </>
  )
}
