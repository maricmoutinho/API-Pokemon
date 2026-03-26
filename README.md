# API-Pokemon

API-Pokémon
API-Pokémon 🎮 Pokédex Simples com API

Este é um projeto simples desenvolvido com HTML, CSS e JavaScript que utiliza a API pública PokéAPI para exibir informações de Pokémon de forma dinâmica.

📌 Funcionalidades 🔴 Botão “Sortear Pokémon” que busca um Pokémon aleatório 📡 Consumo de API com fetch 🖼️ Exibição de imagem oficial do Pokémon 📊 Exibição de informações básicas (nome, id, etc.) 🚀 Tecnologias Utilizadas HTML5 CSS3 JavaScript (ES6+) API REST (PokéAPI) 🔗 API Utilizada

A aplicação utiliza a seguinte rota:

https://pokeapi.co/api/v2/pokemon/

A API retorna diversos dados sobre o Pokémon, como nome, habilidades, tipos, estatísticas, entre outros.

🖼️ Exibição de Imagem

Por padrão, a API não retorna uma imagem diretamente acessível no campo principal. Por isso, foi necessário acessar um caminho específico dentro do objeto retornado:

let foto = pokemon.sprites.other["official-artwork"].front_default;

Esse trecho permite obter a arte oficial do Pokémon, garantindo uma imagem de melhor qualidade.

🎲 Como Funciona o Sorteio

Ao clicar no botão vermelho “Sortear Pokémon”, o sistema:

Gera um número aleatório Usa esse número como ID do Pokémon Faz uma requisição para a API Atualiza os dados na tela dinamicamente

Exemplo de lógica:

deixe id = Math.floor(Math.random() * 151) + 1; 💻 Como Executar o Projeto Baixe ou clone este repositório Abra o arquivo index.html no navegador Clique no botão Sortear Pokémon Veja as informações sendo úteis 🎉 📷 Resultado Esperado Nome do Pokémon Imagem oficial Informações básicas exibidas na tela 📚 Aprendizados

Este projeto é ideal para praticar:

Consumo de APIs com JavaScript Manipulação do DOM Uso de funções assíncronas (async/await) Estruturação de projetos front-end simples 📌 Observação

Nem todos os dados da API vêm de forma direta e intuitiva. Por isso, foi necessário explorar o objeto retornado para encontrar informações específicas, como a imagem oficial.
