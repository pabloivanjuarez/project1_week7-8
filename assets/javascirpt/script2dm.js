function initPage () {
    const inputEl = document.getElementById
    const 
}

$(document).ready(function () {
    ​
        $("#search-button").on("click", function () {
            var searchLocation = $("#search").val().trim();
            tripInfo(searchLocation)
            console.log(searchLocation);
        })
    ​
        // const tripKey = "253684ecadmsh1aac7be27e3813ep16047bjsn0c270e942641"
    ​
        // $.ajax({
        //     url: `https://tripadvisor1.p.rapidapi.com/locations/search?location_id=1&limit=30&sort=relevance&offset=0&lang=en_US&currency=USD&units=km&query=${location}&appid=${tripKey}`,
        //     success: function (data) {
        //         console.log(data);
        //     }
        // })
    ​
        2
        // day
        // month
        // js will interprit two fields as 
    ​
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
    ​
            $.ajax(settings).done(function (data) {
                console.log(data);
    ​
                let cardSetup = $("<div>").addClass(".card is-shady");
                let imgSetup = $("<div>").addClass(".card-image");
                let imgSetup2 = $("<figure>").addClass(".image is-4by3")
                let img = data.data[0].result_object.photo.images.large.url;
                let imgPlace = $("")
    ​
            });
            // seems like position 1 in the data array is always "geo", we'll be able to pull location name and Lat & Lon info
    ​
            // for loop needed to go through array and stop at first result_type "
        }
    })