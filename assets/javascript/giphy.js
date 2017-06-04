$(document).ready(function(){

var interests = ["How I Met Your Mother", "Steph Curry", "Michael Jordan", "Orlando Magic", "Rick & Morty"];
	
	function renderButtons () {
		$("#interest-view").empty();
		for (var i = 0; i < interests.length; i++) {
			var a = $("<button>");
          // Added class
          	a.addClass("interest");
          // Adding data attribute to interest
         	 a.attr("data-name", interests[i]);
          // Providing the button's text with a value of the movie at index i
         	 a.text(interests[i]);
          // Adding the button to the HTML
          	$("#interest-view").append(a);
        	}
        }

      	$("#add-interest").on("click", function(event) {
      	event.preventDefault();
      	var interest = $("#interest-input").val().trim();
      	interests.push(interest);
      	renderButtons();
      	});

      	renderButtons();


 });	

		$("button").on("click", function() {
			var interest = $(this).attr("data-name");
    		var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + interest + "&api_key=dc6zaTOxFJmzC&limit=10";

		$.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {

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
              var personImage = $("<img>");

              // Giving the image tag an src attribute of a proprty pulled off the
              // result item
              personImage.attr("src", results[i].images.fixed_height.url);

              // Appending paragraph and personImage to the gifDiv
              gifDiv.append(p);
              gifDiv.append(personImage);

              // Gif div goes to htmle
              $("#gifs-appear-here").prepend(gifDiv);

			}

		};

	});

});

		
//new section 

