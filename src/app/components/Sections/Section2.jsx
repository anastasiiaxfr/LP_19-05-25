"use client";
import { useRef } from "react";
import { useIsDesktop } from "@/app/hooks/useIsDesktop";

import { motion, useScroll, useTransform } from "framer-motion";

import Link from "next/link";
import Image from "next/image";
import { MoveRight } from "lucide-react";
//import img from "@/app/assets/img/img3.png";
import i1 from "@/app/assets/img/1.png";
import i2 from "@/app/assets/img/2.png";
import i3 from "@/app/assets/img/3.png";

function Section2() {
  const isDesktop = useIsDesktop();

  const secRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: secRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [400, -400]);
  const translateY2 = useTransform(scrollYProgress, [0, 1], [500, -500]);
  const translateY3 = useTransform(scrollYProgress, [0, 1], [600, -600]);

  return (
    <section className="section section_2" ref={secRef}>
      <div className="container">
        <div className="row">
          <div>
            <h2>Design your personalized credit card.</h2>
            <p className="subtitle">
              You have the freedom to personalize the design of your credit
              card, ensuring a truly unique experience that makes you feel
              extraordinary
            </p>
            <Link className="btn" href="#">
              Create New Card <MoveRight />
            </Link>
          </div>
          <div className="relative h-full grid img_1">
            {!isDesktop && (
              <Image src={i3} alt="" className="mx-auto lg:mx-0" />
            )}
            {!isDesktop && (
              <Image src={i2} alt="" className="mx-auto lg:mx-0" />
            )}
            {!isDesktop && (
              <Image src={i1} alt="" className="mx-auto lg:mx-0" />
            )}

            {isDesktop && (
              <motion.img
                src={i3.src}
                alt="Image 3"
                style={{
                  translateY: translateY,
                  transition: "transform 0.1s ease-out",
                }}
              />
            )}
            {isDesktop && (
              <motion.img
                src={i2.src}
                alt="Image 2"
                style={{
                  translateY: translateY2,
                  transition: "transform 0.3s ease-out",
                }}
              />
            )}
            {isDesktop && (
              <motion.img
                src={i1.src}
                alt="Image 1"
                style={{
                  translateY: translateY3,
                  transition: "transform 0.5s ease-out",
                }}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section2;
