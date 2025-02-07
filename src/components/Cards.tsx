import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Card1 from "@/assets/airshare_cards_1.svg"
import Card2 from "@/assets/airshare_cards_2.svg"
import Card3 from "@/assets/airshare_cards_3.svg"
import Card4 from "@/assets/airshare_cards_4.svg"
import Card5 from "@/assets/airshare_cards_5.svg"

const actions = [
  {
    title: "File Sharing",
    data: "File Sharing",
    description: "Share Files And Important Documents Instantly With Identity Decision",
    icon: Card1,
  },
  {
    title: "Screen Pairing",
    data: "Screen Pairing",
    description: "Fast Help Collaboration Or Entertainment",
    icon: Card2,
  },
  {
    title: "File Transfer",
    data: "File Transfer",
    description: "Transfer Files Of Any Size With Lightning-Fast Speed",
    icon: Card3,
  },
  {
    title: "App Share",
    data: "App Share",
    description: "Quickly Share Android Apps For GameBooks",
    icon: Card4,
  },
  {
    title: "No Network Connection Required",
    data: "No Network Required",
    description: "Share Files And Mirror Anywhere, Even Offline",
    icon: Card5,
  },
];

export default function Cards() {
  useGSAP(() => {
    gsap.from(".cards", {
      scale: 0,
      duration: 1,
      stagger: 0.7,
      ease: "bounce.inOut",
      scrollTrigger: {
        trigger: ".card-page",
        scroller: "body",
        start: "top 60%",
        end: "top 20%",
      },
    });
  });

  return (
    <Container fluid className="pb-3 card-page">
      <Row className="g-4 justify-content-center">
        {actions.slice(0, 5).map((action, index) => (
          <Col key={index} sm={12} md={6} lg={4}>
            <Card
              className={"h-100 text-center p-4 border border-2 rounded-3 cards"}
              data-cursor-text={`${action.data}`}
            >
              <Card.Body>
                <div className="mb-3">
                  <Image
                    src={action.icon}
                    alt={`${action.title} icon`}
                    width={100}
                    height={100}
                    className="img-fluid"
                  />
                </div>
                <h3 className="h4 mb-3 font-1">{action.title}</h3>
                <p className="font-2 mb-0">{action.description}</p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <div className="text-center mt-5">
        <Button variant="" className="me-md-3 bg-darkblue text-white card-button" data-cursor-text="Download">
          Download Now
        </Button>
        <div className="d-block d-md-none">
          <br />
        </div>
        <Button variant="light" className="card-button border border-2" data-cursor-text="Learn More">
          Buy Now
        </Button>
      </div>
    </Container>
  );
}
