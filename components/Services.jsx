"use client";
import React from "react";
// Icons
import { BsArrowUpRight } from "react-icons/bs";
// Motion
import { motion } from "framer-motion";
// Variants
import { feadIn } from "@/libs/variants";
import Link from "next/link";

// Services Data
const services = [
  {
    id: 1,
    name: "UI/UX Design",
    description:
      "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
    link: "Learn more",
  },
  {
    id: 2,
    name: "Front-End Development",
    description:
      "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
    link: "Learn more",
  },
  {
    id: 3,
    name: "Digital Marketing",
    description:
      "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
    link: "Learn more",
  },
  {
    id: 4,
    name: "Product Branding",
    description:
      "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
    link: "Learn more",
  },
];

function Services() {
  const randerServicesList = services.map(({ id, name, description, link }) => (
    <div key={id} className="mb-[36px] border-b border-white/20 h-[146px] flex">
      <div className="max-w-[476px]">
        <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-4">
          {name}
        </h4>
        <p className="font-secondary leading-tight">{description}</p>
      </div>
      <div className="flex flex-col flex-1 items-end">
        <Link
          href={`/`}
          className="btn w-9 h-9 mb-[25px] flex justify-center items-center"
        >
          <BsArrowUpRight />
        </Link>
        <Link href={`/`} className="text-gradient text-sm capitalize">
          {link}
        </Link>
      </div>
    </div>
  ));

  return (
    <div id="services" className="section bg-services overflow-hidden">
      <div className="overlay-services" />
      <div className="container mx-auto relative z-50">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Text */}
          <motion.div
            variants={feadIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6">What I Do</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              I'm a Freelance Front-end Developer With Over 3 Years of
              Experience
            </h3>
            <button className="btn btn-sm">See my work</button>
          </motion.div>
          {/* Services */}
          <motion.div
            variants={feadIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            {/* Services List */}
            {randerServicesList}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Services;
