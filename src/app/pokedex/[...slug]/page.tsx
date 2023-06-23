import { getPokemonData, getPokemonSpeciesData } from "../../../../lib/data";
import Image from "next/image";
import PokemonStats from "@/app/components/pokemon/Stats";
import PokemonEditionText from "@/app/components/pokemon/EditionText";
import Accordion from "@/app/components/Accordion";

export default async function Pokemon({
  params,
}: {
  params: { slug: string };
}) {
  const data = await getPokemonData(params.slug);

  return (
    <main className="grid gap-8">
      <section className="mx-auto max-w-screen-lg">
        {data.sprites.other?.["official-artwork"].front_default && (
          <Image
            src={data.sprites.other["official-artwork"].front_default}
            alt={data.name}
            width={244}
            height={244}
            className="object-fit mx-auto"
            priority
          />
        )}
        <div className="grid gap-2">
          <h1 className="mx-auto text-4xl font-bold">{data.name}</h1>
          <div className="flex justify-center gap-2">
            {data.types.map((type, index) => (
              <div
                key={index}
                className="rounded-3xl border p-1.5 px-3 text-xs"
              >
                {type.type.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-sm gap-2 text-center">
        <h2>Stats</h2>
        <PokemonStats stats={data.stats} />
      </section>

      <section className="mx-auto grid w-full gap-2 px-4">
          <Accordion title={`${params.slug}'s appearance text`}>
              <PokemonEditionText pokemon={params.slug} />
          </Accordion>
      </section>
    </main>
  );
}
