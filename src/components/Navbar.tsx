"use client"

import { Navbar, Nav, Container, Button } from "react-bootstrap"
import Image from "next/image"
import { useEffect, useState } from "react"
import gsap from "gsap"
import logo from "@/assets/airshare_logo.svg"
import ShinyText from "@/hooks/ShinyText"

export default function Navigation() {
    const [scrolled, setScrolled] = useState(false)
    const [isNavOpen, setIsNavOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    const handleScroll = (targetId: string) => {
        const target = document.getElementById(targetId)
        if (target) {
            const yOffset = window.innerWidth <= 992 ? -350 : -90
            const yPosition = target.getBoundingClientRect().top + window.scrollY + yOffset
            window.scrollTo({ top: yPosition, behavior: "smooth" })
        }
    }

    const handleNavLinkClick = () => {
        setIsNavOpen(false)
    }

    const handleHover = (event: React.MouseEvent) => {
        gsap.to(event.target, {
            scale: 1.1,
            duration: 0.3,
            ease: "power2.out",
            color: "#6B82FE",
        })
    }

    const handleMouseLeave = (event: React.MouseEvent) => {
        gsap.to(event.target, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
            color: "black",
        })
    }

    return (
        <Navbar
            bg={scrolled ? "white" : "transparent"}
            expand="lg"
            className={`py-2 ${scrolled ? "scrolledshadow" : ""}`}
            expanded={isNavOpen}
        >
            <Container fluid className="gap-2 gap-lg-5">
                <Navbar.Brand href="#home" className="d-flex align-items-center" onClick={() => window.location.reload()}>
                    <Image
                        src={logo || "/placeholder.svg"}
                        alt="Drop Files Logo"
                        className="me-2 logo-btn"
                        data-cursor-text="Drop Files"
                        width={120}
                        height={40}
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav border border-0" onClick={() => setIsNavOpen(!isNavOpen)} />
                <Navbar.Collapse id="basic-navbar-nav font-1">
                    <Nav className="mx-auto gap-4 text-end">
                        <Nav.Link
                            onClick={() => {
                                handleScroll('features')
                                handleNavLinkClick()
                            }}
                            className="pe-2 pe-md-0"
                            onMouseEnter={handleHover}
                            onMouseLeave={handleMouseLeave}
                        >
                            Features
                        </Nav.Link>
                        <Nav.Link
                            onClick={() => {
                                handleScroll('guide')
                                handleNavLinkClick()
                            }}
                            className="pe-2 pe-md-0"
                            onMouseEnter={handleHover}
                            onMouseLeave={handleMouseLeave}
                        >
                            Guide
                        </Nav.Link>
                        <Nav.Link
                            onClick={() => {
                                handleScroll('topic')
                                handleNavLinkClick()
                            }}
                            className="pe-2 pe-md-0"
                            onMouseEnter={handleHover}
                            onMouseLeave={handleMouseLeave}
                        >
                            Topic
                        </Nav.Link>
                        <Nav.Link
                            href="#reviews"
                            onClick={handleNavLinkClick}
                            className="pe-2 pe-md-0"
                            onMouseEnter={handleHover}
                            onMouseLeave={handleMouseLeave}
                        >
                            Reviews
                        </Nav.Link>
                        <Nav.Link
                            href="#airdroid"
                            className="d-inline d-lg-none pe-2 pe-md-0"
                            onClick={handleNavLinkClick}
                            onMouseEnter={handleHover}
                            onMouseLeave={handleMouseLeave}
                        >
                            Air Droid Cast Web
                        </Nav.Link>
                    </Nav>
                    <Nav.Link
                        href="#airdroid"
                        className="fw-bold d-none d-lg-inline"
                        onMouseEnter={handleHover}
                        onMouseLeave={handleMouseLeave}
                    >
                        Air Droid Cast Web
                    </Nav.Link>
                    <Button variant="" disabled className="border border-0 d-none d-lg-inline">
                        |
                    </Button>
                    <div className="gap-2 d-none d-lg-flex">
                        <Button className="bg-darkblue logo-btn" data-cursor-text="Download">
                            Download Now
                        </Button>
                        <ShinyText text="Buy Now" disabled={false} speed={3} className='bg-darkblue logo-btn btn' />
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
