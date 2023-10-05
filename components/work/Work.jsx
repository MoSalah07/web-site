"use client";
import React from "react";
// Motion
import { motion } from "framer-motion";
// Variants
import { feadIn } from "@/libs/variants";
// Img
import Img1 from "@/public/projects/countries.webp";
import Img2 from "@/public/projects/invoice-app.jpg";
import Img3 from "@/public/projects/product.webp";
// Component
import ProjectITem from "./ProjectITem";

const projectsList = [
  {
    id: 1,
    preTitle: "Country Facts App",
    title: "React Js",
    img: Img1,
    animation: true,
  },
  {
    id: 2,
    preTitle: "Invoice App",
    title: "React Js Redux Js",
    img: Img2,
    animation: false,
  },
  {
    id: 3,
    preTitle: "Product App",
    title: "Next Js MongoDb",
    img: Img3,
    animation: true,
  },
];

function Work() {
  const randerProjects = projectsList.map((item) => (
    <ProjectITem key={item.id} {...item} />
  ));

  return (
    <div
      id="work"
      className="section mt-[30rem] md:mt-36 mb-48 md:mb-0 h-screen"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <div className="grid grid-col-1 md:grid-cols-2 gap-12">
            {/* text */}
            <motion.div
              variants={feadIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="flex flex-col items-center md:block"
            >
              <h2 className="h2 leading-tight text-accent">My Latest Work.</h2>
              <p className="max-w-sm mb-8 md:mb-16">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                laborum veritatis non molestias id rerum nostrum culpa nemo sed,
                quas iusto ea pariatur ex libero?
              </p>
              <button className="btn btn-sm">View all Projects</button>
            </motion.div>
            {/* Images Projects Component */}
            {randerProjects}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
