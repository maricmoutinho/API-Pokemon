# 🎮 API-Pokémon

Uma **Pokédex simples** desenvolvida com **HTML, CSS e JavaScript**, utilizando a API pública **PokéAPI** para exibir informações de Pokémon de forma dinâmica.

---

## 📌 Funcionalidades

- 🔴 Botão **"Sortear Pokémon"** que busca um Pokémon aleatório  
- 📡 Consumo de API com `fetch`  
- 🖼️ Exibição de imagem oficial do Pokémon  
- 📊 Exibição de informações básicas (nome, ID, etc.)

---

## 🚀 Tecnologias Utilizadas

- HTML5  
- CSS3  
- JavaScript (ES6+)  
- API REST (PokéAPI)

---

## 🔗 API Utilizada

A aplicação utiliza a seguinte rota: https://pokeapi.co/api/v2/pokemon/

A API retorna diversos dados sobre o Pokémon, como:

- Nome  
- Habilidades  
- Tipos  
- Estatísticas  
- Entre outros  

---

## 🖼️ Exibição de Imagem

Por padrão, a API não retorna uma imagem diretamente acessível no campo principal.  
Por isso, foi necessário acessar um caminho específico dentro do objeto retornado:

```javascript
let foto = pokemon.sprites.other["official-artwork"].front_default;
```

## 🎲 Como Funciona o Sorteio

Ao clicar no botão "Sortear Pokémon", o sistema:

1. Gera um número aleatório
2. Usa esse número como ID do Pokémon
3. Faz uma requisição para a API
4. Atualiza os dados na tela dinamicamente

Exemplo de lógica:

```javascript
let id = Math.floor(Math.random() * 151) + 1;
```

--- 

## 💻 Como Executar o Projeto

1. Baixe/clone este repositório ou acesse: 
2. Abra o arquivo index.html no navegador
3. Clique no botão Sortear Pokémon
4. Veja as informações sendo exibidas 🎉

---

## 📷 Resultado Esperado
- Nome do Pokémon
- Imagem oficial
- Informações básicas exibidas na tela

---

##📚 Aprendizados

Este projeto é ideal para praticar:

- Consumo de APIs
- Manipulação do DOM
- JavaScript assíncrono (fetch, async/await)
- Estruturação de projetos front-end

---
## Autoria 
Feito por Maria Clara Moutinho para fins acadêmicos
