import BackgroundFlower from "@/components/background-flower"
import Description from "@/components/description"
import Title from "@/components/title"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import boendeFlower from "../../../public/flowers/boende.webp"

export default function AccomodationPage() {
  return (
    <>
      <BackgroundFlower src={boendeFlower} />
      <div className="container">
        <Title className="mb-2 md:mb-8">Var ska jag bo?</Title>
        <Description>
          Många av er reser långväga för att komma till bröllopet och kan därför
          behöva någonstans att sova några nätter. Här hittar ni länkar till
          boenden i olika prisklasser och lägen.
        </Description>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-wedding-card flex flex-col z-10 border-wedding-sand">
            <CardHeader>
              <CardTitle>Boende nära kyrkan</CardTitle>
            </CardHeader>
            <CardContent className="text-lg flex-1">
              <ul>
                <li className="font-semibold">
                  Gammelstads Gästhem:
                  <span className="ml-1 font-normal">
                    Gångavstånd till kyrkan/festen, prisvärt i fin omgivning.
                  </span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <p className="text-lg">
                Mer information finns
                <a
                  href="https://gammelstadsgasthem.se/"
                  className="underline font-medium ml-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  här
                </a>
                .
              </p>
            </CardFooter>
          </Card>
          <Card className="bg-wedding-card flex flex-col z-10 border-wedding-sand">
            <CardHeader>
              <CardTitle>Boende vid älven</CardTitle>
            </CardHeader>
            <CardContent className="text-lg flex-1">
              <ul>
                <li className="font-semibold">
                  Örnviken Hotell:
                  <span className="ml-1 font-normal">
                    Längre bort men vackert beläget. Finns flera olika
                    boendetyper. Här firade Hannas föräldrar sin bröllopsdag
                    1994.
                  </span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <p className="text-lg">
                Mer information finns
                <a
                  href="https://www.ornviken.se/"
                  className="underline font-medium ml-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  här
                </a>
                .
              </p>
            </CardFooter>
          </Card>
          <Card className="bg-wedding-card z-10 border-wedding-sand">
            <CardHeader>
              <CardTitle>Hotell i centrala Luleå</CardTitle>
            </CardHeader>
            <CardContent className="text-lg">
              <ul className="space-y-4">
                <li className="font-semibold">
                  Stadshotellet:
                  <span className="ml-1 font-normal">
                    I detta hotells vackra salar hålls enligt tradition stadens
                    studentbal. Mer information finns
                    <a
                      href="https://www.elite.se/hotell/lulea/elite-stadshotellet-lulea/"
                      className="underline font-medium ml-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      här
                    </a>
                    .
                  </span>
                </li>
                <li className="font-semibold">
                  Clarion Sense:
                  <span className="ml-1 font-normal">
                    Hotellet med stans bästa utsikt? God frukost och en fin
                    spaavdelning. Mer information finns
                    <a
                      href="https://www.strawberry.se/hotell/sverige/lulea/clarion-hotel-sense/"
                      className="underline font-medium ml-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      här
                    </a>
                    .
                  </span>
                </li>
                <li className="font-semibold">
                  Scandic Luleå:
                  <span className="ml-1 font-normal">
                    Hotellet ligger mellan Luleå city och Gammelstad.
                    Busshållplats finns nära som tar en till Gammelstad. Mer
                    information finns
                    <a
                      href="https://www.scandichotels.se/hotell/sverige/lulea/scandic-lulea"
                      className="underline font-medium ml-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      här
                    </a>
                    .
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}
