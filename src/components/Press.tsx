"use client"

import { useRef } from "react"
import { Container, Col } from "react-bootstrap"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import Image from "next/image"
import "@/styles/press.css"

// Import your SVG files here
import airShareLogo1 from "@/assets/airshare_newsmedia_1.svg"
import airShareLogo2 from "@/assets/airshare_newsmedia_2.svg"
import airShareLogo3 from "@/assets/airshare_newsmedia_3.svg"
import airShareLogo4 from "@/assets/airshare_newsmedia_4.svg"
import airShareLogo5 from "@/assets/airshare_newsmedia_5.svg"
import airShareLogo6 from "@/assets/airshare_newsmedia_6.svg"

export default function Press() {
    const wrapperRef = useRef<HTMLDivElement>(null)

    const pressLogos = [
        { name: "Cult of Mac", width: 120, src: airShareLogo1 },
        { name: "Softpedia", width: 120, src: airShareLogo2 },
        { name: "MUO", width: 80, src: airShareLogo3 },
        { name: "Tech Times", width: 120, src: airShareLogo4 },
        { name: "PC World", width: 120, src: airShareLogo5 },
        { name: "BBC News", width: 80, src: airShareLogo6 },
    ]

    const allLogos = [...pressLogos, ...pressLogos]

    useGSAP(() => {
        const marqueeWrapper = wrapperRef.current
        if (!marqueeWrapper) return

const totalWidth = Array.from(marqueeWrapper.children).reduce(
    (acc, item) => acc + (item as HTMLElement).offsetWidth,
    0
)

        gsap.to(marqueeWrapper, {
            x: `-=${totalWidth / 2}`,
            duration: 20,
            ease: "none",
            repeat: -1,
            modifiers: {
                x: gsap.utils.unitize((x) => Number.parseFloat(x) % (totalWidth / 2)),
            },
        })
    }, [])

    return (
        <Container fluid className="py-2 py-md-4 bg-light w-75 w-md-100 rounded rounded-4 newsmedia shadow overflow-hidden">
            <div ref={wrapperRef} className="d-flex position-relative align-items-center marque">
                {allLogos.map((logo, index) => (
                    <Col key={index} className="text-center px-5 gap-0">
                        <Image
                            src={logo.src || "/placeholder.svg"}
                            alt={`${logo.name} Logo`}
                            className="img-fluid opacity-75 hover:opacity-100 transition-opacity"
                            width={logo.width}
                            height={60}
                        />
                    </Col>
                ))}
            </div>
        </Container>
    )
}

