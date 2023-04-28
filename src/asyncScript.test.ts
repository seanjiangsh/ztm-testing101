import { getPeople } from "./asyncScript";

describe("async function", () => {
  test("calls swapi to get people", async () => {
    // * assert has 2 "assertions(expect)" to be called
    expect.assertions(2);
    const result = await getPeople(fetch);
    expect(result?.count).toEqual(87);
    expect(result?.results.length).toBeGreaterThan(5);
  });
  test("get people with mocked fetch", async () => {
    // * assert has 2 "assertions(expect)" to be called
    expect.assertions(4);
    const mockResult = { count: 87, results: [0, 1, 2, 3, 4, 5] };
    const mockJson = { ok: true, json: () => Promise.resolve(mockResult) };
    const mockFetch = jest.fn().mockReturnValue(Promise.resolve(mockJson));
    const result = await getPeople(mockFetch);
    expect(mockFetch.mock.calls.length).toBe(1);
    expect(mockFetch).toBeCalledWith("https://swapi.py4e.com/api/people");
    expect(result?.count).toEqual(87);
    expect(result?.results.length).toBeGreaterThan(5);
  });
});
