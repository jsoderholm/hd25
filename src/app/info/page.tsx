import BackgroundFlower from "@/components/background-flower"
import { InfoCard } from "@/components/info-card"
import Title from "@/components/title"
import Link from "next/link"
import infoFlower from "../../../public/flowers/info.webp"

export default function InfoPage() {
  return (
    <>
      <BackgroundFlower src={infoFlower} />
      <div className="container">
        <Title>Viktig information</Title>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <InfoCard
            title="Vigselceremoni"
            items={["16:00", "Nederluleå kyrka"]}
          >
            16:00 i Nederluleå kyrka, Gammelstad. Stenkyrkan härrör från
            1400-talet och här har Hanna både döpts och konfirmerats.
          </InfoCard>
          <InfoCard
            title="Middag och fest"
            items={[
              "17:00 - 03:00",
              "Kaptensgården",
              "Häradsvägen 9, Gammelstad",
            ]}
          >
            Cirka 17:00-03:00 på Kaptensgården, Häradsvägen 9, Gammelstad.
            Lokalen är en Norrbottensgård som nu fungerar som restaurang.
            Middagen består av förrätt, varmrätt och tårta med tillhörande
            dryck. Det finns även en bemannad bar.
          </InfoCard>
          <InfoCard title="Klädkod">
            <p>
              Mörk kostym/kostym (kavaj) - en kostym helt enkelt! Såklart inga
              vita klänningar, shorts eller foppatofflor. En sådan här fest
              anordnar vi bara en gång i livet!
            </p>
            <a
              className="underline font-medium block"
              href="https://www.careofcarl.se/sv/blogg/guider/2023/05/06/hur-ska-man-kla-sig-pa-ett-brollop.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Klädkodsguide för den nyfikne.
            </a>
          </InfoCard>
          <InfoCard title="Barn?">
            Barnen är välkomna på vår vigsel, men middag och fest vill vi fira i
            vuxet sällskap. Spädbarn som fortfarande ammar är givetvis ett
            undantag.
          </InfoCard>
          <InfoCard
            title="Transport"
            items={["Buss 9 till kyrktorget", "Nattbussar till centrum"]}
          >
            <p className="font-semibold text-lg">
              Lokaltrafik:
              <span className="ml-1 font-normal">
                Bor ni i centrala Luleå kan ni ta buss 9 till hållplats
                Kyrktorget - men kom ihåg att bussar kan vara sena ibland. Sent
                på natten kommer nattbussar att gå in mot Luleå centrum från
                hållplats Stadsö centrum som ligger på cirka 20 minuters
                promenadavstånd från Kaptensgården.
              </span>
            </p>
            <p className="font-semibold text-lg">
              Bil:
              <span className="ml-1 font-normal">
                Parkering finns utanför och runt omkring Nederluleå kyrka.
                Parkera <span className="font-bold">inte</span> vid
                Kaptensgården, ytan är begränsad och behöver vara fri under
                dagen.
              </span>
            </p>
            <p className="font-semibold text-lg">
              Taxi:
              <span className="ml-1 font-normal">
                Det finns många taxitjänster att välja mellan. Vill ni ta en
                taxi under lördagsnatten, se till att ringa några timmar i
                förväg.
              </span>
            </p>
          </InfoCard>
          <InfoCard title="Tal/spex/lek/sång">
            Vill du ytterligare förgylla kvällen med något - ett tal, en sång,
            jonglering med brinnande julgranar - anmäl detta till våra
            toastmasters! Deras kontaktinformation finns under fliken
            <Link href="/kontakt" className="ml-1 font-medium">
              "Kontakt"
            </Link>
            .
          </InfoCard>
        </div>
      </div>
    </>
  )
}
