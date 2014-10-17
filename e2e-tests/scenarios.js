'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {

    browser.get('index.html');

    it('should render a select box with a few cities', function() {
        expect(element.all(by.css('#cities .element')).count()).
            toBeGreaterThan(1);
    });

    it('should show selected city info when clicked', function(){

        element(by.css('#cities .element a')).click();

        expect(element.all(by.css('.main-table-data td')).count()).
            toEqual(7);

        expect(element.all(by.css('.main-table-data td')).first().getText()).
            toEqual('London');

    });

    it('should order ASC and DESC order', function(){

        element(by.css('#order-asc-btn')).click();

        element.all(by.css('#cities .element')).map(function(elm, index) {
            return elm.getText();
        }).then(function(array){
            element(by.css('#order-desc-btn')).click();

            expect(element.all(by.css('#cities .element')).map(function(elm, index) {
                return elm.getText();
            })).toEqual(array.reverse());
        });

    });

});
