import { getPokemonSpeciesData } from "../../../../lib/data";
interface PokemonEditionTextProps {
  pokemon: string;
}

export default async function PokemonEditionText({
  pokemon,
}: PokemonEditionTextProps) {
  const data = await getPokemonSpeciesData(pokemon);

  return (
    <div className="flex gap-4">
      <div>
        <div className="font-bold">Edition</div>
        <hr className="mb-4" />
        {data.flavor_text_entries.map((entry, index) => {
          if (entry.language.name === "en")
            return <div key={index}>{entry.version.name}</div>;
        })}
      </div>

      <div>
        <div className="font-bold">Text</div>
        <hr className="mb-4" />
        {data.flavor_text_entries.map((entry, index) => {
          if (entry.language.name === "en")
            return <div key={index}>{entry.flavor_text}</div>;
        })}
      </div>
    </div>
  );
}
