import Link from "next/link";
import BackIcon from "../BackIcon/BackIcon";

export default function PokemonNavigate({ id }) {
  return (
    <div className="w-full flex justify-between">
      {id > 1 ? (
        <Link href={`/pokemon/${id - 1}`}>
          <BackIcon />
        </Link>
      ) : (
        <div />
      )}
      {id < 905 && (
        <Link className="rotate-180" href={`/pokemon/${id + 1}`}>
          <BackIcon />
        </Link>
      )}
    </div>
  );
}
