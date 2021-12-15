//--------------------------------------------------------------
// CALLBACK AND PROMISES CHALLENGES
//--------------------------------------------------------------

let myArray = ['Bulbasaur', 'Squirtle', 'Charmander'];

// -------------------------------------------------------
// EXERCISE 1) Write a function that adds on or more items to an array.
// -------------------------------------------------------

function addToArray(array, newItem) {
    array.push(newItem);
}

// -------------------------------------------------------
// EXERCISE 2) Write a function that uses the forEach method to render items from that array. 
// -------------------------------------------------------

function renderEach (array) {
    array.forEach(element => {
        console.log(element);
    });
}

// -------------------------------------------------------
// EXERCISE 3) Rewrite the first function so that it also accepts a callback function as a parameter and then executes 
//             it after the array update occurs
// -------------------------------------------------------

function addToArrayTwo(array, newItem, callback) {
    array.push(newItem);
    callback(array);
}


// -------------------------------------------------------
// EXERCISE 4) Now call your updated function passing in 2 arguements. The first is an update to your array, the second should be
//             the function you wrote to render elements.
// -------------------------------------------------------

addToArrayTwo(myArray, 'Rattata', renderEach)

// -------------------------------------------------------
// EXERCISE 5) Create a new Promise and save it in a variable.  The promise accepts a function that has 2 parameters (resolve and reject).
//             Create a conditional that either resolves or rejects the promise and return information from the promise.  
//             Example: isBirthday = true
//                      if (isBirthday) {
//                          resolve('Happy Birthday!')
//                      } else {
//                          reject('just another day :)')
//                      }                                        
// -------------------------------------------------------

let myBirthdayPromise = new Promise((resolve, reject) => {
    let isBirthday = false;
    if (isBirthday) {
        resolve('Happy Birthday')
    } else {
        reject('No birthday party :(')
    }
})

// -------------------------------------------------------
// EXERCISE 6) Use the .then and .catch methods to console log a statement using the information returned from the resolve or reject
// -------------------------------------------------------

myBirthdayPromise.then((message) => {
    console.log(message)
})
.catch((noBDay) => {
    console.log(noBDay)
})

// -------------------------------------------------------
// EXERCISE 7) Change the value of your truthy statement and make sure both your .then and .catch work!
// -------------------------------------------------------

