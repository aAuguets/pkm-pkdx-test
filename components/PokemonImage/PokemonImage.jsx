import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

export default function PokemonImage({ pkmSprites, name }) {
  const [showShiny, setShowShiny] = useState(false);

  useEffect(() => {
    setShowShiny(false);
  }, [name]);

  const changeSprite = useCallback(() => {
    setShowShiny(!showShiny);
  }, [pkmSprites, showShiny]);

  return (
    <div className="relative mx-auto my-0 z-10">
      {pkmSprites?.front_default && (
        <Image
          className="w-[50%] mx-auto my-0 max-w-xs"
          onClick={changeSprite}
          src={
            showShiny && pkmSprites?.front_shiny != null
              ? pkmSprites.front_shiny
              : pkmSprites.front_default
          }
          alt={`${name} sprite`}
          width="144"
          height="144"
        />
      )}
    </div>
  );
}
