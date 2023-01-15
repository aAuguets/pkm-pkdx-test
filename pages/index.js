import PokemonCard from "@/components/PokemonCard/PokemonCard";

export default function Home({ pokemons }) {
  return (
    <article className="container m-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-5">
      {pokemons.map((pkm) => {
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
  const TOTAL_FIRST_GEN_POKEMON = 25; //386;
  const arrPromisesPkm = await [...Array(TOTAL_FIRST_GEN_POKEMON)].map(
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
