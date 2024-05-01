let search = document.querySelector(".search");
let pokemonName = document.querySelector(".pokemon-name");
let pokemonImage = document.querySelector(".pokemon-image")

search.addEventListener("click", function() {

  let pokemon = document.querySelector(".pokemon").value;
  let pokemonURL = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;


  
// 1. Create a fetch request using the pokemonURL
   fetch(pokemonURL)
     

// 2. Use the .then method and convert the response to JSON
   .then(response => response.json())
   
  
// 3. Use the .then method to access the data property of the JSON.
   .then(data => {
    
  
// 4. Log the data to the console.
  
     console.log(data)
      

  

// 5. Uncomment and replace the logged data with the two lines below:
 pokemonName.innerHTML = `<h2>${data.name}</h2>`;
 pokemonImage.innerHTML = `<img src="${data.sprites.front_default}">`;

   })
     
});

