import { getPeople } from "./asyncScript";

describe("async function", () => {
  test("calls swapi to get people", async () => {
    // * assert has 2 "assertions(expect)" to be called
    expect.assertions(2);

    const result = await getPeople();
    expect(result?.count).toEqual(87);
    expect(result?.results.length).toBeGreaterThan(5);
  });
});
