// GLOBAL VARIABLES
// =============================================================================================
var subject;
var inputText;

// FUNCTIONS
// =============================================================================================

function searchGiphy(searchQuery) {
  
  // Clear existing Gifs from gifArea
  $("#gifArea").empty();

  // queryURL for Giphy API
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchQuery + "&api_key=2UZRAKebFpIBB3Q5RhMHCWc5Clb8vDU4&limit=9";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);

    var results = response.data;

    for (var i = 0; i < results.length; i++) {

    var foodDiv = $("<div class='item'>");

    // Creating a paragraph tag with the result item's rating
    var p = $("<p>").text("Rating: " + results[i].rating);

    var foodImage = $("<img>");

    // foodImage.attr("src", response.data[i].images.fixed_height_still.url);
    // foodImage.attr("class", "gif");

    foodImage.attr({src: response.data[i].images.fixed_height_still.url, class: 'gif'});

    foodDiv.append(p);
    foodDiv.append(foodImage);

    // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
    $("#gifArea").prepend(foodDiv);


    }
  }); 
}

// Check that the search query field isn't empty
function formValidation() {
  if (subject == "") {
    alert("Please enter a valid search term");
    return false;
  } else {
    if (subject !== "")
      $("#searchedTerms").append("<button type='button' id='bananas' onClick='searchGiphy(subject)' class='btn btn-light'>" + subject + "</button>");

    // Clear text in field
    $("form").trigger("reset");
  }
}

function reply_click(clicked_id)
{
    alert(clicked_id);
}

// function bananaClick() {
// $("#bananas").on("click", function() {
//     console.log("Hello");
// });

// }




// GAMEPLAY
// =============================================================================================

$("#go").on("click", function(event) {
  // Preventing button from submitting form
  event.preventDefault();
  // Storing the artist name
  subject = $("#searchInput").val().trim();
  formValidation();
});

