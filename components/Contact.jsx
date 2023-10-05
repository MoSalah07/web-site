"use client";
import React from "react";
// Motion
import { motion } from "framer-motion";
// Variants
import { feadIn } from "@/libs/variants";

function Contact() {
  return (
    <div id="contact" className=" mt-[30rem]  md:mt-36 lg:section w-full">
      <div className="container mx-auto pb-32">
        <div className="flex flex-col lg:flex-row">
          {/* Text */}
          <motion.div
            variants={feadIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col justify-center items-center md:items-start gap-y-6 md:gap-y-0"
          >
            <h4 className="text-xl md:text-left uppercase text-accent font-medium mb-2">
              Get In Touch
            </h4>
            <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
              Let's work <br /> together!
            </h2>
          </motion.div>
          {/* Form */}
          <motion.form
            variants={feadIn("left", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6"
          >
            <div>
              <input
                type="text"
                placeholder="Your name"
                className="bg-transparent py-3 border-b outline-none w-full placeholder:text-white focus:border-accent transition-all"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your email"
                className="bg-transparent py-3 border-b outline-none w-full placeholder:text-white focus:border-accent transition-all"
              />
            </div>
            <div>
              <textarea
                placeholder="Your message"
                className="bg-transparent py-12 resize-none mb-12 border-b outline-none w-full placeholder:text-white focus:border-accent transition-all"
              ></textarea>
            </div>
            <button className="btn btn-lg" type="button">
              Send message
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
