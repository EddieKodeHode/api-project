// Const file paths
const pokemonIMG = document.getElementById('pokemon-img');
const pokemonName = document.getElementById('pokemon-name');
const pokemonID = document.getElementById('pokemon-ID');
const pokemonType = document.getElementById('pokemon-type')
// const type1 = document.getElementById('type-1')
// const type2 = document.getElementById('type-2')

// Random Number Generator

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// 

function newPokemonIMG(img) {
    pokemonIMG.style.backgroundImage = 'url(' + img + ')';
}

function newPokemonName(name) {
    pokemonName.innerHTML = name;
}

function newPokemonID(id) {
    pokemonID.innerHTML = id;
}

// function newPokemonType(one) {
//     type1.innerHTML = one;
// }

function newPokemonType(types){
    pokemonType.innerHTML = '';

    types.forEach(element => {
        console.log(element)
        const tag = document.createElement('p');
        const text = document.createTextNode(element.type.name);
        tag.appendChild(text)
        pokemonType.appendChild(tag)
        // type1.innerHTML = element.type.name
    });
}

// Fetch

fetch('https://pokeapi.co/api/v2/pokemon/1/')
    .then((response) => {
        console.log(response)
        return response.json()
    })
    .then(data => {
        console.log(data)
    })
    .catch(err => console.log(console.log(err)))

function fetchPokemon() {
    fetch('https://pokeapi.co/api/v2/pokemon/' + randomNumber(1, 898) + '/')
    .then((response) => {
        console.log(response)
        return response.json()
    })
    .then(data => {
        console.log(data)
        newPokemonName(data.name)
        newPokemonIMG(data.sprites.front_default)
        newPokemonID(data.id)
        newPokemonType(data.types)
    })
    .catch(err => console.log(console.log(err)))
}