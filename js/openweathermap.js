// $.get(`https://api.openweathermap.org/data/2.5/weather?lat=${51.1675}&lon=${10.4513}&appid=${WEATHER_MAP}`)
//     .done(function (weather) {
//         console.log(weather);
//
//         $(".container").append(`<p>Sea Level: ${weather.main.sea_level}</p>`)
//     })

// $.get("http://api.openweathermap.org/data/2.5/weather", {
//     APPID: WEATHER_MAP,
//     q:     "San Antonio, US",
//     units: "imperial"
// }).done(function (weather) {
//     console.log(weather);
//
//     $(".container").append(`<p>Current Temp: ${weather.main.temp}</p>`);
// });

$.get("http://api.openweathermap.org/data/2.5/onecall", {
    APPID: WEATHER_MAP,
    lat:    29.423017,
    lon:   -98.48527,
    units: "imperial"
}).done(function(data) {
    console.log('The entire response:', data);
    console.log('Diving in - here is current information: ', data.current);
    console.log('A step further - information for tomorrow: ', data.daily[1]);
});