export default function FeatureBox({ values, unit = "", title, style }) {
  return (
    <div
      className="flex flex-col w-[33%] text-black justify-between h-[90px] sm:h-[110px] "
      style={style}
    >
      <span className="text-sm sm:text-base font-light top-0">{title}</span>
      <div className=" text-base sm:text-lg flex flex-col justify-center h-full">
        {values.map((value, id) => (
          <span
            className="first-letter:capitalize"
            key={id}
          >{`${value} ${unit}`}</span>
        ))}
      </div>
    </div>
  );
}
