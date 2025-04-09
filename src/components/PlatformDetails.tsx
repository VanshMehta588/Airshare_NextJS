"use client";

import { useState } from "react";
import { Container, Nav, Card, Row, Col } from "react-bootstrap";
import { Star, StarHalf } from "lucide-react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

type PlatformId = "ios" | "web" | "android";

type PlatformDetails = {
    requirements: string;
    rating: number;
    whatsnew: string[];
};

export default function PlatformDetails() {
    const [activePlatform, setActivePlatform] = useState<PlatformId>("ios");

    const platforms = [
        { id: "ios", name: "iOS" },
        { id: "web", name: "Web" },
        { id: "android", name: "Android" },
    ];

    const platformDetails: Record<PlatformId, PlatformDetails> = {
        ios: {
            requirements: "iOS 11 or higher",
            rating: 4,
            whatsnew: ["New iOS features as a receiving screen.", "Other bug fixes and improvements have been made."],
        },
        web: {
            requirements: "Modern browsers",
            rating: 5,
            whatsnew: ["Enhanced web compatibility", "Performance improvements"],
        },
        android: {
            requirements: "Android 6.0+",
            rating: 3,
            whatsnew: ["New Android features", "Stability improvements"],
        },
    };

    const renderStars = (rating: number) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;

        for (let i = 0; i < fullStars; i++) {
            stars.push(<Star key={`star-${i}`} className="font-1" fill="currentColor" size={24} />);
        }

        if (hasHalfStar) {
            stars.push(<StarHalf key="star-half" className="font-1" fill="currentColor" size={24} />);
        }

        const remainingStars = 5 - Math.ceil(rating);
        for (let i = 0; i < remainingStars; i++) {
            stars.push(<Star key={`star-empty-${i}`} className="text-muted" size={24} />);
        }

        return stars;
    };

    useGSAP(() => {
        const tabContent = document.querySelector(".tab-content");

        if (tabContent) {
            gsap.from(tabContent, {
                duration: 1,
                opacity: 0,
            });
        }
    }, [activePlatform]);

    return (
        <Container className="py-4">
            <Nav
                className="justify-content-center mb-4"
                variant="pills"
                activeKey={activePlatform}
                onSelect={(k) => setActivePlatform(k as PlatformId)}
            >
                {platforms.map((platform) => (
                    <Nav.Item key={platform.id}>
                        <Nav.Link
                            eventKey={platform.id}
                            className={`px-5 py-3  ${activePlatform === platform.id ? "bg-darkblue text-white" : "font-2"
                                }`}
                            data-cursor-text={`${platform.name}`}
                        >
                            {platform.name}
                        </Nav.Link>
                    </Nav.Item>
                ))}
            </Nav>

            <Card className="border rounded-4 shadow-sm">
                <Card.Body className="p-4">
                    <Row>
                        <Col md={4} className="py-2 text-center">
                            <h3 className="h5 mb-3 font-1">System Requirements</h3>
                            <p className="font-2 mb-0">{platformDetails[activePlatform].requirements}</p>
                        </Col>
                        <Col md={4} className="py-2 text-center">
                            <h3 className="h5 mb-3 font-1">Rating</h3>
                            <div className="d-flex gap-1 justify-content-center">
                                {renderStars(platformDetails[activePlatform].rating)}
                            </div>
                        </Col>
                        <Col md={4} className="py-2 text-center">
                            <h3 className="h5 mb-3 font-1">What&apos;s new:</h3>
                            <ol className="font-2 mb-0">
                                {platformDetails[activePlatform].whatsnew.map((item, index) => (
                                    <li key={index} className="mb-2">
                                        {item}
                                    </li>
                                ))}
                            </ol>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    );
}
