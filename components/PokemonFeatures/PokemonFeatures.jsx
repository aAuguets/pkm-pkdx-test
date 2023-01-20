import FeatureBox from "./FeatureBox/FeatureBox";

export default function PokemonFeatures({
  pokemonAbilities,
  height,
  weight,
  mainColor,
}) {
  return (
    <article
      className="font-bold text-center pt-5 pb-5"
      style={{ color: mainColor }}
    >
      <h2 className="text-2xl">About</h2>
      <div className="flex justify-around w-full text-lg h-auto pt-5">
        <FeatureBox values={[height]} unit="" title="Height" />
        <FeatureBox
          values={[weight]}
          unit=""
          title="Weight"
          style={{
            borderLeft: `1px solid ${mainColor}`,
            borderRight: `1px solid ${mainColor}`,
          }}
        />
        <FeatureBox
          values={pokemonAbilities}
          unit=""
          title={pokemonAbilities.length > 1 ? "Abilities" : "Ability"}
        />
      </div>
    </article>
  );
}
