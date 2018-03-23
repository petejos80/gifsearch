// GLOBAL VARIABLES
// =============================================================================================

var searchTerm = "bananas";



// queryURL for Giphy API
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&api_key=2UZRAKebFpIBB3Q5RhMHCWc5Clb8vDU4";

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response);
});
 