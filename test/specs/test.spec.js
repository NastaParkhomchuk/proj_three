
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



describe('Search functionality', () => {
    it('should search for "Google Cloud Platform Pricing Calculator"', () => {
        browser.url('https://cloud.google.com/');

        const searchIcon = $('[jsname="Z5wyCf"]');
        searchIcon.click();

        const searchField = $('#i4');
        searchField.setValue('Google Cloud Platform Pricing Calculator');

        browser.keys('Enter');

        const searchResults = $('.search-results');
        // expect(searchResults).to.exist;
        expect(searchResults.isExisting());
    });
});






it('should navigate to Pricing Calculator', async () => {
    const pricingCalculatorLink = $('div.Nyd2Jd > div.x9K9hf.QKrqHf > a.K5hUy[href="https://cloud.google.com/pricing"]');
    expect(await pricingCalculatorLink.isExisting()).toBe(true);
    await pricingCalculatorLink.click();
    await browser.waitUntil(async () => {
        return (await browser.getUrl()) === 'https://cloud.google.com/pricing';
    }, { timeout: 10000, timeoutMsg: 'Pricing Calculator page not loaded within 10 seconds' });
    const currentUrl = await browser.getUrl();
    expect(currentUrl).toBe('https://cloud.google.com/pricing');
});
