'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {

    browser.get('index.html');

    it('should render a select box with a few cities', function() {
        expect(element.all(by.css('#cities option')).count()).
            toBeGreaterThan(1);
    });

    it('should order ASC and DESC order', function(){

        element(by.css('#order-asc-btn')).click();

        element.all(by.css('#cities option')).map(function(elm, index) {
            return elm.getText();
        }).then(function(array){
            element(by.css('#order-desc-btn')).click();

            expect(element.all(by.css('#cities option')).map(function(elm, index) {
                return elm.getText();
            })).toEqual(array.reverse());
        });

    });

});
