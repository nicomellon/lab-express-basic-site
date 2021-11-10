console.log("index script loaded");

const baseUrl = "https://swapi.dev/api/";

const buildErrorMsg = () => {
  const filmsDiv = document.querySelector(".films-div");

  const errorMsg = document.createElement("p");
  errorMsg.innerText = "Rebel communications intercepted by the Sith";
  filmsDiv.appendChild(errorMsg);
};
