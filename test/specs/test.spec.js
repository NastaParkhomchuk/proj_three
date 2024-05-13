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

// it('should select the Free operating system option', async () => {
//     await $('div[data-value="free-debian-centos-coreos-ubuntu-or-byol-bring-your-own-license"]').waitForDisplayed({ timeout: 10000 });
//     const operatingSystemDropdown = await $('div[data-value="free-debian-centos-coreos-ubuntu-or-byol-bring-your-own-license"]');
//     await operatingSystemDropdown.click();
//     await $('div[data-value="free-debian-centos-coreos-ubuntu-or-byol-bring-your-own-license"] .ZM72od').waitForDisplayed({ timeout: 10000 });
//     const freeOperatingSystemOption = await $('div[data-value="free-debian-centos-coreos-ubuntu-or-byol-bring-your-own-license"]');
//     await freeOperatingSystemOption.click();
//     await browser.pause(2000);
// it('should select the Free operating system option', async () => {
//     await $('span.VfPpkd-rymPhb-fpDzbe-fmcmS').waitForDisplayed({ timeout: 10000 });

//     await $('span.VfPpkd-rymPhb-fpDzbe-fmcmS').click();

//     await browser.pause(2000);
// });

// it('should select the Free operating system option', async () => {
//     await $('span.VfPpkd-rymPhb-fpDzbe-fmcmS').waitForDisplayed({ timeout: 10000 });

//     await $('span.VfPpkd-rymPhb-fpDzbe-fmcmS').click();

//     await browser.pause(2000);
// });


//class="VfPpkd-xl07Ob-XxIAqe VfPpkd-xl07Ob-XxIAqe-OWXEXe-tsQazb VfPpkd-xl07Ob VfPpkd-YPmvEd IWDrLe"
// < class="MCs1Pd HiC7Nc VfPpkd-OkbHre VfPpkd-aJasdd-RWgCYc-wQNmvb VfPpkd-rymPhb-ibnC6b VfPpkd-rymPhb-ibnC6b-OWXEXe-gk6SMd VfPpkd-rymPhb-ibnC6b-OWXEXe-SfQLQb-Woal0c-RWgCYc" jsaction=" keydown:RDtNu; keyup:JdS61c; click:o6ZaF; mousedown:teoBgf; mouseup:NZPHBc; mouseleave:xq3APb; touchstart:jJiBRc; touchmove:kZeBdd; touchend:VfAz8;focusin:MeMJlc; focusout:bkTmIf;mouseenter:SKyDAe; change:uOgbud" role="option" aria-selected="true" tabindex="0" data-value="free-debian-centos-coreos-ubuntu-or-byol-bring-your-own-license"  data-708c49e2-dcf0-4d62-b457-88577bfe3081="Free: Debian, CentOS, CoreOS, Ubuntu or BYOL (Bring Your Own License)"><span class="VfPpkd-rymPhb-pZXsl"></span><div class="ZM72od BGm30"></div>< class="VfPpkd-rymPhb-Gtdoyb">< class="VfPpkd-rymPhb-fpDzbe-fmcmS" jsname="K4r5Ff" 
const YourPageObject = require('/Users/anastasiaparkhomchuk/Desktop/proj_wdiothree/proj_three/YourPageObject.js');

describe('Provisioning Model Selection', () => {
    it('should select the Regular provisioning model', async () => {
        await CalculatorPage.selectRegularProvisioningModel();
    // it('should select the Regular provisioning model', async () => {
    //     const yourPage = new YourPageObject();
    //     await yourPage.selectRegularProvisioningModel();
    //     await browser.pause(2000);
    });
});

const CalculatorPage = require('/Users/anastasiaparkhomchuk/Desktop/proj_wdiothree/proj_three/calculatorPage.js');

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
//<button type="button" role="switch" jsname="DMn7nd" class="eBlXUe-scr2fc eBlXUe-scr2fc-OWXEXe-uqeOfd" jslog="198384; track:click,impression;mutable:true;fYPJpb:W251bGwsW1tbbnVsbCxudWxsLDgsOV0sbnVsbCxudWxsLG51bGwsW251bGwsbnVsbCxudWxsLG51bGwsbnVsbCwxMTQsMywwLDBdXV1d;" aria-checked="false" aria-label="Add GPUs"><div class="eBlXUe-l6JLsf"><div class="eBlXUe-uMhiad-haAclf"><span class="RBHQF-ksKsZd eBlXUe-Qsb3yd RBHQF-ksKsZd-OWXEXe-ZmdkE" data-unbounded="true" jscontroller="LBaJxb" jsname="m9ZlFb"></span><div class="eBlXUe-uMhiad eBlXUe-uMhiad-OWXEXe-zfdrlf"><div class="eBlXUe-lw9akd"><div class="eBlXUe-pafCAf-OWXEXe-IT5dJd"><span class="eBlXUe-pafCAf" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M9.55 18.2 3.65 12.3 5.275 10.675 9.55 14.95 18.725 5.775 20.35 7.4Z"></path></svg></span></div><div class="eBlXUe-pafCAf-OWXEXe-Xhs9z"><span class="eBlXUe-pafCAf" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M6.4 19.2 4.8 17.6 10.4 12 4.8 6.4 6.4 4.8 12 10.4 17.6 4.8 19.2 6.4 13.6 12 19.2 17.6 17.6 19.2 12 13.6Z"></path></svg></span></div></div></div></div><span class="eBlXUe-hywKDc"></span><span class="OiePBf-zPjgPe"></span></div></button>
//<div class=" e2WL2b MYT3K pV2hx oLWDHd"><input class="E7Widc" type="radio" jsname="GCYh9b" jsaction="change:VTwMI" name="107" id="regular" value="regular" jslog="198355; track:click,impression; mutable:true;fYPJpb:W251bGwsW1tbbnVsbCxudWxsLDgsOV0sbnVsbCxudWxsLG51bGwsW251bGwsbnVsbCxudWxsLG51bGwsbnVsbCwxMDcsMTEsMCwwXV1dXQ==;" checked=""><label class="zT2df" for="regular">Regular</label></div>
// <label class="zT2df" for="regular">Regular</label>
//<div class=" e2WL2b MYT3K pV2hx oLWDHd"><input class="E7Widc" type="radio" jsname="GCYh9b" jsaction="change:VTwMI" name="107" id="regular" value="regular" jslog="198355; track:click,impression; mutable:true;fYPJpb:W251bGwsW1tbbnVsbCxudWxsLDgsOV0sbnVsbCxudWxsLG51bGwsW251bGwsbnVsbCxudWxsLG51bGwsbnVsbCwxMDcsMTEsMCwwXV1dXQ==;" checked=""><label class="zT2df" for="regular">Regular</label></div>

// it('should ', async () => {
//     browser.url('https://cloud.google.com/products/calculator?hl=ru&dl=CiRkMThmYWE2Yi04M2I0LTQ0N2MtOWQ3ZC03ODRiZThjYmJlYzAQCBokQTJGMjREMzUtNTIyMi00OTNELTk0M0QtNEZBNkNDQjlGRkIw');
//     await $('button.').click();
//     const selector = '[tabindex="0"][jscontroller="KRZHBd"][role="button"]';
//     const button = await $(selector);
//     await button.click();