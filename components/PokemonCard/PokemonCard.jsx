import {
  getPokemonTypeColor,
  PokemonTypeColors,
} from "@/utils/getPokemonTypeColor";
import Image from "next/image";

import PokemonTypeCard from "../PokemonTypeCard/PokemonTypeCard";

export default function PokemonCard({ name, types, sprite, id }) {
  const typeColorCSS = getPokemonTypeColor(types);
  return (
    <div
      className="rounded-xl shadow-lg relative flex flex-col justify-between"
      style={typeColorCSS}
    >
      <div className="w-[calc(100%_-_10px)] h-[calc(100%_-_10px)] top-1 relative bg-white bg-opacity-50 mx-auto my-0 rounded-t-lg pb-4">
        <Image
          className="w-36 mx-auto my-0"
          src={sprite}
          alt={`${name} sprite`}
          width="144"
          height="144"
        />
      </div>
      <div className=" absolute flex justify-between bottom-0 right-0 pb-7 w-[100%] px-2">
        <div
          className=" flex gap-[2px] h-[20px] flex-col"
          style={types.length == 1 ? { alignSelf: "end" } : {}}
        >
          {types.map((type, id) => (
            <PokemonTypeCard typeName={type} key={id} />
          ))}
        </div>
        <p
          className="text-base text-white"
          style={{
            textShadow: `1px 1px 5px ${
              PokemonTypeColors[types[types.length - 1]]
            }`,
          }}
        >
          #<span className="text-4xl">{id}</span>
        </p>
      </div>
      <h2 className="mx-auto my-0 w-[100%] rounded-b-md h-8 text-center text-white font-medium text-[21px] capitalize ">
        {name}
      </h2>
    </div>
  );
}
