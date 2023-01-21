import Router from "next/router";
import { useCallback } from "react";

export default function InputSearch({ setSearch }) {
  const onKeyDown = useCallback((event) => {
    if (event.key == "Enter") {
      Router.push(`/pokemon/${event.target.value.toLowerCase()}`);
      event.target.value = "";
    }
  }, []);
  return (
    <input
      className="w-[50%] text-sm rounded-full pr-5 pl-5 text-black opacity-80 outline-none"
      type="search"
      id="pkm-search"
      name="poke-search"
      placeholder="Search name..."
      onChange={(event) => setSearch(event.target.value)}
      onKeyDown={onKeyDown}
    ></input>
  );
}
