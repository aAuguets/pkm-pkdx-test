export default function PokeInfo({ pokemonData }) {
  console.log(pokemonData);
  return `hello! ${pokemonData.name}`;
}

export async function getServerSideProps(context) {
  const { name } = context.query;
  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const pokemonData = await pokemon.json();
  return {
    props: {
      pokemonData,
    },
  };
}
