<<<<<<< HEAD
const express = require('express');
const exphbs = require("express-handlebars");
var serveStatic = require('serve-static');

require('dotenv').config()

const app = express();
const host = '0.0.0.0';
const PORT = process.env.PORT || 3000;

app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'views/layouts/main'}));

app.use(express.static('public'));

const locations = require('./controllers/locations.js');

app.get('/', function(req, res) {
    res.render('home', {layout: 'main'});
});

app.get('/contact', function(req, res) {
    res.render('contact', {layout: 'main'});
});

app.get('/about', function(req, res) {
    res.render('about', {layout: 'main'});
});

locations(app);

app.listen(PORT, host, function() {
    console.log("Server started.....");
});

module.exports = app;
=======
$(document).ready(function () {


    const travelKey = "";
    const weatherKey = "";

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
>>>>>>> 101372581bdad975ad312f5652ffbb5547c9b141
