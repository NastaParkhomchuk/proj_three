
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
// describe('Google Cloud Platform Pricing Calculator', () => {
//     let browser;

//     before(async () => {
//         browser = await remote({
//             capabilities: {
//                 browserName: 'chrome'
//             }
//         });
//         await browser.url('https://cloud.google.com');
//     });

//     it('should search for "Google Cloud Platform Pricing Calculator"', async () => {
//         const searchIcon = $('[jsname="Z5wyCf"]');
//         searchIcon.click();

//         const searchField = $('#i4');
//         searchField.setValue('Google Cloud Platform Pricing Calculator');

//         browser.keys('Enter');


//         const searchResults = $('.search-results');
//         expect(searchResults).to.exist;
//     });
// });

//     