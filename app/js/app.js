'use strict';

var CitiesCtrl = function (DataFactory) {

    var cnt = this;

    cnt.items = [
        {
            "coord": {"lon": -0.13, "lat": 51.51},
            "sys": {
                "type": 1,
                "id": 5091,
                "message": 0.0291,
                "country": "GB",
                "sunrise": 1413354320,
                "sunset": 1413392822
            },
            "weather": [{"id": 500, "main": "Rain", "description": "light rain", "icon": "10d"}],
            "main": {"temp": 14.71, "pressure": 1003, "humidity": 77, "temp_min": 13, "temp_max": 16},
            "wind": {"speed": 4.1, "deg": 130},
            "clouds": {"all": 75},
            "dt": 1413384873,
            "id": 2643743,
            "name": "London"
        },
        {
            coord: {
                lon: -0.42,
                lat: 51.88
            },
            sys: {
                type: 1,
                id: 5078,
                message: 0.3137,
                country: "GB",
                sunrise: 1413440927,
                sunset: 1413479129
            },
            weather: [
                {
                    id: 701,
                    main: "Mist",
                    description: "mist",
                    icon: "50d"
                }
            ],
            main: {
                temp: 12.63,
                pressure: 1001,
                humidity: 100,
                temp_min: 11,
                temp_max: 14
            },
            wind: {
                speed: 3.1,
                deg: 210
            },
            clouds: {
                all: 75
            },
            dt: 1413449821,
            id: 2643339,
            name: "Luton"
        }
    ];

    cnt.sortByTemperature = function (reverse) {
        cnt.items = reverse
            ? DataFactory.sort("main", "temp", cnt.items).reverse()
            : DataFactory.sort("main", "temp", cnt.items);
    };

};

(function () {

    angular.module('myApp.factories', ['myApp.factories.DataFactory']);

    angular
        .module('myApp', ['myApp.factories'])
        .controller('CitiesCtrl', ['DataFactory', CitiesCtrl]);

})();
