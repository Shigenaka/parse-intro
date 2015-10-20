// Initialize Parse app
Parse.initialize('i5qPwQLN4Ty1dSXc8xPZm9yKLopadXKYVdLPW6gS', 'w909ewDcYPArpmrTUYd1AGiDTBiTmsfoV8qmgVJ5')

// Create a new sub-class of the Parse.Object, with name "Music"
var Music = Parse.Object.extend('Music');

// // Create a new instance of your Music class 
// var sweetTune = new Music();

// // Set a property 'band' equal to a band name
// sweetTune.set('band', 'bandName') 

// // Set a property 'website' equal to the band's website
// sweetTune.set('website', 'websiteURL')
    
// // Set a property 'song' equal to a song
// sweetTune.set('song', 'songName')

// // Save your instance of your song -- and go see it on parse.com!
// sweetTune.save()

// Click event when form is submitted
$('form').submit(function() {

	// Create a new instance of your Music class 
	var instance = new Music();

	$(this).find('input').each(function() {
		instance.set($(this).attr('id'), $(this).val())
		$(this).val('')
	})
	// For each input element, set a property of your new instance equal to the input's value
	// var name = $('#band').val()
	// var website = $('#website').val()
	// var best = $('#best').val()

	// instance.set('band', name)
	// instance.set('website', website)
	// instance.set('song', best)

	// After setting each property, save your new instance back to your database
	instance.save()

	// // Clear it out
	// $('#band').val('')
	// $('#website').val('')
	// $('#best').val('')

	return false
})



// Write a function to get data
var getData = function() {
	

	// Set up a new query for our Music class


	// Set a parameter for your query -- where the website property isn't missing


	/* Execute the query using ".find".  When successful:
	    - Pass the returned data into your buildList function
	*/
}

// A function to build your list
var buildList = function(data) {
	// Empty out your unordered list
	
	// Loop through your data, and pass each element to the addItem function

}


// This function takes in an item, adds it to the screen
var addItem = function(item) {
	// Get parameters (website, band, song) from the data item passed to the function

	
	// Append li that includes text from the data item


	
	// Time pending, create a button that removes the data item on click
	
}

// Call your getData function when the page loads


