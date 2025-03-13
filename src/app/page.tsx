"use client"

import BackgroundFlower from "@/components/background-flower"
import Description from "@/components/description"
import Title from "@/components/title"
import { motion } from "motion/react"
import Image from "next/image"
import rootFlower from "../../public/flowers/root.webp"
import hd from "../../public/hd.webp"

export default function Home() {
  return (
    <>
      <BackgroundFlower src={rootFlower} className="left-1/2 -bottom-10" />
      <div className="grid lg:grid-cols-2 gap-10 px-10 place-items-center mt-20 md:my-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="hidden lg:block"
        >
          <Image
            src={hd}
            alt="Hanna & David"
            className=" rounded-xl max-h-[32rem] object-cover"
            priority
          />
        </motion.div>
        <div className="z-10">
          <Title className="md:mb-8 lg:text-7xl">
            Hanna & David <br /> 26/7/25
          </Title>
          <Description className="mb-0 md:mb-0">
            Som ni kanske förstår så är det faktiskt på riktigt, vi ska gifta
            oss! Här på hemsidan hittar du viktig information, kontaktuppgifter
            samt ett svarsformulär (O.S.A). Välkomna på vårt bröllop!
          </Description>
        </div>
      </div>
    </>
  )
}
