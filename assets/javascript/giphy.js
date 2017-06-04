$(document).ready(function(){

var animate = "0";
var interests = ["How I Met Your Mother", "Steph Curry", "Michael Jordan", "Orlando Magic", "Rick Sanchez", "Morty Smith", "Mr. Meeseeks", "The Goonies", "Corgi", "The Hangover", "Parakeet", "Beer", "Liquor", "Barney Stinson", "Tracy McGrady", "Gal Gadot", "Camila Mendes", "UCF", "Guardians Of The Galaxy", "Power Rangers", "Teenage Mutant Ninja Turtles", "Contra", "Super Punch Out", "The Legend Of Zelda", "Attack On Titan", "Sasha Banks", "Alexa Bliss"];
	
	//function to render the buttons
	function renderButtons () {
		$("#interest-view").empty();
		for (var i = 0; i < interests.length; i++) {
			var a = $("<button>");
    // Adds class of Interest
          	a.addClass("interest");
    // Adding data attribute to interest
         	a.attr("data-name", interests[i]);
    // Providing the button's text with a value of the interest at index i
         	a.text(interests[i]);
    // Adding the button to the HTML
          	$("#interest-view").append(a);
        	}
        }
    // Adds user input interest if entered. If nothing is entered, no blank will be entered into array therefore no
    // added empty button
      	$("#add-interest").on("click", function(event) {
      	event.preventDefault();
      	var interest = $("#interest-input").val().trim()
      	if (interest !== "")
      	interests.push(interest);
      	//console.log(interests)
      	renderButtons();
      	});

      	renderButtons();


	
    // function to display images
		function displayImages (){
			//console.log("click")
			var interest = $(this).attr("data-name");
    		var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + interest + "&api_key=dc6zaTOxFJmzC&limit=10";
	//to pull from Giphy api
		$.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {
        	//console.log(response)

    //this will display the results coming from the response data. It will omit rated r and pg-13 images
        	var results = response.data;
        	for (var i = 0; i < results.length; i++) {
        	if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
    // Creating a div with the class "item"
              var gifDiv = $("<div class='item'>");

    // Stores rating
              var rating = results[i].rating;

    // Creates paragraph tag
              var p = $("<p>").text("Rating: " + rating);

    // creates an image tag
              var personImage = $("<img class = personImage>");

    // Giving the image tag an src attribute of a proprty pulled off the
    // result item
              personImage.attr("src", results[i].images.fixed_height_still.url).val(i);

    // Appending paragraph and personImage to the gifDiv
              gifDiv.append(personImage);
              gifDiv.append(p);
              

    // Gif div goes to html
              $("#gifs-appear-here").prepend(gifDiv);

			}

		};
	//	states that the image will begin still until clicked. Image will then animate
			$(".personImage").on("click", function(){
				//console.log("click")
				//console.log(this.value)
				if (animate == 0){
				var imageVal = this.value
				//console.log(imageVal)
				$(this).attr("src", results[imageVal].images.fixed_height.url)
				animate ++

			}else {
				var imageVal = this.value
				$(this).attr("src", results[imageVal].images.fixed_height_still.url)
				animate --
			}

			});

	});
        

};
        $(document).on("click", ".interest", displayImages);
});
		

