
// const { remote } = require('webdriverio');

// (async () => {
//     const browser = await remote({
//     });

//     await browser.url('https://cloud.google.com/');


//     await browser.deleteSession();
// })();


const { describe, it, before, after } = require('mocha');
const { remote } = require('webdriverio');
const GoogleCloudHomePage = require('../GoogleCloudHomePage.js');

describe('Search for Google Cloud Platform Pricing Calculator', () => {
    let browser;
    let googleCloudHomePage;

    before(async () => {
        browser = await remote({
        });
        googleCloudHomePage = new GoogleCloudHomePage(browser);
        await googleCloudHomePage.open();
    });

    it('should search for "Google Cloud Platform Pricing Calculator"', async () => {
        await googleCloudHomePage.clickSearchIcon();
        await googleCloudHomePage.enterSearchQuery('Google Cloud Platform Pricing Calculator');
        const searchResultLinkText = await googleCloudHomePage.getSearchResultLinkText();
        expect(searchResultLinkText).to.equal('Google Cloud Pricing Calculator');
    });

    after(async () => {
        if (browser) {
            await browser.deleteSession();
        }
    });
});
