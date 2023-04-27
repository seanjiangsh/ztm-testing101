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
    expect.assertions(1);
    const result = search("dog", dbMock);
    const expected = ["dogs.com", "dogpictures.com", "myfavoritedogs.com"];
    expect(result).toStrictEqual(expected);
  });

  test("work with undefined and null input", () => {
    expect.assertions(2);
    // @ts-ignore
    const resultUndefined = search(undefined, dbMock);
    // @ts-ignore
    const resultNull = search(null, dbMock);
    const expected: Array<any> = [];
    expect(resultUndefined).toStrictEqual(expected);
    expect(resultNull).toStrictEqual(expected);
  });

  test("does not return more then 3 matches", () => {
    expect.assertions(1);
    const result = search(".com", dbMock);
    expect(result.length).toBeLessThanOrEqual(3);
  });
});
