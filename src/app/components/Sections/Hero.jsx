"use client";

import Link from "next/link";
import Image from "next/image";
import { MoveRight } from "lucide-react";
import img1 from "@/app/assets/img/img0.webp";
import img2 from "@/app/assets/img/shape1.svg";
import img3 from "@/app/assets/img/rating.webp";

function Hero() {
  return (
    <section className="relative section section_hero">
      <div className="container">
        <div className="row">
          <div>
            <div className="hgroup">
              <h1 className="h1">
                Discover the Perfect <span>Credit Card</span> for You
              </h1>
            </div>
            <p className="subtitle">
              Discover the power of our secure and rewarding credit cards.
              Explore our range of credit cards and take control of your
              finances today.
            </p>
            <Link className="btn" href="#">
              Get Started <MoveRight />
            </Link>

            <div className="rating">
              <Image src={img3} alt="" />
              <div className="rating_body">
                <div className="rating_val">10.2k+</div>
                <div className="rating_label">
                  Active users around the world
                </div>
              </div>
            </div>
          </div>
          <div>
            <Image
              src={img2}
              alt=""
              className="absolute top-auto lg:top-0 left-0 lg:left-auto bottom-0 right-0 lg:-right-[5em] -z-10 m-auto"
            />

            <Image src={img1} alt="" priority={true} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
