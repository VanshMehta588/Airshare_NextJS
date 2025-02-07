import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image'; // Importing Next.js Image component for optimization
import { useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import feature1 from '@/assets/airshare_features_1.svg';
import feature2 from '@/assets/airshare_features_2.svg';
import feature3 from '@/assets/airshare_features_3.svg';
import feature4 from '@/assets/airshare_features_4.svg';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

export default function Features() {
  const features = [
    {
      title: 'Local & Remote Screen Casting',
      subtitle: 'Real-Time Casting over Same/Different WiFi or Internet.',
      description: 'With AirDroid Cast, You Can Cast The Screen To Windows, Mac, Android, iOS And Even Android TV In Any Network Condition - Via WiFi, Local Or Cellular Network With Low Latency.',
      image: feature1, // Path relative to the public directory
      isReversed: false,
      titleColor: '#4285f4',
      className: "feature1"
    },
    {
      title: 'Cast to TV',
      subtitle: 'Take Big Screen Experience to the Next Level with AirDroid Cast TV',
      description: 'Wirelessly & Effortlessly Mirror Your Phone, Tablet, Or Computer Screen Onto Your Smart Android TV For A Better Visual Experience. Say Goodbye To Annoying HDMI Cables And Other Settings!',
      image: feature2,
      isReversed: true,
      titleColor: '#4285f4',
      className: "feature2"
    },
    {
      title: 'Wireless & USB Connection',
      subtitle: 'Smarter Way To Display',
      description: 'AirDroid Cast Allows You To Share Your Device\'s Screen With Full Audio Anytime You Need In Any Situation. We Made An Effort To Simplify The Display Process, And Focus On The Convenient Experience!',
      image: feature3,
      isReversed: false,
      titleColor: '#4285f4',
      className: "feature3"
    },
    {
      title: 'Remote control',
      subtitle: 'Total control android & ios beyond your finger',
      description: 'AirDroid Cast Enables You To Remotely Control Your iPhone/iPad/Android Devices On A PC, Just Using A Mouse Or Keyboard. With Or Without A USB Cable You Can Enjoy Mobile Entertainment On A Bigger Screen And Also Access Mobile Apps Without Using Any Emulators.',
      image: feature4,
      isReversed: true,
      titleColor: '#4285f4',
      className: "feature4"
    }
  ];

  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(".feature-head", {
      duration: 1,
      opacity: 0
    });

    tl.from(".feature1", {
      duration: 2.5,
      opacity: 0,
      x: -100,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".feature-head",
        scrub: 5,
      }
    });

    tl.from(".feature2", {
      duration: 2.5,
      opacity: 0,
      x: 100,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".feature1",
        scrub: 5
      }
    });

    tl.from(".feature3", {
      duration: 2.5,
      opacity: 0,
      x: -100,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".feature2",
        scrub: 5
      }
    });

    tl.from(".feature4", {
      duration: 2.5,
      opacity: 0,
      x: 100,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".feature3",
        scrub: 5
      }
    });
  }, []);

  return (
    <Container className="py-5 features">
      <h2 className="text-center h1 mb-5 fw-bold font-1 feature-head">
        Unleash The Full Power Of Your Screen Sharing
      </h2>

      {features.map((feature, index) => (
        <Row
          key={index}
          className={`align-items-center mb-5 ${index !== features.length - 1 ? 'mb-lg-5' : ''} ${feature.className}`}
        >
          {/* Content Column */}
          <Col
            lg={6}
            className={`mb-4 mb-lg-0 ${feature.isReversed ? 'order-lg-2' : ''}`}
          >
            <div className="pe-lg-4">
              <h3
                className="h5 mb-3"
                style={{ color: feature.titleColor }}
              >
                {feature.title}
              </h3>
              <h4 className="h3 fw-bold mb-3 font-1">
                {feature.subtitle}
              </h4>
              <p className="mb-0 font-2">
                {feature.description}
              </p>
            </div>
          </Col>

          {/* Image Column */}
          <Col
            lg={6}
            className={`${feature.isReversed ? 'order-lg-1 text-center' : ' text-center'} ${feature.className}`}
          >
            <Image
              src={feature.image}
              alt={feature.title}
              width={600}  // You can adjust the width and height as needed
              height={400} // You can adjust the width and height as needed
              className="img-fluid rounded shadow-sm"
            />
          </Col>
        </Row>
      ))}
    </Container>
  );
}
