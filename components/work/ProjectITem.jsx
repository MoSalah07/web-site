"use client";
import React from "react";
import Image from "next/image";
// Motion
import { motion } from "framer-motion";
// Variants
import { feadIn } from "@/libs/variants";

function ProjectITem({ title, preTitle, img, animation }) {
  return (
    <>
      {animation ? (
        <motion.div
          variants={feadIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="group relative overflow-hidden border-2 border-white/50 rounded-xl max-h-max md:h-[200px] lg:h-[245px] xl:h-[310px]"
        >
          <div className="group-hover:bg-black/80 w-full h-full absolute z-[100] transition-all duration-300" />
          <Image
            className="group-hover:scale-125 transition-all duration-500"
            src={img}
            alt="image"
          />
          {/* PreTitle */}
          <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-[110]">
            <span className="text-gradient">{preTitle}</span>
          </div>
          {/* Title */}
          <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-[110]">
            <span className="text-3xl text-white">{title}</span>
          </div>
        </motion.div>
      ) : (
        <motion.div
          variants={feadIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="group relative overflow-hidden border-2 border-white/50 rounded-xl max-h-max md:h-[200px] lg:h-[245px] xl:h-[310px]"
        >
          <div className="group-hover:bg-black/80 w-full h-full absolute z-[100] transition-all duration-300" />
          <Image
            className="group-hover:scale-125 transition-all duration-500"
            src={img}
            alt="image"
          />
          {/* PreTitle */}
          <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-[110]">
            <span className="text-gradient">{preTitle}</span>
          </div>
          {/* Title */}
          <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-[110]">
            <span className="text-3xl text-white">{title}</span>
          </div>
        </motion.div>
      )}
    </>
  );
}

export default ProjectITem;
