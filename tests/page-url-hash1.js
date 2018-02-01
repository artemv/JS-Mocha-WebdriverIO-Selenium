const expect = require('chai').expect;

const baseUrl = 'http://backbonejs.org/';
const hash2 = '#Model-View-separation';
const url2 = `${baseUrl}${hash2}`;

it('hash-only change works via JS', function() {
    browser.url(baseUrl);
    expect(browser.getUrl()).to.equal(baseUrl);
    browser.execute(function (hash) {
        location.hash = hash;
    }, hash2);
    expect(browser.getUrl()).to.equal(url2);
});
