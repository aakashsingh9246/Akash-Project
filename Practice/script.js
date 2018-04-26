 
  
    var lang , lati;

  var x = document.getElementById("demo");
 if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }


function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude;

    lang = position.coords.latitude ;
    lati = position.coords.longitude;
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            x.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "An unknown error occurred."
            break;
    }
}

$.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + lati + "&lon=" + lang + "&APPID=d1b44f6b8308551c0d53e05f8cb8589e", function (data) {
            var rawJson = JSON.stringify(data);
            var json = JSON.parse(rawJson);
            json.forEach(function(val) {
            var keys = Object.keys(val);
            document.getElementById("data").innerHTML = keys;
            updateWeather(json); //Update Weather parameters
        });


});

