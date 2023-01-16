import "@/styles/globals.css";
import Image from "next/image";

export default function App({ Component, pageProps }) {
  const { pokeHeader } = pageProps;
  return (
    <>
      <div className="text-4xl font-bold pt-4 pb-4 bg-[#e72c3e] text-white pl-5 pr-5 flex justify-between ">
        <h1 className="self-center">Pokédex</h1>
        {pokeHeader && (
          <Image
            className="w-16 "
            src={pokeHeader.sprite}
            alt={`${pokeHeader.name} header sprite`}
            width="64"
            height="64"
          />
        )}
      </div>
      <Component {...pageProps} />
    </>
  );
}
