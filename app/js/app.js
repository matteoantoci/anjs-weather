'use strict';

(function () {

    var CitiesCtrl = function (DataFactory, FeedFactory) {

        var cnt = this;

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

        init();

    };

    angular.module('myApp.factories', ['myApp.factories.DataFactory', 'myApp.factories.FeedFactory']);

    angular
        .module('myApp', ['myApp.factories'])
        .controller('CitiesCtrl', ['DataFactory', 'FeedFactory', CitiesCtrl]);

})();
