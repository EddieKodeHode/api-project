// fetch('https://pokeapi.co/api/v2/pokemon/1/')

//--------------------------------------------------------------
// EXERCISES FOR THE FETCH FUNCTION 
//--------------------------------------------------------------

//--------------------------------------------------------------
// EXERCISE 1) CALL A FETCH FUNCTION.  PASS IT A URI TO FETCH SOME DATA.  YOU CAN USE ANY API YOU WANT
//             BUT YOU CAN USE https://www.anapioficeandfire.com/api/ IF YOU DON'T WANT TO FIND ONE ON YOUR
//             OWN. CONSOLE LOG THE RESPONSE OBJECT BY USING THE .then FUNCTION.
//--------------------------------------------------------------

// fetch('https://pokeapi.co/api/v2/pokemon/1/')
//     .then(response => console.log(response))

//--------------------------------------------------------------
// EXERCISE 2) CONVERT THE RESPONSE OBJECT BY USING THE .json METHOD ON IT AND RETURN ITS VALUE. USE ANOTHER 
//             .then METHOD TO TAKE THE RETURNED VALUE AND CONSOLE LOG IT.
//--------------------------------------------------------------

// fetch('https://pokeapi.co/api/v2/pokemon/1/')
//     .then((response) => {
//         console.log(response)
//         return response.json()
//     })
//     .then(data => {
//         console.log(data)
//     })
//     .catch(err => console.log(console.log(err)))

//--------------------------------------------------------------
// EXERCISE 3) USE THE RESULT TO FIND ANOTHER URL TO FETCH DATA FROM.  I.E. books in the ice and fire api.  
//             FETCH DATA FROM THAT URL INSTEAD.  
//--------------------------------------------------------------

// function newFetch(data) {
//     fetch(data)
//         .then((response) => {
//             console.log(response)
//             return response.json()
//         })
//         .then(data => {
//             console.log(data)
//         })
//         .catch(err => console.log(console.log(err)))
// }

// fetch('https://pokeapi.co/api/v2/pokemon/1/')
//     .then((response) => {
//         console.log(response)
//         return response.json()
//     })
//     .then(data => {
//         console.log(data)
//         newFetch(data.location_area_encounters)
//     })
//     .catch(err => console.log(err))

//--------------------------------------------------------------
// EXERCISE 4) TRY ADDING A .catch AT THE END OF YOUR FETCH AND PROVIDE AN INVALUE URL.  CONSOLE LOG 
//             THE RESULTING ERROR.
//--------------------------------------------------------------

// fetch('brokenurl')
//     .catch(err => console.log(err))

//--------------------------------------------------------------
// EXERCISE 5) NOW THAT WE HAVE A FETCH REQUEST THTA RETURNS USABLE DATA.  WRITE A FUNCTION THAT CAN TAKE THE DATA
//             AND RENDER SOMETHING WITH IT. I.E. THE NAME OF THE FIRST 10 BOOKS PROVIDED BY THE API. THE FUNCTION
//             WILL NEED TO HAVE A PARAMETER THAT ACCEPTS data AND WILL NEED TO RUN A .foreach METHOD ON THE ARRAY
//             TO RENDER EACH NAME.  YOU MIGHT HAVE TO USE THE .createElement AND .appendChild METHODS AS WELL.  IF
//             YOU NEED TO SPEND TIME UNDERSTANDING THEM GOOGLE OR FEEL FREE TO ASK ME FOR HELP. 
//--------------------------------------------------------------

function displayPokemon(data) {
    let pokeName = document.createElement('h1')
    pokeName.textContent = data.name
    document.querySelector('body').appendChild(header)
}

fetch('https://pokeapi.co/api/v2/pokemon/1/')
    .then((response) => {
        console.log(response)
        return response.json()
    })
    .then(data => {
        console.log(data)
        displayPokemon(data)
    })
    .catch(err => console.log(err))

//--------------------------------------------------------------
// EXERCISE 6) PASS YOU RENDERING FUNCTION TO THE PART OF THE FETCH FUNCTION THAT HANDELS USABLE DATA.  PASS THAT DATA INTO 
//             YOUR FUNCTION AND IT MAKE SURE IT ACUTALLY RENDERS WHAT YOU HAVE ASKED FOR.   
//--------------------------------------------------------------

//--------------------------------------------------------------
// EXERCISE 7) PLAY AROUND WITH CREATING DIVS AND PUTTING VARIOUS INFORMATION INTO THEM, FROM THE RESULTS PROVIDED BY 
//             OUR FETCH.  PLAY AROUND WITH CHANGING THE FETCH QUERIES. LIKE ADDING ?pageSize=5 OR ?pageSize=20 TO 
//             THE END OF YOUR URI. FETCH OTHER DATA, SUCH AS THE CHARACTERS OR HOUSES, OR MAYBE USE THE POKEMON OR 
//             STAR WARS API INSTEAD. GET COMFORTABLE WITH HOW TO FETCH DATA AND HOW TO MAKE USE OF IT.  
//--------------------------------------------------------------