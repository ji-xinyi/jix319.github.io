
// If you use a <button> tag you can query the button directly. Otherwise, you can use a CSS class on the element you click, and querySelector that class.
let button = document.querySelector(".button");
let wrapper = document.querySelector(".wrapper");
button.addEventListener("click", function(event) {

    // event target= data associated with it 
    //target is what is clicked on 
  console.log(event, event.target);

  let newItem = document.createElement("div");

  newItem.classList.add("new-content");
//putting text inside of div
  newItem.innerHTML = "But wait, theres more ";
//pending item is placed in wrapper 
  wrapper.appendChild(newItem);
});