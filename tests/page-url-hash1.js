const expect = require('chai').expect;

const baseUrl = 'http://backbonejs.org/';
const hash2 = '#Model-View-separation';
const url2 = `${baseUrl}${hash2}`;

describe('hash-only change via JS', function() {
    it('works', function() {
        browser.url(baseUrl);
        expect(browser.getUrl()).to.equal(baseUrl);
        browser.execute(function (hash) {
            location.hash = hash;
        }, hash2);
        expect(browser.getUrl()).to.equal(url2);
    });
});
