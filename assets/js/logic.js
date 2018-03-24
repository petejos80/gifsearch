// GLOBAL VARIABLES
// =============================================================================================
var subject;

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

function appendSearchQuery() {
    $("#searchedTerms").append("<button>" + subject + "</button> &nbsp;");
}
 
$("#go").on("click", function(event) {
    // Preventing button from submitting form
    event.preventDefault();
    // Storing the artist name
    subject = $("#searchInput").val().trim();
    searchGiphy(subject);
    appendSearchQuery();
});
