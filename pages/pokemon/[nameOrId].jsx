import Back from "@/components/Back/Back";
import PokemonFeatures from "@/components/PokemonFeatures/PokemonFeatures";
import PokemonNavigate from "@/components/PokemonNavigate/PokemonNavigate";
import PokemonStats from "@/components/PokemonStats/PokemonStats";
import PokemonTypeCard from "@/components/PokemonTypeCard/PokemonTypeCard";
import {
  getPokemonTypeColor,
  PokemonTypeColors,
} from "@/utils/getPokemonTypeColor";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function PokeInfo({
  name,
  types,
  id,
  abilities,
  stats,
  weight,
  height,
  sprites,
}) {
  const router = useRouter();

  useEffect(() => {
    if (sprite == null) router.push("/404");
  }, []);

  const sprite = sprites?.other?.["official-artwork"]?.front_default;
  const pokemonTypes = types.map((type) => type.type.name);
  const pokemonAbilities = abilities.map((ab) => ab.ability.name);
  const typeColorCSS = getPokemonTypeColor(pokemonTypes);
  const pokemonTypeColor = PokemonTypeColors[pokemonTypes[0]];

  return (
    <div
      className="pl-5 pr-5 pt-5 min-h-[calc(100vh_-_72px)]"
      style={typeColorCSS}
    >
      {/* header */}
      <div className="w-full flex justify-between">
        <Back />
        <h1 className="text-3xl sm:text-5xl text-white capitalize font-bold">
          {name}
        </h1>
        <span className="text-sm text-white capitalize self-end">
          # <span className="text-xl sm:text-2xl">{id}</span>
        </span>
      </div>
      {/* Image */}
      <div className="relative mx-auto my-0 z-10">
        {sprite && (
          <Image
            className="w-[50%] mx-auto my-0 max-w-xs"
            src={sprite}
            alt={`${name} sprite`}
            width="144"
            height="144"
          />
        )}
      </div>
      {/* Card */}
      <article className="-top-10 relative mx-auto my-0 pt-12  pr-5 pl-5 rounded-lg w-full bg-white bg-opacity-80">
        <div className="-top-8 absolute z-20 left-0 w-full pr-10 pl-10">
          <PokemonNavigate id={id} />
        </div>
        <div className="flex w-full justify-center gap-6 text-white">
          {pokemonTypes.map((type, id) => (
            <PokemonTypeCard typeName={type} key={id} />
          ))}
        </div>
        {/* About card */}
        <PokemonFeatures
          pokemonAbilities={pokemonAbilities}
          height={height}
          weight={weight}
          mainColor={pokemonTypeColor}
        />
        {/* Stats */}
        <PokemonStats mainColor={pokemonTypeColor} stats={stats} />
      </article>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { nameOrId } = context.query;
  let pokemonData = {};
  try {
    const pokemon = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${nameOrId}`
    );
    pokemonData = await pokemon.json();
  } catch (e) {
    console.log(e);
  }
  const {
    name = "",
    types = [],
    id = "",
    abilities = [],
    stats = [],
    weight = "",
    height = "",
    sprites = "",
  } = pokemonData;

  const statsFormatted = {};
  (stats || []).forEach((stat) => {
    statsFormatted[stat.stat.name] = stat.base_stat;
  });

  return {
    props: {
      name,
      types,
      id,
      abilities,
      stats: statsFormatted,
      weight,
      height,
      sprites,
    },
  };
}
