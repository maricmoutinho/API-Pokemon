async function getPokemon() {
  let div = document.getElementById("pokemon");
 
  div.innerHTML = "<p>📍 Obtendo localização...</p>";

  navigator.geolocation.getCurrentPosition(
    (position) => {
      console.log("Latitude:", position.coords.latitude);
      console.log("Longitude:", position.coords.longitude);
    },
    (error) => {
      console.error("Erro ao obter localização:", error);
    }
  );

  try {
    let id = Math.floor(Math.random() * 151) + 1;
 
    console.log("ID sorteado:", id);
 
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
 
    if (!response.ok) {
      throw new Error("Erro na API");
    }
 
    let pokemon = await response.json();
 
    console.log(pokemon);
 
    let foto = pokemon.sprites.other["official-artwork"].front_default;
 
    div.innerHTML = `
            <div>
                <h3 style="text-transform: capitalize;">${pokemon.name}</h3>
                <img width="200" src="${foto}" alt="Imagem do Pokémon ${pokemon.name}">
                <p><strong>Tipo:</strong> ${pokemon.types.map((t) => t.type.name).join(", ")}</p>
            </div>
        `;
  } catch (erro) {
    console.error(erro);
 
    div.innerHTML = `
            <p style="color:red;">Erro ao carregar Pokémon 😢</p>
        `;
  }
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("service-worker.js")
      .then(() => console.log("Service Worker registrado"))
      .catch(err => console.log("Erro:", err));
  });
}