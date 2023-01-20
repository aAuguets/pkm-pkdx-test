import Link from "next/link";

export default function PokemonNavigate({ id }) {
  const icon = (
    <svg className="w-5 h-5" viewBox="5 -6 42 63">
      <path
        d="M40,0 l-40,25 l40,25"
        fill="none"
        stroke="white"
        strokeWidth="5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );

  return (
    <div className="w-full flex justify-between">
      {id > 1 ? <Link href={`/pokemon/${id - 1}`}>{icon}</Link> : <div />}
      {id < 905 && (
        <Link className="rotate-180" href={`/pokemon/${id + 1}`}>
          {icon}
        </Link>
      )}
    </div>
  );
}
