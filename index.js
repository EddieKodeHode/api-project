// Const file paths
const pokemonIMG = document.getElementById('pokemon-img');
const pokemonName = document.getElementById('pokemon-name');
const pokemonID = document.getElementById('pokemon-ID');
const pokemonType = document.getElementById('pokemon-type');
const pokemonAbility = document.getElementById('pokemon-ability');
const pokemonStats = document.getElementById('pokemon-stats');
const clickMe = document.getElementById('click-me')
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

function newPokemonType(types){
    pokemonType.innerHTML = '';

    types.forEach(element => {
        let tag = document.createElement('p');
        tag.textContent = element.type.name;
        document.getElementById('pokemon-type').appendChild(tag);
    });
}

function newPokemonAbility(ability){
    pokemonAbility.innerHTML = '';

    ability.forEach(element => {
        let tag = document.createElement('p');
        tag.textContent = element.ability.name;
        document.getElementById('pokemon-ability').appendChild(tag);
    });
}

function newPokemonStats(stats){
    pokemonStats.innerHTML = '';

    stats.forEach(element => {
        let tag = document.createElement('p');
        tag.textContent = element.base_stat;
        document.getElementById('pokemon-stats').appendChild(tag);
    });
}

// Animation
// function transitionOut() {
//     pokemonIMG.style.animationName = 'ball';
//     pokemonIMG.style.animationIterationCount = '1';
// }

// function transitionIn() {
//     pokemonIMG.style.animationName = 'hop'
//     pokemonIMG.style.animationIterationCount = 'infinite'
// }


// Fetch

fetch('https://pokeapi.co/api/v2/pokemon/1/')
    .then((response) => {
        console.log(response);
        return response.json();
    })
    .then(data => {
        console.log(data)
    })
    .catch(err => console.log(console.log(err)));

function fetchPokemon(number) {
    // transitionOut();
    fetch('https://pokeapi.co/api/v2/pokemon/' + number + '/')
    .then((response) => {
        // console.log(response)
        return response.json();
    })
    .then(data => {
        console.log(data);
        // transitionIn()
        newPokemonName(data.name);
        newPokemonIMG(data.sprites.front_default);
        newPokemonID(data.id);
        newPokemonType(data.types);
        newPokemonAbility(data.abilities);
        newPokemonStats(data.stats);
        
    })
    .catch(err => console.log(console.log(err)));
}

function fetchClick() {
    fetchPokemon(randomNumber(1, 898));
};

clickMe.addEventListener("click", fetchClick);

// Run at start of page 
fetchPokemon(randomNumber(1, 898));