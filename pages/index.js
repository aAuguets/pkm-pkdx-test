export default function Home({ pokemons }) {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Pokedex</h1>
      {pokemons.map((pkm) => {
        return <h2>{pkm.name}</h2>;
      })}
    </>
  );
}

export async function getStaticProps() {
  const getPokemonByIds = async (id) => {
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const result = await pokemon.json();
    return result;
  };

  const TOTAL_FIRST_GEN_POKEMON = 5; //152;
  const arrPromisesPkm = await [...Array(TOTAL_FIRST_GEN_POKEMON)].map(
    async (_, index) => {
      const { id, name, types, sprites, ...rest } = await getPokemonByIds(
        index + 1
      );
      return {
        id,
        name,
        types,
        front_default: sprites.front_default,
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
