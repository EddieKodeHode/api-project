// ------------------------------------
// fetch api
// ------------------------------------

// fetch is function that is built right into the language.
// we pass in an arguement which is the resource we want to fetch like an api endpoint or a local resource


console.log(fetch('https://jsonplaceholder.typicode.com/posts/1'))

fetch('https://jsonplaceholder.typicode.com/posts/1')
.then((response) => {
    console.log('resolved', response)
    return response.json()
    // this first call returns the response object .
    // inside the _proto in the object we see the mehtods we can apply to the reponse object.
    // the .json method we can use on the reponse object to get the data in a useable format.
    // we then need to return the value to use in our next .then
}).then(data => {
    console.log(data)
})
.catch(err => console.log('rejected', err))

// to display the data we need to package our rendering functionality in a function.  We then pass
// that into our fetch function and pass the data in as an arguement.  Using the example above we get:

function displayData(data) {
  let h1 = document.querySelector('h1')
  let p = document.querySelector('p')
  h1.textContent = `${data.userId}`
  p.textContent = `${data.title}`
}

fetch('https://jsonplaceholder.typicode.com/posts/1')
.then((response) => {
  console.log('resolved', response)
  return response.json()
}).then(data => {
  console.log(data)
  displayData(data)
})
.catch(err => console.log('rejected', err))
// If we want we can render more of data in just a couple of lines


function renderCharacterPage(data) {
    data.forEach(character => {
        const {name, aliases} = character


        let div = document.createElement('div')
        div.classList.add('container')
        let title = document.createElement('h1')
        name === "" ? title.textContent = `${aliases[0]}` : title.textContent = `${name}`
        let gender = document.createElement('p')
        gender.textContent = `${character.gender}`
        div.appendChild(title)
        div.appendChild(gender)
        body.appendChild(div)
    })
}
const body = document.querySelector('body')

const input = document.querySelector('input')

searchType = input.value


searchType = 'characters'
let itemsPerPage = 20


fetch(`https://www.anapioficeandfire.com/api/${searchType}?page=${1}&pageSize=${50}`)
.then((response) => {
    return response.json()
}).then((transformedData) => {
    console.log(transformedData)
    renderCharacterPage(transformedData)
})