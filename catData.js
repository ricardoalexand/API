let para = document.querySelector("p")
let button = document.querySelector("button")

button.addEventListener('click', function() {


// 1. Create a fetch request accessing the db.json file

   fetch("./db.json")
    
// 2. Use the .then method and convert the response to JSON
   .then(response => response.json())


// 3. Use a second .then method to access the data property of the JSON.
   .then(data => {
     let catFacts = data.facts
   
  
// In the body of the second .then method:
    // 4. Using dot notation, store the facts of the data in a variable called 'catFacts'.
    // 5. Uncomment the randomFact variable.
  
     let randomFact = catFacts[Math.floor(Math.random() * catFacts.length)].detail;

    // 6. Select the para variable and update the innerHTML property to the randomFact variable.
    para.innerHTML = randomFact
   })

});