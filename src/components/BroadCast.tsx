"use client"

import { Container, Row, Col, Card } from "react-bootstrap"
import Image from "next/image"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import SpotlightCard from "@/hooks/SpotlightCard"
import Broadcast1 from "@/assets/airshare_broadcast_step_1.svg"
import Broadcast2 from "@/assets/airshare_broadcast_step_2.svg"
import Broadcast3 from "@/assets/airshare_broadcast_step_3.svg"

gsap.registerPlugin(ScrollTrigger)

export default function BroadcastSteps() {
  const steps = [
    {
      number: 1,
      title: "Installation",
      description: "Download And Install AirDroid Cast",
      icon: Broadcast1,
      steps: "step1",
    },
    {
      number: 2,
      title: "Connecting The Device",
      description: "Scan Or Enter The Digital Code To Connect The Two Devices",
      icon: Broadcast2,
      steps: "step2",
    },
    {
      number: 3,
      title: "Start Sharing",
      description: "Connect Two Devices And Start Broadcasting",
      icon: Broadcast3,
      steps: "step3",
    },
  ]

  useGSAP(() => {
    gsap.from(".step1", {
      x: -100,
      duration: 1.5,
      delay: 0.5,
      ease: "bounce.out",
      scrollTrigger: {
        trigger: ".step",
        start: "top 80%",
        end: "bottom 80%",
      },
    })

    gsap.from(".step2", {
      x: 0,
      scale: 0,
      duration: 1.5,
      delay: 0.5,
      ease: "bounce.out",
      scrollTrigger: {
        trigger: ".step",
        start: "top 80%",
        end: "bottom 80%",
      },
    })

    gsap.from(".step3", {
      x: 100,
      duration: 1.5,
      delay: 0.5,
      ease: "bounce.out",
      scrollTrigger: {
        trigger: ".step",
        start: "top 80%",
        end: "bottom 80%",
      },
    })
  })

  return (
    <Container className="py-5 step">
      <h2 className="text-center h2 mb-5 font-1 fw-bold">Simple 1-2-3 Steps To Broadcast</h2>

      <Row className="g-4 mb-4 justify-content-center">
        {steps.map((step, index) => (
          <Col key={index} sm={12} md={6} lg={4}>
            <SpotlightCard
              className={`custom-spotlight-card h-100 border shadow rounded-2 bg-light ${step.steps}`}
              data-cursor-text={`Step${step.number}`}
              spotlightColor="rgba(0, 229, 255, 0.2)"
            >
              <Card.Body className="text-center p-4">
                <Image
                  src={step.icon || "/placeholder.svg"}
                  alt={`Step ${step.number} icon`}
                  className="mb-4"
                  width={80}
                  height={80}
                />
                <h3 className="h4 mb-3 font-1">
                  Step {step.number}: {step.title}
                </h3>
                <p className="font-2 mb-0">{step.description}</p>
              </Card.Body>
            </SpotlightCard>
          </Col>
        ))}
      </Row>

      <div className="text-center">
        <a
          href="#"
          className="text-decoration-none font-1 fw-bold d-inline-flex align-items-center mt-4"
          data-cursor-text="Info"
        >
          View Detailed Guide &nbsp;<i className="bi bi-arrow-right"></i>
        </a>
      </div>
    </Container>
  )
}

