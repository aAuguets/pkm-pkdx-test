export default function FeatureBox({ values, unit = "", title, style }) {
  return (
    <div
      className="flex flex-col self-center w-[33%] text-black justify-between "
      style={style}
    >
      <div className="flex flex-col h-[60px] justify-center">
        {values.map((value, id) => (
          <span className="capitalize" key={id}>{`${value} ${unit}`}</span>
        ))}
      </div>
      <span className="text-base font-light">{title}</span>
    </div>
  );
}
