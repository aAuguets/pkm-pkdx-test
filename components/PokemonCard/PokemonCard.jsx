import {
  getPokemonTypeColor,
  PokemonTypeColors,
} from "@/utils/getPokemonTypeColor";

export default function PokemonCard({ name, types, sprite, id }) {
  const typeColorCSS = getPokemonTypeColor(types);
  return (
    <div
      className="rounded-xl shadow-lg relative flex flex-col border-2 justify-between"
      style={typeColorCSS}
    >
      <div className="w-[calc(100%_-_10px)] h-[calc(100%_-_10px)] top-1 relative bg-white bg-opacity-50 mx-auto my-0 rounded-t-lg">
        <img
          className="w-36 mx-auto my-0"
          src={sprite}
          alt={`${name} sprite`}
        />
      </div>
      <p
        className="absolute bottom-0 right-0 pb-6 px-2 text-base text-white"
        style={{
          textShadow: `1px 1px 5px ${
            PokemonTypeColors[types[types.length - 1].type.name]
          }`,
        }}
      >
        No.<span className="text-4xl">{id}</span>
      </p>
      <h2 className="mx-auto my-0 w-[100%] rounded-b-md h-8 text-center text-white font-medium text-[21px] capitalize ">
        {name}
      </h2>
    </div>
  );
}
