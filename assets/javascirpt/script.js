$(document).ready(function () {
    let cardNum = 0;

    const travelKey = "51fc0c5c2dmsh3005b8fba85fea9p120ba0jsncc52820fe5fe";
    // const histWeatherKey = "03b039fdd4710d931862c2a554423848";
    const currentWeatherKey = "2b7e94c082981cf991432987e4fd3482";
    var weatherData;
    // var wd = weatherData.toFixed();
    $("#search-button").on("click", function () {

        var searchLocation = $("#search").val().trim();
        tripInfo(searchLocation)
        currentWeather(searchLocation)

        //Lines 16 through(*19) 35 are for historical weather purposes.

        // listener for history input
        // var histDate = $("#search2").val().trim();
        // tripHist(histDate, searchLocation) 
    })
    // Listener for month data
    // $("#dropdown").on("click", function () {
    //     console.log("disco");
    // })

    // Call to historical weather api
    // function tripHist(date, location) {
    //     $.ajax({
    //         url:  `https://api.openweathermap.org/data/2.5/uvi/forecast?lat=${lat}&lon=${lon}&appid=${histWeatherKey}&cnt=1`,

    //         success: function (data) {

    //             console.log(data);
    //         }
    //     })
    // }

    // Call to current weather api
    function currentWeather(sL) {
        $.ajax({
            url: `https://api.openweathermap.org/data/2.5/weather?q=${sL}&units=imperial&APPID=${currentWeatherKey}`,
            success: function (data) {
                // console.log(data);
                weatherData = $("<p>").addClass("content").text("Current Weather: " + (data.main.temp).toFixed() + "°F");
                console.log(data);


            }
        })
    }

    function tripInfo(location) {
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://tripadvisor1.p.rapidapi.com/locations/search?location_id=1&limit=30&sort=relevance&offset=0&lang=en_US&currency=USD&units=km&query=" + location,
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
                "x-rapidapi-key": "253684ecadmsh1aac7be27e3813ep16047bjsn0c270e942641"
            }
        }

        $.ajax(settings).done(function (data) {
            console.log(data);

            if (cardNum >= 6) {
                // return;
                $(".column is-one-quarter").empty()
            }
            cardNum++

            var fakeNum = Math.floor(Math.random() * 30 + 50)
            let cardSetup = $("<div>").addClass("column is-one-quarter");
            let imgSetUp = $("<div>").addClass("card-image");
            let imgSetup2 = $("<figure>").addClass("image is-4by3")
            let img = data.data[0].result_object.photo.images.large.url;
            let imgPlace = $("<img>").attr("src", img);
            let card = $("<div>").addClass("card-content")
            let cardText = $("<div>").addClass("content")
            let title = $("<h4>").text(data.data[0].result_object.name)
            let infotext = "";
            let visit = "When you're here, it'll be:"
            let weather = " " + fakeNum + "°F"
            // get img from 
            for (let i = 0; i < data.data.length; i++) {

                if (data.data[i].result_type === "things_to_do") {

                    infotext = data.data[i].review_snippet.snippet
                    break;
                }

            }
            let info = $("<p>").text(infotext + "...")
            card.append(cardText.append(title, info, visit, weather, weatherData))

            // set img card
            imgSetUp.append(imgSetup2.append(imgPlace))
            // solo appnd card
            cardSetup.append(imgSetUp, card)
            $(".columns").append(cardSetup)
        });

    }
})