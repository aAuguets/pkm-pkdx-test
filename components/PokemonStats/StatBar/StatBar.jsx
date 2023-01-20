export default function StatBar({ statValue, statName, mainColor }) {
  return (
    <div className="flex h-9">
      <span className="w-20 border-r-[1px] border-black/10 text-lg">
        {statName}
      </span>
      <span className="w-20 text-lg">{statValue}</span>
      <div className="w-full rounded-full h-2 bg-black/10 self-center">
        <div
          className=" h-2 rounded-full"
          style={{
            width: `${(statValue * 100) / 255}%`,
            backgroundColor: mainColor,
          }}
        ></div>
      </div>
    </div>
  );
}
