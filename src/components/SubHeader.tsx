import { Row, Col } from 'react-bootstrap';
import Image from 'next/image'; // Use Next.js Image component for optimization
import mockup from '@/assets/airshare_mockup.svg'; // Move to the public folder
import logo1 from '@/assets/airshare_android_icon.svg'; // Move to the public folder
import logo2 from '@/assets/airshare_web_icon.svg'; // Move to the public folder
import logo3 from '@/assets/airshare_ios_icon.svg'; // Move to the public folder
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export default function SubHeader() {
  const platforms = [
    { name: 'iOS', icon: logo3 },
    { name: 'Web', icon: logo2 },
    { name: 'Android', icon: logo1 }
  ];

  useEffect(() => {
    gsap.from(".head-img", {
      x: -100,
      duration: 0.5,
      opacity: 0,
      ease: "back.in",
      scrollTrigger: {
        trigger: ".head-img",
        scrub: 1,
        end: "bottom 80%",
      }
    });

    gsap.from(".head-text", {
      x: 100,
      duration: 0.5,
      opacity: 0,
      ease: "back.in",
      scrollTrigger: {
        trigger: ".head-img",
        scrub: 1,
        end: "bottom 80%",
      }
    });
  }, []);

  return (
    <Row className="align-items-center mb-5 mt-4">
      {/* Left Section: Mockup */}
      <Col lg={6} xs={12} className="text-center mb-4 mb-lg-0">
        <Image
          src={mockup}
          alt="Screen Mirroring Devices"
          className="head-img"
          width={600} // Adjust as necessary for your image size
          height={400} // Adjust as necessary for your image size
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </Col>

      {/* Right Section: Platforms */}
      <Col lg={6} xs={12} className="text-center text-lg-start head-text">
        <h1 className="display-5 fw-bold mb-4 font-1">
          All-Around Cross-Platform Screen Mirroring For Seamless Collaboration
        </h1>

        <div className="d-flex flex-row justify-content-center justify-content-lg-start gap-2">
          {platforms.map((platform) => (
            <div key={platform.name} className="text-center" data-cursor-text={`${platform.name}`}>
              <div
                className="bg-navy rounded p-3 mb-2 d-flex align-items-center justify-content-center mx-auto"
                style={{ width: '100px', height: '80px' }}
              >
                <Image
                  src={platform.icon}
                  alt={`${platform.name} icon`}
                  width={60} // Adjust as necessary for icon size
                  height={60} // Adjust as necessary for icon size
                  className="img-fluid"
                />
              </div>
              <div className="fw-medium">{platform.name}</div>
            </div>
          ))}
        </div>
      </Col>
    </Row>
  );
}
