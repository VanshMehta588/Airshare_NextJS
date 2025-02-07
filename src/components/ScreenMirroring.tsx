"use client"

import { useState } from "react"
import { Container, Nav, Row, Col } from "react-bootstrap"
import Image from "next/image"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import Screenmirror from "@/assets/airshare_screen_mirroring.svg"

type TabId = "collaborative" | "meeting" | "teaching" | "entertainment"

type TabContent = {
  title: string
  description: string
  image: string
}

export default function ScreenMirroringTabs() {
  const [activeTab, setActiveTab] = useState<TabId>("collaborative")

  const tabs = [
    { id: "collaborative", label: "Collaborative Work", data: "Collab" },
    { id: "meeting", label: "Meeting", data: "Meeting" },
    { id: "teaching", label: "Teaching", data: "Teaching" },
    { id: "entertainment", label: "Entertainment", data: "Entertain" },
  ]

  const content: Record<TabId, TabContent> = {
    collaborative: {
      title: "Increase Productivity In Any Collaboration",
      description:
        "Whether You are Introducing A New Mobile App, Demonstrating New Features, Or Working Between Your Computer And Mobile Devices, Our App Only Requires One Quick Tap To Showcase Different Screens, Instantly Boosting Your Productivity!",
      image: Screenmirror,
    },
    meeting: {
      title: "Enhance Your Virtual Meetings",
      description:
        "Share your screen seamlessly during meetings, making it easier to present ideas and collaborate with team members remotely.",
      image: Screenmirror,
    },
    teaching: {
      title: "Improve Learning Experience",
      description:
        "Make teaching more interactive by sharing educational content directly from your device to students screens.",
      image: Screenmirror,
    },
    entertainment: {
      title: "Enjoy Content on Any Screen",
      description:
        "Stream your favorite content from your mobile device to larger screens for a better viewing experience.",
      image: Screenmirror,
    },
  }

  useGSAP(() => {
    const container = document.querySelector(".tab-content")
    if (container) {
      gsap.fromTo(
        container,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: container,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      )
    }
  }, [activeTab])

  return (
    <Container className="py-5">
      <h1 className="text-center h2 mb-4 fw-bold font-1">Screen Mirroring With Audio In Various Cases</h1>

      <Nav className="justify-content-center mb-5 " variant="underline">
        {tabs.map((tab) => (
          <Nav.Item key={tab.id}>
            <Nav.Link
              active={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id as TabId)}
              className={`px-md-4 py-md-3 ${activeTab === tab.id ? "font-1" : "font-2"}`}
              data-cursor-text={`${tab.data}`}
            >
              {tab.label}
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>

      <Row className="align-items-center text-center text-md-start tab-content">
        <Col lg={6} className="mb-4 mb-lg-0">
          <h2 className="h4 mb-4 fw-bold font-1">{content[activeTab].title}</h2>
          <p className="font-2 w-100" style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
            {content[activeTab].description}
          </p>
        </Col>
        <Col lg={6}>
          <Image
            src={content[activeTab].image || "/placeholder.svg"}
            alt={content[activeTab].title}
            className="img-fluid rounded-3 shadow-sm"
            width={500}
            height={300}
          />
        </Col>
      </Row>
    </Container>
  )
}

