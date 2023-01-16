import PokemonCard from "@/components/PokemonCard/PokemonCard";
import { useEffect } from "react";

export default function Home({ pokemons, search, setSearch }) {
  useEffect(() => {
    setSearch("");
  }, []);
  return (
    <article className="container m-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-5 pl-5 pr-5">
      {pokemons
        .filter(
          (pkm) =>
            search == "" ||
            pkm.name.toLowerCase().includes(search.toLowerCase())
        )
        .slice(0, 151)
        .map((pkm) => {
          return <PokemonCard {...pkm} key={pkm.id} />;
        })}
    </article>
  );
}

export async function getStaticProps() {
  const getPokemonByIds = async (id) => {
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const result = await pokemon.json();
    return result;
  };
  const TOTAL_POKEMON = 386; //151 //386 //1010;
  const arrPromisesPkm = await [...Array(TOTAL_POKEMON)].map(
    async (_, index) => {
      const { id, name, types, sprites, ...rest } = await getPokemonByIds(
        index + 1
      );
      return {
        id,
        name,
        types: types.map((type) => type.type.name),
        sprite: sprites.other["official-artwork"].front_default,
      };
    }
  );

  const pokemons = await Promise.all(arrPromisesPkm);

  return {
    props: {
      pokemons,
    },
  };
}
