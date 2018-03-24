// GLOBAL VARIABLES
// =============================================================================================


function searchGiphy(searchQuery) {
// queryURL for Giphy API
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchQuery + "&api_key=2UZRAKebFpIBB3Q5RhMHCWc5Clb8vDU4";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        appendSearchQuery(searchQuery);
    });
};

function appendSearchQuery() {
    $("#searchedTerms").appendTo("o");
    console.log("bananas");
}
 
$("#go").on("click", function(event) {
    // Preventing button from submitting form
    event.preventDefault();
    // Storing the artist name
    var subject = $("#searchInput").val().trim();
    searchGiphy(subject);
    $("#searchedTerms").append("#searchInput");
});