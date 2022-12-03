async function get_planet() {
  // fetch("https://www.swapi.tech/api/planets/1/")
  // .then((res) => res.json())
  // .then((data) => console.log(data))
  // .catch((err) => console.error(err));
  const res = await fetch("https://www.swapi.tech/api/planets/" + id);
  let data = await res.json();
  return data.result;
}

async function get_planets() {
  const res = await fetch("https://www.swapi.tech/api/planets/");
  let data = await res.json();
  return data.results;
}

async function get_characters() {
  const res = await fetch("https://www.swapi.tech/api/people/");
  let data = await res.json();
  console.log(data);

  return data.results;
}

async function get_character(id) {
  const res = await fetch("https://www.swapi.tech/api/people/" + id);
  let data = await res.json();
  return data.result;
}

export { get_planet, get_planets, get_character, get_characters };
