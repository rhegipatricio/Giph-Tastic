$(document).ready(function(){

var interests = ["How I Met Your Mother", "Steph Curry", "Michael Jordan", "Orlando Magic", "Rick & Morty"];
	
	function renderButtons () {
		$("#interest-view").empty();
		for (var i = 0; i < interests.length; i++) {
			var a = $("<button>");
          // Adding a class
          	a.addClass("interest");
          // Adding a data-attribute with a value of the movie at index i
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


