// Function to render your items
function renderItems(collection) {
	// The `ul` where the items will be inserted
	const collectionList = document.getElementById('collection')
	
	

	// Loop through each item in the collection array
	collection.forEach(function(item) {


		const itemDetails =
			`
			
				<li> 
				<img src="${item.book}" /> </div> 

				<div class="information">
					<div class="heading"> <h3> Library Card </h3> </div>
					<div class="title"> <h2> ${item.BookTitle} </h2> </div>
					<div class="book-info"> 
					<p> ${item.PublicationYear}, ${item.format} , ${item.Language}. <br>
					Purchased in ${item.PurchaseDate}, from ${item.PurchaseVenue}, ${item.Condition}. </p>
					</div>
					</div>	

					</li>
			
			`
			collectionList.insertAdjacentHTML('beforeend', itemDetails) // Which can we then insert
		
			
	})
	
}
function myFunction() {
	var x = document.getElementById("information");
	if (x.style.display === "none") {
	  x.style.display = "block";
	} else {
	  x.style.display = "none";
	}
  }
  function sortListDir() {
	var list, i, switching, b, shouldSwitch, dir, switchcount = 0;
	list = document.getElementById("collection");
	switching = true;
	// Set the sorting direction to ascending:
	dir = "asc";
	// Make a loop that will continue until no switching has been done:
	while (switching) {
	  // Start by saying: no switching is done:
	  switching = false;
	  b = list.getElementsByTagName("LI");
	  // Loop through all list-items:
	  for (i = 0; i < (b.length - 1); i++) {
		// Start by saying there should be no switching:
		shouldSwitch = false;
		/* Check if the next item should switch place with the current item,
		based on the sorting direction (asc or desc): */
		if (dir == "asc") {
		  if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
			/* If next item is alphabetically lower than current item,
			mark as a switch and break the loop: */
			shouldSwitch = true;
			break;
		  }
		} else if (dir == "desc") {
		  if (b[i].innerHTML.toLowerCase() < b[i + 1].innerHTML.toLowerCase()) {
			/* If next item is alphabetically higher than current item,
			mark as a switch and break the loop: */
			shouldSwitch= true;
			break;
		  }
		}
	  }
	  if (shouldSwitch) {
		/* If a switch has been marked, make the switch
		and mark that a switch has been done: */
		b[i].parentNode.insertBefore(b[i + 1], b[i]);
		switching = true;
		// Each time a switch is done, increase switchcount by 1:
		switchcount ++;
	  } else {
		/* If no switching has been done AND the direction is "asc",
		set the direction to "desc" and run the while loop again. */
		if (switchcount == 0 && dir == "asc") {
		  dir = "desc";
		  switching = true;
		}
	  }
	}
  }
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");
var rootElement = document.documentElement;

function scrollToTop() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
scrollToTopBtn.addEventListener("click", scrollToTop);

// Fetch gets your JSON file.
fetch('assets/collectiondata.json')
	.then(function(response) {
		return response.json();	
	})
.then(function(collection){
		 //And passes the data to the function, above!
		renderItems(collection.reverse())  //In reverse order
})
