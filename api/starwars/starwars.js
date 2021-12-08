const charactersArray = [];

function creatTheArray() {
  for (let i = 0; i < 10; i++) {
    getFetch(i + 1);
  }
}

async function getFetch(index) {
  const res = await fetch(`https://swapi.dev/api/people/${index}/`);
  const data = await res.json();

  const res2 = await fetch(`${data.homeworld}`);
  const data2 = await res2.json();

  console.log(data2);
  generateArray(data, data2);
}

function generateArray(data, data2) {
  let obj = {};
  obj.name = data.name;
  obj.hair = data.hair_color;
  obj.height = data.height;
  // console.log(data.homeworld);
  obj.planet = {};
  obj.planet.name = data2.name;
  obj.planet.population = data2.population;
  charactersArray.push(obj);
  console.log(charactersArray);
}

creatTheArray();
