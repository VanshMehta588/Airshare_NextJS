"use client";

import { useRef } from "react";
import Navigation from "@/components/Navbar";
import Hero from "@/components/Hero";
import Tutorial from "@/components/Tutorial";
import Press from "@/components/Press";
import SubHeader from "@/components/SubHeader";
import Features from "@/components/Features";
import Cards from "@/components/Cards";
import ScreenMirroringTabs from "@/components/ScreenMirroring";
import BroadcastSteps from "@/components/BroadCast";
import PlatformDetails from "@/components/PlatformDetails";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import 'bootstrap/dist/css/bootstrap.min.css'  // Import Bootstrap CSS globally
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@/styles/globals.css';  // Import your custom global styles

export default function Home() {
  const featuresRef = useRef<HTMLDivElement | null>(null);
  const guideRef = useRef<HTMLDivElement | null>(null);
  const topicRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="bg-light min-vh-100 app-container">
      <section className="navbar-section sticky-top">
        <Navigation />
      </section>

      <div className="bg-grad customdiv1">
        <section className="hero-section py-4">
          <div className="container">
            <Hero />
          </div>
        </section>

        <section className="tutorial-section py-4">
          <div className="container">
            <Tutorial />
          </div>
        </section>

        <section className="press-section">
          <div className="container">
            <Press />
          </div>
        </section>

        <div className="forspace"></div>
      </div>

      <div className="bg-grad2 customdiv2">
        <div className="forspace"></div>
        <section className="header-section py-md-4">
          <div className="container">
            <SubHeader />
          </div>
        </section>

        <section className="features-section py-md-4">
          <div className="container" ref={featuresRef}>
            <Features />
          </div>
        </section>

        <section className="cards-section py-md-4">
          <div className="container">
            <Cards />
          </div>
        </section>
      </div>

      <div className="bg-grad3 customdiv3">
        <section className="screenmirroring-section py-md-4">
          <div className="container">
            <ScreenMirroringTabs />
          </div>
        </section>
        <section className="broadcaststeps-section" ref={guideRef}>
          <div className="container">
            <BroadcastSteps />
          </div>
        </section>
        <section className="platformdetails-section py-md-4">
          <div className="container">
            <PlatformDetails />
          </div>
        </section>
        <section className="faq-section py-md-4" ref={topicRef}>
          <div className="container">
            <FAQSection />
          </div>
        </section>
        <section className="footer-section">
          <Footer />
        </section>
      </div>
      <ScrollToTop />
    </div>
  );
}
