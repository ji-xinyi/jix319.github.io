//creating variable called body
//targeting html document and using dot. notation and linking it to html
let body = document.body;


//creating function turnOnLight
//variable body, classlist, checks which classes are on the body
//add class to body, class list called light
//variable button, add class called ButtonOn
function turnOnLight() {
    body.classList.add("light");
    button.classList.add("buttonOn");
  }
  

  //declaring the variable button, looking at the document 
  //querying and selecting the first element, with the class ".button" 
  let button = document.querySelector(".button");

  //variable button gets event listener
  //event is click and result is the function being used
  button.addEventListener("click", turnOnLight);



let headline = document.querySelector("h1");
let headlines = document.querySelectorAll("h1");

console.log(headline);
console.log(headlines);