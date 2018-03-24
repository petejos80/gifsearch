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

// If the search query field is empty, alert the user
// function appendSearchQuery() {
//     if (subject !== "")
//     $("#searchedTerms").append("<button type='button' class='btn btn-light'>" + subject + "</button> &nbsp;");
// };

// Check that the search query field isn't empty
function formValidation() {
    if (subject == "") {
        alert("Please enter a valid search term");
        return false;
    } else {
        if (subject !== "")
    $("#searchedTerms").append("<button type='button' class='btn btn-light'>" + subject + "</button> &nbsp;");
    }
};





// GAMEPLAY
// =============================================================================================

$("#go").on("click", function(event) {
    // Preventing button from submitting form
    event.preventDefault();
    // Storing the artist name
    subject = $("#searchInput").val().trim();
    searchGiphy(subject);
    formValidation();
});
