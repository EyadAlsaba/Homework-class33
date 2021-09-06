'use strict';
/*------------------------------------------------------------------------------
Complete the four functions provided in the starter `index.js` file:

`fetchData`: In the `fetchData` function, make use of `fetch` and its Promise 
  syntax in order to get the data from the public API. Errors (HTTP or network 
  errors) should be logged to the console.

`fetchAndPopulatePokemons`: Use `fetchData()` to load the pokemon data from the 
  public API and populate the `<select>` element in the DOM.
  
`fetchImage`: Use `fetchData()` to fetch the selected image and update the 
  `<img>` element in the DOM.

`main`: The `main` function orchestrates the other functions. The `main` 
  function should be executed when the window has finished loading.

Use async/await and try/catch to handle promises.

Try and avoid using global variables. As much as possible, try and use function 
parameters and return values to pass data back and forth.
------------------------------------------------------------------------------*/

//Making the function request and checking if there is something wrong from the server!
async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

async function fetchAndPopulatePokemons() {
  //Make the request and get the data!
  const data = await fetchData('https://pokeapi.co/api/v2/pokemon?limit=20');
  const pokemons = data.results;

  // select the element to inject your data
  const selectList = document.querySelector('.select-list');
  selectList.textContent = '';

  // Handel the user choice when click on the option to display the img!
  const handelUserOption = (event) => {
    pokemons.forEach((pokemon) => {
      if (pokemon.name === event.target.value) {
        fetchImage(pokemon.url);
      }
    });
  };

  //The onchange event occurs when the value of an element has been changed.
  selectList.addEventListener('change', handelUserOption);

  // Create the DEFAULT 'Option' tag,set it's text and append it to the select tag
  const option = document.createElement('option');
  option.textContent = 'Select one Pokemon';
  selectList.appendChild(option);

  // create the the options (choices) and display the name on them!
  pokemons.forEach((pokemon, i) => {
    const option = document.createElement('option');
    option.value = pokemon.name;
    option.textContent = `${i + 1} - ${pokemon.name}`;
    selectList.appendChild(option);
  });
}

async function fetchImage(url) {
  // Make the request and get the data that's needed!
  const data = await fetchData(url);
  const imgUrl = data.sprites.front_default;

  // create and select the tag to inject the data!
  const img = document.createElement('img');
  const imagesContainer = document.querySelector('.images-container');

  imagesContainer.textContent = '';
  img.src = imgUrl;
  //Append the element!
  imagesContainer.appendChild(img);
}

function main() {
  // Create the elements
  const getDataBtn = document.createElement('button');
  const selectList = document.createElement('select');
  const imagesContainer = document.createElement('div');

  // Set classes on them to select them later on!
  imagesContainer.classList.add('images-container');
  selectList.classList.add('select-list');

  // Set the attribute needed and some text
  getDataBtn.setAttribute('type', 'submit');
  getDataBtn.textContent = 'Get Pokemon';

  // Add the event when the user click on the button!
  getDataBtn.addEventListener('click', () => {
    fetchAndPopulatePokemons();
  });
  // Append all elements you've created!
  document.body.append(imagesContainer, getDataBtn, selectList);
}
//When the page is loaded, run my app!
window.addEventListener('load', main);
