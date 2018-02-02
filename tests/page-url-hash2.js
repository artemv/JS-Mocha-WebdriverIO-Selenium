const expect = require('chai').expect;

const baseUrl = 'http://backbonejs.org/';
const hash2 = '#Model-View-separation';
const url2 = `${baseUrl}${hash2}`;

describe('lala', function() {
    describe('hash-only change via browser.url', function() {
        it('works', function() {
            browser.url(baseUrl);
            expect(browser.getUrl()).to.equal(baseUrl);
            browser.url(url2);
            expect(browser.getUrl()).to.equal(url2);
        });
    });
});
