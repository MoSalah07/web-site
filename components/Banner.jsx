"use client";
import React from "react";
import Img from "../public/129048331_156889062841502_7036879156160976185_n.jpg";
import { FaGithub, FaFacebook, FaDribbble } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { feadIn } from "../libs/variants.js";
import Image from "next/image";
import Link from "next/link";

function Banner() {
  return (
    <section
      id="home"
      className="min-h-[85vh] lg:min-h-[78vh] flex flex-col justify-center pt-44 sm:pt-56"
    >
      <div className="container mx-auto ">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className=" basis-[60%] lg:order-first order-last md:mt-0 mt-8">
            <motion.h1
              variants={feadIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="md:mb-12 text-[30px] md:text-[55px] font-bold text-center lg:text-left"
            >
              MOHAMED <span>SALAH</span>
            </motion.h1>
            <motion.div
              variants={feadIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="my-6 text-3xl md:text-[36px] font-secondary lg:text-[60px] text-center lg:text-left flex flex-col justify-center gap-y-4"
            >
              <span className="mr-2 lg:mb-8 block">I am </span>
              <TypeAnimation
                wrapper="span"
                className="text-accent"
                sequence={[
                  "A Front End Developer",
                  2000,
                  "A Designer",
                  2000,
                  "A Mobile Developer",
                  2000,
                  "A Mern Stack",
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={feadIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="leading-8 mt-8 text-justify"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              eligendi molestiae quo totam libero accusantium laborum officia
              enim. Unde, deleniti?
            </motion.p>
            {/* Buttons */}
            <motion.div
              variants={feadIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mt-8 mx-auto lg:mx-0"
            >
              <Link
                href={`/Mo-Salah-CV.pdf`}
                download={true}
                target="_blank"
                className="btn btn-lg outline-none flex items-center justify-center"
              >
                Download CV
              </Link>
              <Link href={`/`} className="text-gradient btn-link capitalize">
                my portfolio
              </Link>
            </motion.div>
          </div>
          {/* Image */}
          <motion.div
            variants={feadIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="rounded-full w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] xl:w-[400px] xl:h-[400px] sm:w-[400px] sm:h-[400px] bg-black overflow-hidden  md:mb-16 lg:mb-0"
          >
            <Image
              className="object-cover w-full rounded-full overflow-hidden"
              src={Img}
              alt="logo"
              quality={100}
            />
          </motion.div>
        </div>
        {/* Social */}
        <motion.div
          variants={feadIn("up", 0.7)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="flex gap-x-6 text-[30px] mt-4 w-full items-center justify-center lg:justify-start lg:max-w-max"
        >
          <Link href={`https://www.facebook.com/mido.mohammed.7/`}>
            <FaFacebook />
          </Link>
          <Link href={`https://github.com/MoSalah07?tab=repositories`}>
            <FaGithub />
          </Link>
          <Link href={`/`}>
            <FaDribbble />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default Banner;
