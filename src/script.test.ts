import { search } from "./script";

const dbMock = [
  "dogs.com",
  "souprecipes.com",
  "flowers.com",
  "animails.com",
  "dogpictures.com",
  "myfavoritedogs.com",
];

test("this is a test", () => {
  const result = search("dog", dbMock);
  const expected = ["dogs.com", "dogpictures.com", "myfavoritedogs.com"];
  expect(result).toStrictEqual(expected);
});
