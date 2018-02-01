const expect = require('chai').expect;

const baseUrl = 'http://backbonejs.org/';
const url1 = `${baseUrl}#Getting-started`;
const hash2 = '#Model-View-separation';
const url2 = `${baseUrl}${hash2}`;

describe('hash-only change works via browser.url', function() {
    it('works1', function() {
        browser.url(baseUrl);
        expect(browser.getUrl()).to.equal(baseUrl);
        browser.url(url2);
        expect(browser.getUrl()).to.equal(url2);
    });

});

describe('hash-only change works via JS', function() {
    it('works2', function () {
        browser.url(baseUrl);
        expect(browser.getUrl()).to.equal(baseUrl);
        browser.execute(function (hash) {
            location.hash = hash;
        }, hash2);
        expect(browser.getUrl()).to.equal(url2);
    });
});