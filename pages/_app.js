import "@/styles/globals.css";
import { useState } from "react";
import Link from "next/link";
import InputSearch from "@/components/InputSearch/InputSearch";

export default function App({ Component, pageProps }) {
  const [search, setSearch] = useState("");
  return (
    <>
      <div className="text-4xl font-bold pt-4 pb-4 bg-[#e72c3e] text-white pl-5 pr-5 flex justify-between ">
        <Link href="/">
          <h1 className="self-center hover:underline">Pokédex</h1>
        </Link>
        <InputSearch setSearch={setSearch} />
      </div>
      <Component {...{ ...pageProps, search }} />
    </>
  );
}
