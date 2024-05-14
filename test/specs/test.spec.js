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
    await browser.url('https://cloud.google.com/search?hl=ru&q=Google%20Cloud%20Platform%20Pricing%20Calculator');

    const pricingCalculatorLink = await $('=Google Cloud Pricing Calculator');
    expect(await pricingCalculatorLink.isExisting()).toBeTruthy();
    await pricingCalculatorLink.click();
    const pageTitle = await browser.getTitle();
    expect(pageTitle).toContain('Google Cloud Pricing Calculator');
});

it('should tap on the button Add to estimate', async () => {
    browser.url('https://cloud.google.com/products/calculator?hl=en');
    await $('button.UywwFc-LgbsSe').click();
    const selector = '[tabindex="0"][jscontroller="KRZHBd"][role="button"]';
    const button = await $(selector);
    await button.click();
});

it('should fill out the form with the number of instances', async () => {
    await $('input[jsname="YPqjbf"]').waitForDisplayed({ timeout: 10000 });
    const numberOfInstancesInput = await $('input[jsname="YPqjbf"]');
    await numberOfInstancesInput.setValue(4);
    await browser.pause(2000);
});

it('Fill out the form on the Google Cloud calculator page', async () => {
    it('should fill out the form with the specified data', async () => {
        await browser.url('https://cloud.google.com/products/calculator?hl=ru&dl=CiQyMGNjMzFjZi05NjVkLTQ3MzYtYjdiMC0zNTgwYTc3MmFmZTcQCBokMDA2QzIzRDQtNzZDRS00MzA0LUIxNDktOEQyODUxQ0E0RDAw');
        await CalculatorPage.fillForm();
    });
});

//dont work


const YourPageObject = require('../YourPageObject.js');

describe('Provisioning Model Selection', () => {
    it('should select the Regular provisioning model', async () => {
        await CalculatorPage.selectRegularProvisioningModel();
    });
});

const CalculatorPage = require('../calculatorPage.js');

describe('Google Cloud Pricing Calculator Tests', () => {
    it('should select machine type n1-standard-8', async () => {
        await CalculatorPage.selectMachineType('n1-standard-8');
    });
});



describe('Google Cloud Pricing Calculator Tests', () => {
    it('should toggle the Add GPUs button', async () => {
        await CalculatorPage.clickAddGPUsButton();
        const isChecked = await CalculatorPage.isAddGPUsButtonChecked();
        expect(isChecked).toBe(true);
        await CalculatorPage.clickAddGPUsButton();
        const isUnchecked = await CalculatorPage.isAddGPUsButtonChecked();
        expect(isUnchecked).toBe(false);
    });
});