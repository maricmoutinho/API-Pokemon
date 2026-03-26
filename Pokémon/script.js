async function getPokemon() {
  let div = document.getElementById("pokemon");
 
  div.innerHTML = "<p>Carregando...</p>";
 
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
                <img width="200" src="${foto}">
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