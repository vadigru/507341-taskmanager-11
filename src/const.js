
export const Color = {
  BLACK: `black`,
  YELLOW: `yellow`,
  BLUE: `blue`,
  GREEN: `green`,
  PINK: `pink`,
};

export const COLORS = Object.values(Color);

export const DAYS = [`mo`, `tu`, `we`, `th`, `fr`, `sa`, `su`];

export const MONTH_NAMES = [
  `January`,
  `February`,
  `March`,
  `April`,
  `May`,
  `June`,
  `July`,
  `August`,
  `September`,
  `October`,
  `November`,
  `December`,
];

export const FilterType = {
  ALL: `all`,
  ARCHIVE: `archive`,
  FAVORITES: `favorites`,
  OVERDUE: `overdue`,
  REPEATING: `repeating`,
  TODAY: `today`,
};

export const FILTER_NAMES = [
  `all`, `overdue`, `today`, `favorites`, `repeating`, `archive`
];

export const DescriptionItems = [
  `Изучить теорию`,
  `Сделать домашку`,
  `Пройти интенсив на соточку`,
];

export const DefaultRepeatingDays = {
  "mo": false,
  "tu": false,
  "we": false,
  "th": false,
  "fr": false,
  "sa": false,
  "su": false,
};
