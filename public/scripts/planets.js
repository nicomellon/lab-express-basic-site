console.log("planets script loaded");

const populateTable = (data) => {
  const name = document.querySelector(".planet-name");
  name.innerText = data.name;
  const population = document.querySelector(".planet-population");
  population.innerText = data.population;
  const diameter = document.querySelector(".planet-diameter");
  diameter.innerText = `${data.diameter} km`;
  const terrain = document.querySelector(".planet-terrain");
  terrain.innerText = data.terrain;
  const gravity = document.querySelector(".planet-gravity");
  gravity.innerText = data.gravity;
  const climate = document.querySelector(".planet-climate");
  climate.innerText = data.climate;
  const orbit = document.querySelector(".planet-orbit");
  orbit.innerText = `${data.orbital_period} days`;
  const rotation = document.querySelector(".planet-rotation");
  rotation.innerText = `${data.rotation_period} hours`;
};

const getPlanetInfo = async () => {
  try {
    const url = `${baseUrl}/planets/${planetsSelect.value}`;
    const res = await fetch(url);
    const data = await res.json();
    populateTable(data);
  } catch (error) {
    console.error(error);
    buildErrorMsg();
  }
};

const planetsSelect = document.querySelector(".planet-select");
planetsSelect.addEventListener("change", getPlanetInfo);

getPlanetInfo();
