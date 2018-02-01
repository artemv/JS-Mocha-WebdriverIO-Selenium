const expect = require('chai').expect;

describe('urls with hashes', function() {
    const baseUrl = 'http://backbonejs.org/';
    const url1 = `${baseUrl}#Getting-started`;
    const hash2 = '#Model-View-separation';
    const url2 = `${baseUrl}${hash2}`;

    afterEach(function() {
        browser.url('http://google.com');
    });

    it('hash-only change works via browser.url', function() {
        browser.url(url1);
        expect(browser.getUrl()).to.equal(url1);
        browser.url(url2);
        expect(browser.getUrl()).to.equal(url2);
    });


    it('hash-only change works via JS', function() {
        browser.url(url1);
        expect(browser.getUrl()).to.equal(url1);
        browser.execute(function(hash) {
            location.hash = hash;
        }, hash2);
        expect(browser.getUrl()).to.equal(url2);
    });
});