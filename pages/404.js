import Image from "next/image";
import Link from "next/link";

const Custom404Page = () => {
  return (
    <div className=" flex flex-col w-full items-center text-white gap-10 pt-40">
      <span className="text-5xl">Error 404</span>
      <Image
        className="w-[50%] mx-auto my-0 max-w-xs"
        src={
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/816.png"
        }
        alt={`Sobble sprite`}
        width="144"
        height="144"
      />
      <Link className="text-3xl hover:underline" href="/">
        Return Home
      </Link>
    </div>
  );
};

export default Custom404Page;
