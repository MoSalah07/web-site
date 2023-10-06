"use client";
import React from "react";
// Motion
import { motion, AnimatePresence } from "framer-motion";
// route
import { useRouter } from "next/navigation";
// Component
import TransitionPages from "@/components/TransitionPages";

function TransitionProvider({ children }) {
  const router = useRouter();


  return (
    <AnimatePresence mode="wait">
      <motion.div>
        <TransitionPages />
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export default TransitionProvider;
