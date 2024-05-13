class CalculatorPage {
    get pricingCalculatorLink() { return $('=Google Cloud Pricing Calculator'); }
    get addToEstimateButton() { return $('button.UywwFc-LgbsSe'); }
    get numberOfInstancesInput() { return $('input[jsname="YPqjbf"]'); }

    async navigateToPricingCalculator() {
        await browser.url('https://cloud.google.com/search?hl=ru&q=Google%20Cloud%20Platform%20Pricing%20Calculator');
        await this.pricingCalculatorLink.waitForDisplayed();
        await this.pricingCalculatorLink.click();
    }

    async tapOnAddToEstimateButton() {
        await browser.url('https://cloud.google.com/products/calculator?hl=en');
        await this.addToEstimateButton.click();
    }

    async fillNumberOfInstances(number) {
        await this.numberOfInstancesInput.waitForDisplayed({ timeout: 10000 });
        await this.numberOfInstancesInput.setValue(number);
        await browser.pause(2000);
    }
}

module.exports = new CalculatorPage();



class YourPageObject {
    get regularProvisioningModelRadio() { return $('input[regular]'); }

    async selectRegularProvisioningModel() {
        await this.regularProvisioningModelRadio.waitForDisplayed({ timeout: 10000 });
        await this.regularProvisioningModelRadio.click();
    }
}

module.exports = YourPageObject;
