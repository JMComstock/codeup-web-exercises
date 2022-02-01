$.get("http://api.openweathermap.org/data/2.5/forecast?", {
    APPID: WEATHER_MAP,
    q:     "San Antonio, US",
    units: "imperial"
}).done(function (data) {
    console.log(data);

    $(".top").append(`<h6">Current City: ${data.city.name}</h6>`);
    $(".mid").append(
        `<div className="card" style="width: 18rem;">` +
            `<div className="card-body">` +
                `<h5 className="card-title bg-secondary">${data.list[0].dt_txt}</h5>` +
                `<h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>` +
                `<p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's content.</p>` +
                `<a href="#" className="card-link">Card link</a>` +
                `<a href="#" className="card-link">Another link</a>` +
            `</div>` +
        `</div>`);
});