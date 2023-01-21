import FeatureBox from "./FeatureBox/FeatureBox";

export default function PokemonFeatures({
  pokemonAbilities,
  height,
  weight,
  mainColor,
}) {
  return (
    <article
      className="font-bold text-center pt-3 pb-5"
      style={{ color: mainColor }}
    >
      <div className="flex justify-around w-full text-lg h-auto pt-5">
        <FeatureBox values={[height / 10]} unit="m" title="Height" />
        <FeatureBox
          values={[weight / 10]}
          unit="kg"
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
