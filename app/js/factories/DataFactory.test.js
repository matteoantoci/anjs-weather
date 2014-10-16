/**
 * Created by mantoci on 16/10/14.
 */

describe('DataFactory', function(){

    var DataFactory;

    //Instantiate App
    beforeEach(module('myApp'));

    beforeEach(inject(function($injector) {
        DataFactory = $injector.get('DataFactory');
    }));

    it('should sort an array of objects', function () {

        var mock = [
            {
                id: 1,
                someProps: {
                    prop: 99
                }
            },
            {
                id: 2,
                someProps: {
                    prop: 10
                }
            },
            {
                id: 3,
                someProps: {
                    prop: 50
                }
            }];

        var result = DataFactory.sort("someProps", "prop", mock);

        expect(result[0].id).toEqual(2);
    });

});
