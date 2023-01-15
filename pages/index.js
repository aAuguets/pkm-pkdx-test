import PokemonCard from "@/components/PokemonCard/PokemonCard";

export default function Home({ pokemons }) {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Pokedex</h1>
      <article className="container m-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {pokemons.map((pkm) => {
          return <PokemonCard {...pkm} key={pkm.id} />;
        })}
      </article>
    </>
  );
}

export async function getStaticProps() {
  const getPokemonByIds = async (id) => {
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const result = await pokemon.json();
    return result;
  };
  const TOTAL_FIRST_GEN_POKEMON = 25; //151;
  const arrPromisesPkm = await [...Array(TOTAL_FIRST_GEN_POKEMON)].map(
    async (_, index) => {
      const { id, name, types, sprites, ...rest } = await getPokemonByIds(
        index + 1
      );
      return {
        id,
        name,
        types,
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
