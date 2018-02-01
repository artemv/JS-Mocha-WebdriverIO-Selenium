var expect = require('chai').expect;

describe('Mocha Spec Sync example', function() {

    it("follows link to new page", function() {
        var url1 = 'http://backbonejs.org/#Getting-started';
        var url2 = 'http://backbonejs.org/#Model-View-separation';
        browser.url(url1);
        expect(browser.getUrl()).to.equal(url1);
        browser.url(url2);
        expect(browser.getUrl()).to.equal(url2);
    });
});