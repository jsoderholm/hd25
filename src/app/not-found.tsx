"use client"

import Description from "@/components/description"
import Title from "@/components/title"
import Link from "next/link"

export default function NotFoundComponent() {
  return (
    <div className="container my-auto">
      <Title className="mb-2 md:mb-8">Något gick fel.</Title>
      <Description>
        Sidan du letar efter finns inte. Tryck
        <Link href="/" className="underline font-bold mx-1">
          här
        </Link>
        för att gå till startsidan.
      </Description>
    </div>
  )
}
