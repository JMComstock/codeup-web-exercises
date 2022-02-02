mapboxgl.accessToken = MAPBOX_WEATHER;
let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    zoom: 10,
    center: [-98.4916, 29.4252]
});

const marker = new mapboxgl.Marker({
    draggable: true
})
    .setLngLat([-98.4916, 29.4252])
    .addTo(map);

const geocoder = new MapboxGeocoder({
    // Initialize the geocoder
    accessToken: mapboxgl.accessToken, // Set the access token
    mapboxgl: mapboxgl, // Set the mapbox-gl instance
    marker: true
});

// Add the geocoder to the map
map.addControl(geocoder);

map.on('load', () => {
    map.addSource('single-point', {
        type: 'geojson',
        data: {
            type: 'FeatureCollection',
            features: []
        }
    });

    map.addLayer({
        id: 'point',
        source: 'single-point',
        type: 'circle',
        // paint: {
        //     'circle-radius': 10,
        //     'circle-color': '#448ee4'
        // }
    });

    // Listen for the `result` event from the Geocoder
    // `result` event is triggered when a user makes a selection
    //  Add a marker at the result's coordinates
    geocoder.on('result', (event) => {
        map.getSource('single-point').setData(event.result.geometry);
        console.log("The geocoder event is: ", event);


        function newResult() {
            const center = event.result.geometry;
            console.log("The center is", center);
            // console.log(`newResult Longitude: ${lngLat.lng} newResult Latitude: ${lngLat.lat}`);
            $.get("http://api.openweathermap.org/geo/1.0/reverse?", {
                APPID: WEATHER_MAP,
                lat: `${center.coordinates[1]}`,
                lon: `${center.coordinates[0]}`,
                units: "imperial"
            }).done(function (data) {
                console.log("The newResult response is: ", data);
            })
            $.get("http://api.openweathermap.org/data/2.5/forecast?", {
                APPID: WEATHER_MAP,
                units: "imperial",
                lat: `${center.coordinates[1]}`,
                lon: `${center.coordinates[0]}`,
            }).done(function (data) {
                $(".top").html("");
                $(".mid").html("");
                console.log(data);

                let newSource0 = data.list[0].weather[0].icon;
                let iconSource0 = `https://openweathermap.org/img/w/${newSource0}.png`;

                let newSource8 = data.list[8].weather[0].icon;
                let iconSource8 = `https://openweathermap.org/img/w/${newSource8}.png`;

                let newSource16 = data.list[0].weather[0].icon;
                let iconSource16 = `https://openweathermap.org/img/w/${newSource16}.png`;

                let newSource24 = data.list[0].weather[0].icon;
                let iconSource24 = `https://openweathermap.org/img/w/${newSource24}.png`;

                let newSource32 = data.list[0].weather[0].icon;
                let iconSource32 = `https://openweathermap.org/img/w/${newSource32}.png`;

                $(".top").append(
                    `<h2 id="h2-top">Weather App</h2>` +
                    `<h6">Current City: ${data.city.name}</h6>`);
                $(".mid").append(
                    `<div class="d-flex card m-1" style="width: 15rem;">` +
                    `<div class="col justify-content-center card-body">` +
                    `<h5 class="card-title bg-secondary">${data.list[0].dt_txt}</h5>` +
                    `<h6 class="card-subtitle mb-2 text-muted">${data.list[0].main.temp_min} \u00B0 F / ${data.list[0].main.temp_max} \u00B0 F</h6>` +
                    `<img src="${iconSource0}" alt="">` +
                    `<p class="card-text">Desctiption: ${data.list[0].weather[0].description}</p>` +
                    `<p class="card-text">Humidity: ${data.list[0].main.humidity}</p>` +
                    `<p class="card-text">Wind: ${data.list[0].wind.speed}</p>` +
                    `<p class="card-text">Pressure: ${data.list[0].main.pressure}</p>` +
                    `</div>` +
                    `</div>`);

                $(".mid").append(
                    `<div class="card m-1" style="width: 15rem;">` +
                    `<div class="card-body">` +
                    `<h5 class="card-title bg-secondary">${data.list[8].dt_txt}</h5>` +
                    `<h6 class="card-subtitle mb-2 text-muted">${data.list[8].main.temp_min} \u00B0 F / ${data.list[8].main.temp_max} \u00B0 F</h6>` +
                    `<img src="${iconSource8}" alt="">` +
                    `<p class="card-text">Desctiption: ${data.list[8].weather[0].description}</p>` +
                    `<p class="card-text">Humidity: ${data.list[8].main.humidity}</p>` +
                    `<p class="card-text">Wind: ${data.list[8].wind.speed}</p>` +
                    `<p class="card-text">Pressure: ${data.list[8].main.pressure}</p>` +
                    `</div>` +
                    `</div>`);

                $(".mid").append(
                    `<div class="card m-1" style="width: 15rem;">` +
                    `<div class="card-body">` +
                    `<h5 class="card-title bg-secondary">${data.list[16].dt_txt}</h5>` +
                    `<h6 class="card-subtitle mb-2 text-muted">${data.list[16].main.temp_min} \u00B0 F / ${data.list[16].main.temp_max} \u00B0 F</h6>` +
                    `<img src="${iconSource16}" alt="">` +
                    `<p class="card-text">Desctiption: ${data.list[16].weather[0].description}</p>` +
                    `<p class="card-text">Humidity: ${data.list[16].main.humidity}</p>` +
                    `<p class="card-text">Wind: ${data.list[16].wind.speed}</p>` +
                    `<p class="card-text">Pressure: ${data.list[16].main.pressure}</p>` +
                    `</div>` +
                    `</div>`);

                $(".mid").append(
                    `<div class="card m-1" style="width: 15rem;">` +
                    `<div class="card-body">` +
                    `<h5 class="card-title bg-secondary">${data.list[24].dt_txt}</h5>` +
                    `<h6 class="card-subtitle mb-2 text-muted">${data.list[24].main.temp_min} \u00B0 F / ${data.list[24].main.temp_max} \u00B0 F</h6>` +
                    `<img class="justify-content-center" src="${iconSource24}" alt="">` +
                    `<p class="card-text">Desctiption: ${data.list[24].weather[0].description}</p>` +
                    `<p class="card-text">Humidity: ${data.list[24].main.humidity}</p>` +
                    `<p class="card-text">Wind: ${data.list[24].wind.speed}</p>` +
                    `<p class="card-text">Pressure: ${data.list[24].main.pressure}</p>` +
                    `</div>` +
                    `</div>`);

                $(".mid").append(
                    `<div class="card m-1" style="width: 15rem;">` +
                    `<div class="card-body">` +
                    `<h5 class="card-title bg-secondary">${data.list[32].dt_txt}</h5>` +
                    `<h6 class="card-subtitle mb-2 text-muted">${data.list[32].main.temp_min} \u00B0 F / ${data.list[32].main.temp_max} \u00B0 F</h6>` +
                    `<img src="${iconSource32}" alt="">` +
                    `<p class="card-text">Desctiption: ${data.list[32].weather[0].description}</p>` +
                    `<p class="card-text">Humidity: ${data.list[32].main.humidity}</p>` +
                    `<p class="card-text">Wind: ${data.list[32].wind.speed}</p>` +
                    `<p class="card-text">Pressure: ${data.list[32].main.pressure}</p>` +
                    `</div>` +
                    `</div>`);
            })
        }

    geocoder.on('result', newResult);
    mapboxgl.clearStorage(newResult);

    });
});

