$(document).ready(function () {


    const travelKey = "";
    const weatherKey = "";

    $("#seach-button").on("click", function () {

        var searchLocation = $("#search").val().trim();
        location(searchLocation)

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

                        cardbody.append(card)
                        card.append(hotels, avTemp, )

                    }
                    // second api call
                    .ajax
                url: ``


            })


        }

    })














})