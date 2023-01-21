import Back from "@/components/Back/Back";
import PokemonFeatures from "@/components/PokemonFeatures/PokemonFeatures";
import PokemonImage from "@/components/PokemonImage/PokemonImage";
import PokemonNavigate from "@/components/PokemonNavigate/PokemonNavigate";
import PokemonStats from "@/components/PokemonStats/PokemonStats";
import PokemonTypeCard from "@/components/PokemonTypeCard/PokemonTypeCard";
import {
  getPokemonTypeColor,
  PokemonTypeColors,
} from "@/utils/getPokemonTypeColor";
import Link from "next/link";
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

  const pkmSprites = sprites?.other?.["official-artwork"];
  const pokemonTypes = types.map((type) => type.type.name);
  const pokemonAbilities = abilities.map((ab) => ab.ability.name);
  const typeColorCSS = getPokemonTypeColor(pokemonTypes);
  const pokemonTypeColor = PokemonTypeColors[pokemonTypes[0]];

  useEffect(() => {
    if (pkmSprites?.front_default == null) router.push("/404");
  }, [pkmSprites]);

  return (
    <div
      className="pl-5 pr-5 pt-5 min-h-[calc(100vh_-_72px)]"
      style={typeColorCSS}
    >
      {/* header */}
      <div className=" flex flex-col ">
        <nav className="flex gap-5 text-xl text-white ">
          <Back />
          <Link className="items-center hover:underline" href={"/"}>
            Home
          </Link>
        </nav>
        <h1 className="text-4xl sm:text-6xl text-white capitalize font-bold grow text-center mx-auto my-0">
          {name}
        </h1>
      </div>
      {/* Image */}
      <PokemonImage pkmSprites={pkmSprites} name={name} />
      {/* Card */}
      <article className="-top-10 relative mx-auto my-0 pt-12  pr-5 pl-5 rounded-lg w-full bg-white bg-opacity-80">
        <div className="-top-8 absolute z-20 left-0 w-full pr-10 pl-10">
          <PokemonNavigate id={id} />
        </div>
        <span className=" absolute right-0 top-4 text-sm capitalize self-end pr-5">
          # <span className="text-4xl sm:text-6xl">{id}</span>
        </span>

        <div className="flex w-full justify-center gap-6 text-white">
          {pokemonTypes.map((type, id) => (
            <PokemonTypeCard
              typeName={type}
              key={id}
              customStyle={{ width: "80px", textAlign: "center" }}
            />
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
