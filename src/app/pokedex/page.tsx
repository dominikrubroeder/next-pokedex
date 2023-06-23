import { getPokedexData } from "../../../lib/data";
import Link from "next/link";

export default async function Pokedex() {
  const data = await getPokedexData();
  return (
    <main>
      <ul className="mx-auto grid w-full max-w-md gap-4">
        {data.results.map((pokemon, index) => {
          return (
            <li key={index}>
              <Link
                href={`/pokedex/${pokemon.name}`}
                className="flex items-center justify-between rounded-xl bg-gray-100 p-4 transition hover:bg-gray-200"
              >
                <div className="flex items-center gap-2">
                  <span className="text-gray-400">{index + 1}</span>
                  <span className="font-bold">
                    {pokemon.name.charAt(0).toUpperCase() +
                      pokemon.name.slice(1)}
                  </span>
                </div>
                <div>&#8594;</div>
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
