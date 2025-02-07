"use client"

import { Container, Row, Col, Button } from "react-bootstrap"
import Image from "next/image"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { BlurText } from "@/hooks/BlurText"
import logo from "@/assets/airshare_logo.svg"
import googleplay from "@/assets/airshare_logo_googleplay.svg"
import appstore from "@/assets/airshare_logo_appstore.svg"

export default function Hero() {
  useGSAP(() => {
    gsap.from(".herologo", {
      duration: 1,
      opacity: 0,
      scale: 0,
    })

    gsap.from(".text", {
      y: 100,
      opacity: 0,
      duration: 1.5,
    })
  })

  return (
    <Container fluid className="text-center">
      <Row className="justify-content-center">
        <Col md={8}>
          <Image
            src={logo || "/placeholder.svg"}
            data-cursor-text="Drop Files"
            alt="Drop Files Logo Large"
            className="mb-4 d-none d-lg-inline herologo"
            height={100}
            width={300}
          />
          <BlurText
            text="Fast, Offline File Sharing & Screen Pairing—All In One Place"
            className="custom-class display-4 fw-bold mb-4 font-1 text"
            delay={50}
          />
          <p className="lead mb-5 font-2 text">
            Say Goodbye To Slow Transfers And Connectivity Issues. With Drop Files Air Drop Share, You Can Transfer
            Files, Share Apps, And Mirror Your Screen Effortlessly, Anytime, Anywhere.
          </p>
          <div className="d-flex justify-content-center gap-0 gap-md-5">
            <Button variant="" className="d-flex align-items-center hero-button" data-cursor-text="Apple">
              <Image
                src={appstore || "/placeholder.svg"}
                alt="App Store"
                className="img-fluid"
                width={200}
                height={60}
              />
            </Button>
            <Button variant="" className="d-flex align-items-center hero-button" data-cursor-text="Android">
              <Image
                src={googleplay || "/placeholder.svg"}
                alt="Google Play"
                className="img-fluid"
                width={200}
                height={60}
              />
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

