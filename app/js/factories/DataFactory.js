/**
 * Created by mantoci on 16/10/14.
 */

(function () {

var DataFactory = function(){
    return {
        sort : function (nestedObj, prop, arr) {
            return arr.sort(function (a, b) {
                if (a[nestedObj][prop] < b[nestedObj][prop]) {
                    return -1;
                } else if (a[nestedObj][prop] > b[nestedObj][prop]) {
                    return 1;
                } else {
                    return 0;
                }
            });
        }
    };
};

angular
    .module('myApp.factories.DataFactory', [])
    .factory('DataFactory', DataFactory);

})();