function onDragEnd() {
     const lngLat = marker.getLngLat();
     console.log(`Longitude: ${lngLat.lng} Latitude: ${lngLat.lat}`);
    $.get("http://api.openweathermap.org/geo/1.0/reverse?", {
        APPID: WEATHER_MAP,
        lat: `${lngLat.lat}`,
        lon: `${lngLat.lng}`,
        units: "imperial"
    }).done(function (data) {
        console.log("The onDragEnd response is: ", data);
    })
    $.get("http://api.openweathermap.org/data/2.5/forecast?", {
        APPID: WEATHER_MAP,
        units: "imperial",
        lat: `${lngLat.lat}`,
        lon: `${lngLat.lng}`,
    }).done(function (data) {
        $(".top").html("");
        $(".mid").html("");
        console.log(data);

        let newSource0 = data.list[0].weather[0].icon;
        let iconSource0 = `https://openweathermap.org/img/w/${newSource0}.png`;

        let newSource8 = data.list[8].weather[0].icon;
        let iconSource8 = `https://openweathermap.org/img/w/${newSource8}.png`;

        let newSource16 = data.list[0].weather[0].icon;
        let iconSource16 = `https://openweathermap.org/img/w/${newSource16}.png`;

        let newSource24 = data.list[0].weather[0].icon;
        let iconSource24 = `https://openweathermap.org/img/w/${newSource24}.png`;

        let newSource32 = data.list[0].weather[0].icon;
        let iconSource32 = `https://openweathermap.org/img/w/${newSource32}.png`;

        let dateShorten = [];
        dateShorten.split("", ${data.list[0].dt_txt});
        console.log

        $(".top").append(
            `<h2 id="h2-top">Weather App</h2>` +
            `<h6">Current City: ${data.city.name}</h6>`);
        $(".mid").append(
            `<div class="d-flex card m-1" style="width: 15rem;">` +
                `<div class="col justify-content-center card-body">` +
                    `<h5 class="card-title bg-secondary">${data.list[0].dt_txt}</h5>` +
                    `<h6 class="card-subtitle mb-2 text-muted">${data.list[0].main.temp_min} \u00B0 F / ${data.list[0].main.temp_max} \u00B0 F</h6>` +
                    `<img src="${iconSource0}" alt="">` +
                    `<p class="card-text">Desctiption: ${data.list[0].weather[0].description}</p>` +
                    `<p class="card-text">Humidity: ${data.list[0].main.humidity}</p>` +
                    `<p class="card-text">Wind: ${data.list[0].wind.speed}</p>` +
                    `<p class="card-text">Pressure: ${data.list[0].main.pressure}</p>` +
                `</div>` +
            `</div>`);


        $(".mid").append(
            `<div class="card m-1" style="width: 15rem;">` +
                `<div class="card-body">` +
                    `<h5 class="card-title bg-secondary">${data.list[8].dt_txt}</h5>` +
                    `<h6 class="card-subtitle mb-2 text-muted">${data.list[8].main.temp_min} \u00B0 F / ${data.list[8].main.temp_max} \u00B0 F</h6>` +
                    `<img src="${iconSource8}" alt="">` +
                    `<p class="card-text">Desctiption: ${data.list[8].weather[0].description}</p>` +
                    `<p class="card-text">Humidity: ${data.list[8].main.humidity}</p>` +
                    `<p class="card-text">Wind: ${data.list[8].wind.speed}</p>` +
                    `<p class="card-text">Pressure: ${data.list[8].main.pressure}</p>` +
                `</div>` +
            `</div>`);

        $(".mid").append(
            `<div class="card m-1" style="width: 15rem;">` +
                `<div class="card-body">` +
                    `<h5 class="card-title bg-secondary">${data.list[16].dt_txt}</h5>` +
                    `<h6 class="card-subtitle mb-2 text-muted">${data.list[16].main.temp_min} \u00B0 F / ${data.list[16].main.temp_max} \u00B0 F</h6>` +
                    `<img src="${iconSource16}" alt="">` +
                    `<p class="card-text">Desctiption: ${data.list[16].weather[0].description}</p>` +
                    `<p class="card-text">Humidity: ${data.list[16].main.humidity}</p>` +
                    `<p class="card-text">Wind: ${data.list[16].wind.speed}</p>` +
                    `<p class="card-text">Pressure: ${data.list[16].main.pressure}</p>` +
                `</div>` +
            `</div>`);

        $(".mid").append(
            `<div class="card m-1" style="width: 15rem;">` +
                `<div class="card-body">` +
                    `<h5 class="card-title bg-secondary">${data.list[24].dt_txt}</h5>` +
                    `<h6 class="card-subtitle mb-2 text-muted">${data.list[24].main.temp_min} \u00B0 F / ${data.list[24].main.temp_max} \u00B0 F</h6>` +
                    `<img class="justify-content-center" src="${iconSource24}" alt="">` +
                    `<p class="card-text">Desctiption: ${data.list[24].weather[0].description}</p>` +
                    `<p class="card-text">Humidity: ${data.list[24].main.humidity}</p>` +
                    `<p class="card-text">Wind: ${data.list[24].wind.speed}</p>` +
                    `<p class="card-text">Pressure: ${data.list[24].main.pressure}</p>` +
                `</div>` +
            `</div>`);

        $(".mid").append(
            `<div class="card m-1" style="width: 15rem;">` +
                `<div class="card-body">` +
                    `<h5 class="card-title bg-secondary">${data.list[32].dt_txt}</h5>` +
                    `<h6 class="card-subtitle mb-2 text-muted">${data.list[32].main.temp_min} \u00B0 F / ${data.list[32].main.temp_max} \u00B0 F</h6>` +
                    `<img src="${iconSource32}" alt="">` +
                    `<p class="card-text">Desctiption: ${data.list[32].weather[0].description}</p>` +
                    `<p class="card-text">Humidity: ${data.list[32].main.humidity}</p>` +
                    `<p class="card-text">Wind: ${data.list[32].wind.speed}</p>` +
                    `<p class="card-text">Pressure: ${data.list[32].main.pressure}</p>` +
                `</div>` +
            `</div>`);
    })
}
marker.on('dragend', onDragEnd);
mapboxgl.clearStorage(onDragEnd);





