"use client";

import { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import CourseOverview from "@/components/CourseOverview";
import Testimonials from "@/components/Testimonials";
import WhyChoose from "@/components/WhyChoose";
import TeachingMethod from "@/components/TeachingMethod";
import Pricing from "@/components/Pricing";
import AdditionalCourses from "@/components/AdditionalCourses";
import Enrollment from "@/components/Enrollment";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const href = anchor.getAttribute("href");
        if (href) {
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        }
      });
    });

    // Add scroll animation for fade-in elements
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          target.style.opacity = "1";
          target.style.transform = "translateY(0)";
        }
      });
    }, observerOptions);

    // Observe all elements that should fade in
    const cardElements = document.querySelectorAll(".card-hover");
    cardElements.forEach((el) => {
      const element = el as HTMLElement;
      element.style.opacity = "0";
      element.style.transform = "translateY(20px)";
      element.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      observer.observe(element);
    });

    // Add floating animation to pricing cards
    const pricingCards = document.querySelectorAll(".card-hover");
    pricingCards.forEach((card) => {
      const cardElement = card as HTMLElement;
      cardElement.addEventListener("mouseenter", () => {
        cardElement.style.transform = "translateY(-10px) scale(1.02)";
      });

      cardElement.addEventListener("mouseleave", () => {
        cardElement.style.transform = "translateY(0) scale(1)";
      });
    });

    return () => {
      // Cleanup
      observer.disconnect();
    };
  }, []);

  return (
    <main>
      <HeroSection />
      <CourseOverview />
      <Testimonials />
      <WhyChoose />
      <TeachingMethod />
      <Pricing />
      <AdditionalCourses />
      <Enrollment />
      <Footer />
    </main>
  );
}
