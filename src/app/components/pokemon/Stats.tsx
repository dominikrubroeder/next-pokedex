"use client";

import { Stat } from "../../../../lib/data";
import { motion } from "framer-motion";

interface PokemonStatsProps {
  stats: Stat[];
}
export default function PokemonStats({ stats }: PokemonStatsProps) {
  return (
    <ul className="grid gap-2">
      {stats.map((stat, index) => (
        <li
          key={index}
          className="flex items-center gap-2 rounded-3xl border p-1.5 px-3 text-left text-xs"
        >
          <span className="shrink-0">{stat.stat.name}</span>
          <span className="font-bold">{stat.base_stat}</span>
          <span className="relative inline-flex h-4 w-full overflow-hidden rounded-3xl bg-gray-100">
            <motion.span
              className="absolute left-0 h-full bg-amber-400"
              animate={{ width: ["0%", `${stat.base_stat}%`] }}
              transition={{
                ease: "easeOut",
                duration: 0.6,
                delay: 0.06 * index,
              }}
            ></motion.span>
          </span>
        </li>
      ))}
    </ul>
  );
}
