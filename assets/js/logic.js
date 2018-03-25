// GLOBAL VARIABLES
// =============================================================================================
var subject;
var inputText;

// FUNCTIONS
// =============================================================================================

function searchGiphy(searchQuery) {
  // queryURL for Giphy API
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchQuery + "&api_key=2UZRAKebFpIBB3Q5RhMHCWc5Clb8vDU4&limit=9";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);

    var results = response.data;

    for (var i = 0; i < results.length; i++) {

    var foodDiv = $("#gifArea");

    var foodImage = $("<img>");

    foodImage.attr("src", response.data[i].images.fixed_width.url);

    foodDiv.append(foodImage);

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
      $("#searchedTerms").append("<button type='button' class='btn btn-light'>" + subject + "</button>");

    // Clear text in field
    $("form").trigger("reset");
  }
}




// GAMEPLAY
// =============================================================================================

$("#go").on("click", function(event) {
  // Preventing button from submitting form
  event.preventDefault();
  // Storing the artist name
  subject = $("#searchInput").val().trim();
  formValidation();
});
