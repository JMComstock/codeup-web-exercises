$.get(`https://api.openweathermap.org/data/2.5/weather?lat=${51.1675}&lon=${10.4513}&appid=${WEATHER_MAP}`)
    .done(function (weather) {
        console.log(weather);

        $(".container").append(`<p>Sea Level: ${weather.main.sea_level}</p>`)
    })

