"use client"

import { Container } from "react-bootstrap"
import Image from "next/image"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import airsharetutorial from "@/assets/airshare_tutorial.svg"

gsap.registerPlugin(ScrollTrigger)

export default function Tutorial() {
  useGSAP(() => {
    gsap.from(".tutorial img", {
      duration: 2,
      opacity: 0,
      x: 0,
      scrollTrigger: {
        trigger: ".tutorial",
        end: "top 30%",
        scrub: true,
      },
    })
  })

  return (
    <Container fluid className="text-center py-1 font-1 tutorial" data-cursor-text="Tutorial">
      <h2 className="h4 mb-4 fw-bold" data-cursor="-lg">
        Tutorial <i className="bi bi-arrow-right"></i>
      </h2>
      <div className="position-relative">
        <Image
          src={airsharetutorial || "/placeholder.svg"}
          alt="Tutorial Devices"
          className="img-fluid"
          width={800}
          height={400}
        />
      </div>
    </Container>
  )
}

