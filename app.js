var todos = document.querySelector(".personajes");

todos.addEventListener("click", function () {
  obtenerPersonajes((personajes) => {
    personajes.forEach((personaje) => {
      var div = document.createRange().createContextualFragment(/*html*/ `
      <div>
        <img
          src="${personaje.image}"
          alt="personaje"
        />
        <h2>${personaje.name}</h2>
      </div>
    `);
      var contenedor = document.querySelector(".contenedor");
      contenedor.append(div);
    });
  });
});

function obtenerPersonajes(hecho) {
  fetch("https://rickandmortyapi.com/api/character")
    .then((res) => res.json())
    .then((data) => {
      hecho(data.results);
    })
    .catch((error) => {
      console.log("Error:", error);
    });
}
