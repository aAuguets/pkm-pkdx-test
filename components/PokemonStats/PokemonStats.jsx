import StatBar from "./StatBar/StatBar";
import StatLine from "./StatBar/StatBar";

export default function PokemonStats({ mainColor, stats }) {
  return (
    <article className="pt-5 pb-5">
      <h2
        className="font-bold text-center text-2xl"
        style={{ color: mainColor }}
      >
        Base Stats
        <div className="pt-5">
          <StatBar
            statValue={stats["hp"]}
            statName="HP"
            mainColor={mainColor}
          />
          <StatBar
            statValue={stats["attack"]}
            statName="ATK"
            mainColor={mainColor}
          />
          <StatBar
            statValue={stats["defense"]}
            statName="DEF"
            mainColor={mainColor}
          />
          <StatBar
            statValue={stats["special-attack"]}
            statName="SATK"
            mainColor={mainColor}
          />
          <StatBar
            statValue={stats["special-defense"]}
            statName="SDEF"
            mainColor={mainColor}
          />
          <StatBar
            statValue={stats["speed"]}
            statName="SPD"
            mainColor={mainColor}
          />
        </div>
      </h2>
    </article>
  );
}
