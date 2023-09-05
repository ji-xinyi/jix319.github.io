// Function to render your items
function renderItems(collection) {
	// The `ul` where the items will be inserted
	const collectionList = document.getElementById('collection')

    // Loop through each item in the collection array
	collection.forEach(function(item) {

		const itemDetails =

			<li>
				<div class="school"> <h2>${item.school}</h2></div>
				<div class="name"> <h3>${item.fullname} (${item.acronym})</h3></div>
				<div class="information">
					<p>size: ${item.size}, year established: ${item.year} , status: ${item.status}.</p>
				</div>
			</li>
			


		listItem.insertAdjacentHTML('beforeend', itemDetails) // Which can we then insert

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