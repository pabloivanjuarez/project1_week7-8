$(document).ready(function () {


    const travelKey = "51fc0c5c2dmsh3005b8fba85fea9p120ba0jsncc52820fe5fe";
    const weatherKey = "03b039fdd4710d931862c2a554423848";

    $("#seach-button").on("click", function () {

        var searchLocation = $("#search").val().trim();
        // location(searchLocation)
        getPlace(searchLocation)
    })
    // place for possible API call to get location coord, ID
    function getPlace() {
        location(place)
    }

    function location(place) {
        $.ajax({
            url: ` ${place}  ${travelKey}`,
            success: function (data) {
                console.log(data);


                // fill the card, on the html page
                //$("# or ." ).empty()
                //look at bulma card and input field classes
                // alt tags within our divs
                var location = $("<h3>").addClass();
                var location = $("<img>").attr();
                var location = $("<h3>").addClass().text(`hotels:${location.place.hotels}`)
                var locJargen = $("<p>").addClass().text(``)
                var location = $("<h3>").addClass()
                var cardbody = $("<h3>").addClass(cardbody)
                var avTemp = $("<h3>")
                // cards need to propagate from left->right/top->bottom
                cardbody.append(card)
                card.append(hotels, avTemp, )

            }


        })


    }

    // // second api call
    // .ajax
    // url: ``


    // add for loop to set card limit, 5 cards max


    // this is the value for the default card search
    const porkland = "portland";
    // this function will propagate the default card.
    portland(porkland)

    function portland() {

    }








})
