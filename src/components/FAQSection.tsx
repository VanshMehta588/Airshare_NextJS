"use client"

import { useState } from "react"
import { Container, Nav, Accordion } from "react-bootstrap"
import { Plus, X } from "lucide-react"

type Faq = {
  question: string
  answer: string
}

type HotTopic = {
  topic: string
  details: string
}

export default function FAQSection() {
  const [activeTab, setActiveTab] = useState<"faqs" | "topics">("faqs")
  const [activeAccordionKey, setActiveAccordionKey] = useState<string>("0")

  const faqs: Faq[] = [
    {
      question: "How can I screen mirror under different WiFi?",
      answer:
        "With premium account, you can easily screen mirror your device with local network to another. Remote screen mirroring feature of AirDroid will allow you to screen mirror devices which are not under the same internet.",
    },
    {
      question: "How many devices can I sign in at the same time?",
      answer:
        "You can sign in up to 3 devices simultaneously with a standard account. Premium users get unlimited device connections.",
    },
    {
      question: "Can I use the remote network for screen sharing with a free account?",
      answer:
        "Remote network screen sharing is a premium feature. Free accounts can only use screen sharing on the same network.",
    },
    {
      question: "Do AirDroid Cast and Cast Web have the same features?",
      answer:
        "While both share core functionalities, Cast Web has some limitations compared to the desktop application.",
    },
    {
      question: "Is AirDroid Cast safe?",
      answer: "Yes, AirDroid Cast uses encrypted connections and requires explicit permission for screen sharing.",
    },
  ]

  const hotTopics: HotTopic[] = [
    {
      topic: "Latest Security Update for AirDroid",
      details: "The latest update focuses on enhancing encryption standards and improving data privacy features.",
    },
    {
      topic: "AirDroid Premium Features Overview",
      details: "AirDroid Premium now offers remote access, more device connections, and advanced management features.",
    },
    {
      topic: "Troubleshooting Screen Mirroring Issues",
      details:
        "Learn how to troubleshoot common screen mirroring issues with AirDroid, including connectivity problems.",
    },
    {
      topic: "AirDroid Device Management Tips",
      details:
        "Get tips on managing multiple devices efficiently with AirDroid, including bulk actions and automated workflows.",
    },
    {
      topic: "AirDroid Cast vs. AirDroid Web: What's the Difference?",
      details:
        "A deep dive into the features of AirDroid Cast and AirDroid Web, highlighting the pros and cons of each.",
    },
  ]

  const dataToDisplay = activeTab === "faqs" ? faqs : hotTopics

  return (
    <Container className="py-5 py-md-4">
      <h2 className="text-center h2 mb-4 font-1 fw-bold">FAQs & Hot Topics</h2>

      <Nav
        className="justify-content-center mb-4 font-1"
        variant="underline"
        activeKey={activeTab}
        onSelect={(k: string | null) => {
          if (k === "faqs" || k === "topics") {
            setActiveTab(k)
            setActiveAccordionKey("0")
          }
        }}
      >
        <Nav.Item>
          <Nav.Link
            eventKey="faqs"
            className={`px-4 py-2 ${activeTab === "faqs" ? "font-2" : "font-2"}`}
            data-cursor-text="FAQs"
          >
            FAQs
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="topics"
            className={`px-4 py-2 ${activeTab === "topics" ? "font-1" : "font-2"}`}
            data-cursor-text="Hot Topics"
          >
            Hot Topics
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <Accordion
        className="custom-accordion"
        activeKey={activeAccordionKey}
        onSelect={(selectedKey) => setActiveAccordionKey(selectedKey as string)}
      >
        {dataToDisplay.map((item, index) => (
          <Accordion.Item key={index} eventKey={index.toString()} className="border-0 mb-3">
            <Accordion.Header>
              <div className="d-flex align-items-center w-100">
                <span className="me-3 font-1 fw-medium">
                  {activeTab === "faqs" ? (item as Faq).question : (item as HotTopic).topic}
                </span>
                <div className="ms-auto">
                  {activeAccordionKey === index.toString() ? (
                    <X className="font-1" size={20} />
                  ) : (
                    <Plus className="font-1" size={20} />
                  )}
                </div>
              </div>
            </Accordion.Header>
            <Accordion.Body className="font-2">
              {activeTab === "faqs" ? (item as Faq).answer : (item as HotTopic).details}
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </Container>
  )
}

