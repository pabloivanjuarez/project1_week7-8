$(document).ready(function () {


    const key = "19cc0c37f6ba47e50f9866554924414a"

    var locaction = "boston"
    fetch("http://api.openweathermap.org/data/2.5/forecast/daily?q=" + locaction + `&appid=${key}`)



})