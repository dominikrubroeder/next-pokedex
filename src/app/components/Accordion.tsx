"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
interface AccordionProps {
  children: React.ReactNode;
  title: string
}
export default function Accordion({ children, title }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="grid gap-2 w-full">
      <h2
        className="cursor-pointer font-bold flex justify-between gap-4"
        onClick={() => setIsOpen((prevState) => !prevState)}
      >
          <span>{title}</span>

          <span>{isOpen ? '-' : '+'}</span>
      </h2>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            animate={{ y: [8, 0], opacity: [0, 1] }}
            transition={{ ease: "easeOut" }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
