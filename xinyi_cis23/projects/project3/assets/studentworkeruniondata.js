// Function to render your items
function renderItems(collection) {
	// The `ul` where the items will be inserted
	const collectionList = document.getElementById('collection')

    // Loop through each item in the collection array
	collection.forEach(function(item) {
		const listItem = document.createElement('div') // Make the `div
		listItem.classList.add("union");


		// You can make each element inside of that...
		const itemTitle = document.createElement('h2') // Make an `h2`
		itemTitle.innerHTML = item.acronym// Put the JSON squirrel id inside
		listItem.appendChild(itemTitle) // And add it to the `div`!

		const itemFur = document.createElement('h3') // And another h2
		itemFur.innerHTML = item.fullname // Put the fur color in the html
		listItem.appendChild(itemFur) // And add that too


		// This can get annoying, so we can use “template literals” instead
		const itemDetails =
			`

			`


		listItem.insertAdjacentHTML('beforeend', itemDetails) // Which can we then insert

		// You can build logic from your data, too
		if (!item.indifferent) { // If this is `false`
			listItem.classList.add('indifferent') // Add this class to the whole `li`
		}

		if (item.status == "Union") { // If this is `true`
			listItem.classList.add('solid');
			
		}

		if (item.primary_fur_color == "Cinnamon") { // If this is `true`
			listItem.classList.add('cinnamon') // Add this class to the whole `li`
		}

		if (item.primary_fur_color == "Black") { // If this is `true`
			listItem.classList.add('black') // Add this class to the whole `li`
		}


		const friendlyDetails = document.createElement('p');
		listItem.appendChild(friendlyDetails);

		if (item.runs_from == true) { // If this is `true`
			friendlyDetails.innerHTML = "Friendly squirrel";
    } else {
			friendlyDetails.innerHTML = "This squirrel ran away :(";
		}

		const noisyDetails = document.createElement('p');
		listItem.appendChild(noisyDetails);

		if (item.moans == true) { // If this is `true`
			noisyDetails.innerHTML = "Noisy squirrel";
    } else {
		noisyDetails.innerHTML = "Quiet squirrel";
		}

		collectionList.appendChild(listItem) // Then add the whole `li` into the `ul`
	})
}


// Fetch gets your JSON file.
fetch('assets/studentworkeruniondata.json')
	.then(function(response) {
		return response.json();	
	})
	.then(function(collection){
		// And passes the data to the function, above!
		renderItems(collection.reverse()) // In reverse order
	})