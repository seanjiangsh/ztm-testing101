const database = [
  "cats.com",
  "souprecipes.com",
  "flowers.com",
  "animails.com",
  "catpictures.com",
  "myfavoritecats.com",
];

export const search = (searchInput: string, db: Array<string>) => {
  const matches = db.filter((website) => website.includes(searchInput));
  return matches.length > 3 ? matches.slice(0, 3) : matches;
};
