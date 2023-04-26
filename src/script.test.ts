import { search } from "./script";

const dbMock = [
  "dogs.com",
  "souprecipes.com",
  "flowers.com",
  "animails.com",
  "dogpictures.com",
  "myfavoritedogs.com",
];

describe("search function", () => {
  test("testing with 'dog' input", () => {
    const result = search("dog", dbMock);
    const expected = ["dogs.com", "dogpictures.com", "myfavoritedogs.com"];
    expect(result).toStrictEqual(expected);
  });

  test("work with undefined and null input", () => {
    // @ts-ignore
    const resultUndefined = search(undefined, dbMock);
    // @ts-ignore
    const resultNull = search(null, dbMock);
    const expected = [];
    expect(resultUndefined).toStrictEqual(expected);
    expect(resultNull).toStrictEqual(expected);
  });

  test("does not return more then 3 matches", () => {
    const result = search(".com", dbMock);
    expect(result.length).toBeLessThanOrEqual(3);
  });
});
