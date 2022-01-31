$.get("http://api.openweathermap.org/data/2.5/weather", {
    APPID: WEATHER_MAP,
    q:     "San Antonio, US",
    units: "imperial"
}).done(function (weather) {
    console.log(weather);

    $(".top").append(`<h6">Current City: ${weather.name}</h6>`);

});