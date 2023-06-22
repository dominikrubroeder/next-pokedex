import {getPokemonData} from "../../../../lib/data";
import Image from "next/image";

export default async function Pokemon({params}: { params: { slug: string } }) {
    const data = await getPokemonData(params.slug)
    return <main>
        <section className="mx-auto max-w-screen-lg text-center">
            {data.sprites.other?.["official-artwork"].front_default &&
                <Image src={data.sprites.other["official-artwork"].front_default} alt={data.name} width={244}
                       height={244}
                       className="object-fit mx-auto" priority/>}
            <h1 className="text-4xl font-bold">{data.name}</h1>
        </section>
    </main>
}