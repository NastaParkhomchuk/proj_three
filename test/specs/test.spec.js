
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



// all what is down not working:


it('should navigate to Pricing Calculator', async () => {
    // const pricingCalculatorLink = $('div.Nyd2Jd');
    const pricingCalculatorLink = $('c-wiz[@class="SSPGKf"]');

    expect(await pricingCalculatorLink.isExisting()).toBe(true);
    await pricingCalculatorLink.click();
    // await browser.waitUntil(async () => {
    //     return (await browser.getUrl()) === 'https://cloud.google.com/pricing';
    // }, { timeout: 10000, timeoutMsg: 'Pricing Calculator page not loaded within 10 seconds' });
    // const currentUrl = await browser.getUrl();
    // expect(currentUrl).toBe('https://cloud.google.com/pricing');
});

it('should click on "Add to estimate"', async () => {
    await $('[jsname="V67aGc"]').waitForDisplayed({ timeout: 10000 });
    const addToEstimateButton = await $('[jsname="V67aGc"]');
    await addToEstimateButton.click();
    await browser.pause(2000);
});
it('should click on COMPUTE ENGINE', async () => {
    await $('[jsname="m9ZlFb"]').waitForDisplayed({ timeout: 10000 });
    const computeEngineButton = await $('[jsname="m9ZlFb"]');
    await computeEngineButton.click();
    await browser.pause(2000);
});

// it('should fill out the form with the number of instances', async () => {
//     await $('input#c13').waitForDisplayed({ timeout: 10000 });
//     const numberOfInstancesInput = await $('input#c13');
//     await numberOfInstancesInput.setValue(4);
//     await browser.pause(2000);


//     const CalculatorPage = require('../calculatorPage');

//     describe('Fill out the form on the Google Cloud calculator page', () => {
//         it('should fill out the form with the specified data', async () => {
//             await browser.url('https://cloud.google.com/products/calculator?hl=ru&dl=CiQyMGNjMzFjZi05NjVkLTQ3MzYtYjdiMC0zNTgwYTc3MmFmZTcQCBokMDA2QzIzRDQtNzZDRS00MzA0LUIxNDktOEQyODUxQ0E0RDAw');
//             await CalculatorPage.fillForm();
//         });
//     });



// });

