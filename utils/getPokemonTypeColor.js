export const PokemonTypeColors = {
  ["normal"]: "#a8a878",
  ["fighting"]: "#c03028",
  ["poison"]: "#a040a0",
  ["ground"]: "#e0c068",
  ["rock"]: "#b8a038",
  ["bug"]: "#a8b820",
  ["ghost"]: "#705898",
  ["steel"]: "#b8b8d0",
  ["fire"]: "#f08030",
  ["water"]: "#6890f0",
  ["grass"]: "#78c850",
  ["electric"]: "#f8d030",
  ["psychic"]: "#f85888",
  ["ice"]: "#98d8d8",
  ["dragon"]: "#7038f8",
  ["dark"]: "#705848",
  ["fairy"]: "#ee99ac",
  ["shadow"]: "#262323",
  ["flying"]: "#a890f0",
};

export const getPokemonTypeColor = (types) => {
  if (types.length === 1) {
    return { backgroundColor: PokemonTypeColors[types[0]] };
  }
  return {
    backgroundImage:
      "linear-gradient(to right," +
      PokemonTypeColors[types[0]] +
      "," +
      PokemonTypeColors[types[1]] +
      ")",
  };
};
