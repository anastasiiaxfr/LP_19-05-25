"use client";
import { useRef } from "react";
import { useIsDesktop } from "@/app/hooks/useIsDesktop";

import { motion, useScroll, useTransform } from "framer-motion";

import Link from "next/link";
import Image from "next/image";

// import img from "@/app/assets/img/img2.webp";
import i1 from "@/app/assets/img/4.webp";
import i2 from "@/app/assets/img/5.webp";

function Section1() {
  const isDesktop = useIsDesktop();

  const secRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: secRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [600, -600]);
  return (
    <section className="section section_1" ref={secRef}>
      <div className="container">
        <div className="row_2">
          <div className="order-2 lg:order-1 relative grid img_1">
            <Image src={i2} alt="" className="mx-auto lg:mx-0" />
            {!isDesktop && (
              <Image src={i1} alt="" className="mx-auto lg:mx-0" />
            )}

            {isDesktop && (
              <motion.img
                src={i1.src}
                alt="ALT"
                style={{ translateY }}
                className="mx-auto lg:mx-0"
              />
            )}
          </div>
          <div className="order-1 lg:order-2">
            <h2>Find the Perfect Credit Card for You</h2>
            <p className="subtitle">
              Discover your ideal credit card with ease. Our comprehensive
              selection caters to every financial need and lifestyle. Whether
              you seek cashback rewards, travel perks, or building credit, we
              have the perfect credit card waiting for you. Unleash the
              possibilities and find the credit card that fits your unique goals
              and aspirations.
            </p>
            <Link className="btn" href="#">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section1;
