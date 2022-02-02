"use strict";

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
        paint: {
            'circle-radius': 0,
        }
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

                $(".top").append(
                    `<h2 id="h2-top">Weather App</h2>` +
                    `<h6">Current City: ${data.city.name}</h6>`);
                for (let i=0; i< data.list.length; i+=8) {

                    let dateTime = data.list[i].dt;
                    let newDate = new Date(dateTime * 1000).toLocaleDateString("en",{weekday: "long"});
                    let weatherImg = data.list[i].weather[0].icon;

                    $(".mid").append(
                        `<div class="d-flex card m-1 shadow mb-3 rounded" style="width: 15rem;">` +
                            `<div class="col justify-content-center card-body">` +
                                `<h5 class="d-flex card-header-pills justify-content-center">${newDate}</h5>` +
                                `<h6 class="card-subtitle mb-2 text-dark justify-content-center">${data.list[i].main.temp_min} \u00B0 F / ${data.list[0].main.temp_max} \u00B0 F</h6>` +
                                '<img class="d-flex col justify-content-center" src="https://openweathermap.org/img/w/' + weatherImg + '.png" alt="weather image">' +
                                `<p class="card-text">Desctiption: ${data.list[i].weather[0].description}</p>` +
                                `<p class="card-text">Humidity: ${data.list[i].main.humidity}</p>` +
                                `<p class="card-text">Wind: ${data.list[i].wind.speed}</p>` +
                                `<p class="card-text">Pressure: ${data.list[i].main.pressure}</p>` +
                            `</div>` +
                        `</div>`);
                }
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

        $(".top").append(
            `<h2 id="h2-top">Weather App</h2>` +
            `<h6">Current City: ${data.city.name}</h6>`);
        for (let i=0; i< data.list.length; i+=8) {

            let dateTime = data.list[i].dt;
            let newDate = new Date(dateTime * 1000).toLocaleDateString("en",{weekday: "long"});
            let weatherImg = data.list[i].weather[0].icon;

            $(".mid").append(
                `<div class="d-flex card m-1 shadow mb-3 rounded" style="width: 15rem;">` +
                    `<div class="col justify-content-center card-body">` +
                        `<h5 class="d-flex card-header-pills justify-content-center">${newDate}</h5>` +
                        `<h6 class="card-subtitle mb-2 text-dark justify-content-center">${data.list[i].main.temp_min} \u00B0 F / ${data.list[0].main.temp_max} \u00B0 F</h6>` +
                        '<img class="d-flex col justify-content-center" src="https://openweathermap.org/img/w/' + weatherImg + '.png" alt="weather image">' +
                        `<p class="card-text">Desctiption: ${data.list[i].weather[0].description}</p>` +
                        `<p class="card-text">Humidity: ${data.list[i].main.humidity}</p>` +
                        `<p class="card-text">Wind: ${data.list[i].wind.speed}</p>` +
                        `<p class="card-text">Pressure: ${data.list[i].main.pressure}</p>` +
                    `</div>` +
                `</div>`);
        }
    })
}
marker.on('dragend', onDragEnd);
mapboxgl.clearStorage(onDragEnd);





