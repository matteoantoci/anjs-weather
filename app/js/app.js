'use strict';

(function () {

    var CitiesCtrl = function (DataFactory, FeedFactory) {

        var cnt = this;
        var items = [];
        var selectedCity = {};

        var init = function(){
            FeedFactory.getFeed.success(function(data) {
                cnt.items = data.list;
            });
        };

        cnt.sortByTemperature = function(reverse){
            cnt.items = reverse
                ? DataFactory.sort("main", "temp", cnt.items).reverse()
                : DataFactory.sort("main", "temp", cnt.items);
        };

        cnt.showCityInfo = function (item, index) {
            cnt.selectedCity = cnt.items[index];
        };

        init();

    };

    angular.module('myApp.factories', ['myApp.factories.DataFactory', 'myApp.factories.FeedFactory']);

    angular
        .module('myApp', ['myApp.factories'])
        .controller('CitiesCtrl', ['DataFactory', 'FeedFactory', CitiesCtrl]);

})();
