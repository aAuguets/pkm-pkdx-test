import { PokemonTypeColors } from "@/utils/getPokemonTypeColor";

export default function PokemonCard({ typeName }) {
  return (
    <span
      className="rounded-full text-[12px] min-w-[30px] pl-1 pr-1 uppercase    "
      style={{ backgroundColor: PokemonTypeColors[typeName] }}
    >
      {typeName}
    </span>
  );
}
