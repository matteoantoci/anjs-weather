/**
 * Created by mantoci on 16/10/14.
 */

"use strict";

(function () {

var FeedFactory = function($http) {
    return {
        getFeed: $http.get('http://api.openweathermap.org/data/2.5/group?id=2643743,2643339,2643123,2655603&units=metric')
    };
};

angular
    .module('myApp.factories.FeedFactory', [])
    .factory('FeedFactory', FeedFactory);

})();