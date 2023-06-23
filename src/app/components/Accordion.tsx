"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {ChevronRightIcon} from "@heroicons/react/24/solid";
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

          <ChevronRightIcon className={`h-4 w-4 transition duration-300 ${isOpen ? 'rotate-90' : 'rotate-0'}`} />
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
