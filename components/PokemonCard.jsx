import { getPokemonTypeColor } from "@/utils/getPokemonTypeColor";

export default function PokemonCard({ name, types, sprite }) {
  const typeColor = getPokemonTypeColor(types);
  return (
    <div
      className="rounded-xl shadow-lg relative flex flex-col border-2 justify-between"
      style={typeColor}
    >
      <div className="w-[calc(100%_-_10px)] h-[calc(100%_-_10px)] top-1 relative bg-white mx-auto my-0 rounded-t-lg">
        <img
          className="w-36 mx-auto my-0 bg-white"
          src={sprite}
          alt={`${name} sprite`}
        />
      </div>
      <h2 className="mx-auto my-0 w-[100%] rounded-b-md h-8 text-center text-white font-medium text-[21px] capitalize ">
        {name}
      </h2>
    </div>
  );
}
