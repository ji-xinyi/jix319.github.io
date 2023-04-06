//let body = document.body;
//let headline = document.querySelector("h1");
//let headlines = document.querySelectorAll("h1");

////console.log(headline);
console.log(headlines);

//define function called red
//dot notation for each - for each of the functions in the list sth will be done
//headline 
//function addRed() {
   // headline.classList.toggle("red");
  }
  //toggles red class on headline
 // headline.addEventListener("click", addRed);

 // addRed();


// uses forEach to loop through all of the headlines
//headlines.forEach(function(headline) {
    // add an event listener to each individual headline
  //  headline.addEventListener('click', function (event) {
      // toggle the red class on this headline
     // headline.classList.toggle("red");
    });
  });


let nikaData = {
    // the keys are the items before the :
      bday: "April 2",
    // the values are after the :
      sunSign: "aries",
      moonSign: "scorpio",
      risingSign: "leo",
      venusSign: "taurus",
      height: "5\'6",
      residence: "Queens, NY"
    };
    // then later
    console.log("Nika\'\s birthday is on " + nikaData["bday"]);
    console.log("Nika\'\s big three are: " + nikaData["sunSign"] + " " + nikaData["risingSign"] + " " + nikaData["moonSign"]);
    