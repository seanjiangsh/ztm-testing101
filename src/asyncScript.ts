export const getPeople = async () => {
  const url = "https://swapi.py4e.com/api/people/";
  const fetchResult = await fetch(url);
  if (!fetchResult.ok) return;
  const json = await fetchResult.json();
  const { count, results } = json;
  return { count, results };
};
