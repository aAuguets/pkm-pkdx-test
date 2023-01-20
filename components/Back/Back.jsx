import { useRouter } from "next/router";

export default function Back() {
  const router = useRouter();

  return (
    <button type="button" onClick={() => router.back()}>
      <svg className="w-10 h-10" viewBox="5 -6 42 63">
        <path
          d="M40,0 l-40,25 l40,25"
          fill="none"
          stroke="white"
          strokeWidth="5"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>
    </button>
  );
}
