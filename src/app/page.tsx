import BackgroundFlower from "@/components/background-flower"
import Description from "@/components/description"
import Title from "@/components/title"
import rootFlower from "../../public/flowers/root.webp"

export default function Home() {
  return (
    <>
      <BackgroundFlower src={rootFlower} className="left-1/2 -bottom-10" />
      <div className="container">
        <Title className="mb-2 md:mb-8">
          Hanna & David <br /> 26/7/25
        </Title>
        <Description>
          Som ni kanske förstår så är det faktiskt på riktigt, vi ska gifta oss!
          Här på hemsidan hittar du viktig information, kontaktuppgifter samt
          ett svarsformulär (O.S.A). Välkomna på vårt bröllop!
        </Description>
      </div>
    </>
  )
}
