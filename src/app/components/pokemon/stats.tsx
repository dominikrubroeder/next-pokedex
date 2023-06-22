import {Stat} from "../../../../lib/data";

interface PokemonStatsProps {
    stats: Stat[]
}
export default function PokemonStats({stats}: PokemonStatsProps) {
    return <ul className="grid gap-2">
        {stats.map((stat, index) => <li key={index} className="flex gap-2 items-center rounded-3xl p-1.5 px-3 border text-xs text-left">
            <span className="shrink-0">{stat.stat.name}</span>
            <span className="font-bold">{stat.base_stat}</span>
            <span className="rounded-3xl bg-gray-100 relative w-full overflow-hidden h-4 inline-flex">
                        <span className="absolute left-0 h-full bg-amber-400" style={{width: `${stat.base_stat}%`}}></span>
                    </span>
        </li>)}
    </ul>
}