$(document).ready(function(){

var animate = "0"
var interests = ["How I Met Your Mother", "Steph Curry", "Michael Jordan", "Orlando Magic", "Rick & Morty", "The Goonies"];
	
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
      	var interest = $("#interest-input").val().trim()
      	if (interest !== "")
      	interests.push(interest);
      	console.log(interests)
      	renderButtons();
      	});

      	renderButtons();


	

		function displayImages (){
			console.log("click")
			var interest = $(this).attr("data-name");
    		var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + interest + "&api_key=dc6zaTOxFJmzC&limit=10";
//to pull from Giphy api
		$.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {
        	console.log(response)

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
              gifDiv.append(p);
              gifDiv.append(personImage);

              // Gif div goes to html
              $("#gifs-appear-here").prepend(gifDiv);

			}

		};
			$(".personImage").on("click", function(){
				console.log("click")
				console.log(this.value)
				if (animate == 0){
				var imageVal = this.value
				console.log(imageVal)
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
		
//new section 

