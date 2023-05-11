function renderItems (collection) {
	
}

// Fetch gets your JSON file.
fetch('assets/inquirydata.json')
	.then(function(response) {
		return response.json();	
	})
	.then(function(collection){
		// And passes the data to the function, above!
		renderItems(collection.reverse()) // In reverse order
	})