import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <h1 className="text-4xl font-bold pt-4 pb-4 bg-[#e72c3e] text-white pl-5 ">
        Pokedex
      </h1>
      <Component {...pageProps} />
    </>
  );
}
