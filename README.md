🎮 API-Pokémon
Uma Pokédex simples desenvolvida com HTML, CSS e JavaScript, utilizando a API pública PokéAPI para exibir informações de Pokémon de forma dinâmica.
Agora evoluída para uma **Progressive Web App (PWA)**, com suporte a funcionamento offline e uso de recursos de hardware do dispositivo.

📌 Funcionalidades
🔴 Botão "Sortear Pokémon" que busca um Pokémon aleatório
📡 Consumo de API com fetch
🖼️ Exibição de imagem oficial do Pokémon
📊 Exibição de informações básicas (nome, tipo, etc.)
📍 Uso de geolocalização (recurso de hardware do dispositivo)
📲 Instalável como aplicativo (PWA)
⚡ Funcionamento offline com Service Worker

🚀 Tecnologias Utilizadas
HTML5
CSS3
JavaScript (ES6+)
API REST (PokéAPI)
Service Worker
Web App Manifest

🔗 API Utilizada
A aplicação utiliza a seguinte rota:
https://pokeapi.co/api/v2/pokemon/

A API retorna diversos dados sobre o Pokémon, como:

Nome
Habilidades
Tipos
Estatísticas
Entre outros

🖼️ Exibição de Imagem
Por padrão, a API não retorna uma imagem diretamente acessível no campo principal.
Por isso, foi necessário acessar um caminho específico dentro do objeto retornado:

let foto = pokemon.sprites.other["official-artwork"].front_default;

🎲 Como Funciona o Sorteio
Ao clicar no botão "Sortear Pokémon", o sistema:

Gera um número aleatório
Usa esse número como ID do Pokémon
Faz uma requisição para API
Atualiza os dados na tela dinamicamente

Exemplo de lógica:

let id = Math.floor(Math.random() * 151) + 1;

📱 Funcionalidades PWA
O projeto foi transformado em um Progressive Web App (PWA), permitindo:

Instalação no dispositivo (como app)
Acesso rápido pela tela inicial
Funcionamento offline
Melhor experiência mobile

Isso foi possível através de:

Manifest.json (configuração do app)
Service Worker (cache e offline)

📍 Uso de Hardware
O projeto utiliza a API de geolocalização do navegador para acessar a localização do usuário (mediante permissão), demonstrando integração com recursos de hardware.

💻 Como Executar o Projeto
Baixe/clone este repositório ou acesse:
https://api-pokemon23.netlify.app/

Abra o link no navegador
Clique no botão "Sortear Pokémon"
Veja as informações sendo exibidas 🎉

📷 Resultado Esperado
Nome do Pokémon
Imagem oficial
Informações básicas exibidas na tela
Solicitação de localização
Funcionamento mesmo sem internet (após primeiro acesso)

📚 Aprendizados
Este projeto é ideal para praticar:

Consumo de APIs
Manipulação do DOM
JavaScript assíncrono (fetch, async/await)
Estruturação de projetos front-end
Conceitos de PWA (manifest e service worker)
Uso de recursos de hardware no navegador

Autoria
Feito por Maria Clara Moutinho para fins acadêmicos

