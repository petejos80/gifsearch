// GLOBAL VARIABLES
// =============================================================================================
var subject;






// FUNCTIONS
// =============================================================================================

function searchGiphy(searchQuery) {
// queryURL for Giphy API
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchQuery + "&api_key=2UZRAKebFpIBB3Q5RhMHCWc5Clb8vDU4";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
    });
};

// Check that the search query field isn't empty
function formValidation() {
    if (subject == "") {
        alert("Please enter a valid search term");
        return false;
    } else {
        if (subject !== "")
    $("#searchedTerms").append("<button type='button' class='btn btn-light'>" + subject + "</button> &nbsp;");

    // If field is not empty, run the function to perform a Giphy search
    searchGiphy(subject);
    }
};





// GAMEPLAY
// =============================================================================================

$("#go").on("click", function(event) {
    // Preventing button from submitting form
    event.preventDefault();
    // Storing the artist name
    subject = $("#searchInput").val().trim();
    formValidation();
});
