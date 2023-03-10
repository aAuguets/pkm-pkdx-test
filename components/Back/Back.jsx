import { useRouter } from "next/router";
import BackIcon from "../BackIcon/BackIcon";

export default function Back() {
  const router = useRouter();

  return (
    <button
      className="flex items-center hover:underline"
      type="button"
      onClick={() => router.back()}
    >
      <BackIcon />
      Back
    </button>
  );
}
