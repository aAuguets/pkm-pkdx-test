import { PokemonTypeColors } from "@/utils/getPokemonTypeColor";

export default function PokemonTypeCard({ typeName }) {
  return (
    <span
      className="rounded-full text-[11px] min-w-[30px] pl-1 pr-1 uppercase font-mono font-bold border-solid border-[1px] border-white/60 w-fit"
      style={{ backgroundColor: PokemonTypeColors[typeName] }}
    >
      {typeName}
    </span>
  );
}
