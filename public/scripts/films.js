console.log("films script loaded");

const filmImages = [
  "/assets/films/aNewHope.jpg",
  "/assets/films/theEmpireStrikesBack.jpg",
  "/assets/films/theReturnOfTheJedi.jpg",
  "/assets/films/thePhantomMenace.jpg",
  "/assets/films/attackOfTheClones.jpg",
  "/assets/films/revengeOfTheSith.jpg",
];

const populateDom = (film, index) => {
  const filmsContainer = document.querySelector(".films-container");

  const filmDiv = document.createElement("div");
  filmDiv.classList.add("film-div");
  filmDiv.classList.add("flex");
  filmDiv.classList.add("columns");

  const title = document.createElement("p");
  title.classList.add("film-title");
  title.innerText = film.title;

  const image = document.createElement("img");
  image.src = filmImages[index];
  image.classList.add("film-img");

  const date = document.createElement("p");
  date.innerText = film.release_date.slice(0, 4);

  filmsContainer.appendChild(filmDiv);
  filmDiv.appendChild(title);
  filmDiv.appendChild(image);
  filmDiv.appendChild(date);
};

const loadFilms = async () => {
  try {
    const url = baseUrl + "films";
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.results);
    data.results.forEach((film, index) => populateDom(film, index));
  } catch (error) {
    console.error(error);
    buildErrorMsg();
  }
};

loadFilms();
