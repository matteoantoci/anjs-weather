/**
 * Created by mantoci on 16/10/14.
 */

"use strict";

describe('FeedFactory', function(){

    var FeedFactory, $httpBackend;

    //Instantiate App
    beforeEach(module('myApp'));

    beforeEach(inject(function($injector) {
        FeedFactory = $injector.get('FeedFactory');
        $httpBackend = $injector.get('$httpBackend');
    }));

    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('should make an ajax call to open weather api', function () {

        $httpBackend
            .when("GET", /api\.openweathermap\.org\/data\//)
            .respond([{
                id: 1,
                name: "banana"
            }]);

        FeedFactory.getFeed.success(function(data) {
            expect(data).toBeDefined();
        });

        $httpBackend.flush();

    });

});
