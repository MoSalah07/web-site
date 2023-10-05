"use client";
import React from "react";
// Ract Countup
import CountUp from "react-countup";
// Intersection Observer
import { useInView } from "react-intersection-observer";
// Motion
import { motion } from "framer-motion";
// Varient
import { feadIn } from "@/libs/variants";
import Link from "next/link";
function About() {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section id="about" className="section md:mt-20 lg:mt-32 overflow-hidden" ref={ref}>
      <div className="container mx-auto h-screen flex flex-col lg:flex-row items-center lg:gap-[4%]">
        {/*bg Img */}
        <motion.div
          variants={feadIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="lg:basis-[30%] hidden lg:block  bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten"
        ></motion.div>
        <div className="lg:basis-[65%]">
          {/* text */}
          <motion.div
            variants={feadIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
          >
            <h2 className="my-8 h2 text-accent">About me.</h2>
            <h3 className="h3">
              i'm a Freelance Front-end Developer with over 3 years of
              experience.
            </h3>
            <p className="leading-8 text-justify">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id
              accusantium reprehenderit corporis fugit fugiat officia hic, quod
              amet esse pariatur?
            </p>
            {/* Stats */}
            {inView ? (
              <>
                <div className="flex items-center justify-center lg:justify-start gap-x-6 lg:gap-x-10 mt-16">
                  <div className="flex flex-col items-center ">
                    <div className="text-[40px] font-tertiary  text-gradient mb-4 flex items-center justify-center">
                      <CountUp start={0} end={3} duration={5} />
                    </div>
                    <div className="font-primary text-sm tracking-[2px] text-cente">
                      Years of <br />
                      Experience
                    </div>
                  </div>
                  <div>
                    <div className="text-[40px] font-tertiary text-gradient mb-4 flex items-center justify-center">
                      <CountUp start={0} end={25} duration={3} />
                    </div>
                    <div className="font-primary text-sm tracking-[2px] text-center">
                      Projects <br /> Completed
                    </div>
                  </div>
                  <div>
                    <div className="text-[40px] font-tertiary text-gradient mb-4 flex items-center justify-center">
                      <CountUp start={0} end={225} duration={2} />
                    </div>
                    <div className="font-primary text-sm tracking-[2px] text-cente">
                      Problem <br />
                      Solving
                    </div>
                  </div>
                </div>
              </>
            ) : null}
          </motion.div>
          {/* Buttons */}
          <div className="flex gap-x-8 items-center justify-center lg:justify-start mt-16">
            <button className="btn btn-lg">contact me</button>
            <Link className="text-gradient btn-link" href={`/`}>
              My Portfolio
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
