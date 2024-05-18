class CalculatorPage {
    get machineFamilyDropdown() { return $('[aria-labelledby="i18 i19"]'); }
    get seriesDropdown() { return $('[aria-labelledby="i20 i21"]'); }
    get machineTypeDropdown() { return $('[aria-labelledby="i22 i23"]'); }
    get addGPUsButton() { return $('[aria-labelledby="i24 i25"]'); }
    get gpuTypeDropdown() { return $('[aria-labelledby="i26 i27"]'); }
    get numberOfGPUsDropdown() { return $('[aria-labelledby="i28 i29"]'); }
    get localSSDInput() { return $('[aria-labelledby="i30"]'); }
    get datacenterLocationDropdown() { return $('[aria-labelledby="i31 i32"]'); }
    get committedUsageDropdown() { return $('[aria-labelledby="i33 i34"]'); }


    // get machineTypeDropdown() { return $('div.O1htCb-H9tDt span.VfPpkd-rul__trigger'); }
    // get machineTypeOption() { return $(`//span[text()="Machine type"]/ancestor::div[contains(@class, "O1htCb-H9tDt")]//div[contains(text(), "n1-standard-8")]`); }

    // Methods
    async fillForm() {
        await this.machineFamilyDropdown.click();
        await $('[jsname="Fb0Bif"][aria-label="General Purpose"]').click();

        await this.seriesDropdown.click();
        await $('[jsname="Fb0Bif"][aria-label="N1"]').click();

        await this.machineTypeDropdown.click();
        await $('[jsname="Fb0Bif"][aria-label="n1-standard-8 (vCPUs: 8, RAM: 30 GB)"]').click();

        await this.addGPUsButton.click();
        await this.gpuTypeDropdown.click();
        await $('[jsname="Fb0Bif"][aria-label="NVIDIA Tesla V100"]').click();
        await this.numberOfGPUsDropdown.click();
        await $('[jsname="Fb0Bif"][aria-label="1"]').click();

        await this.localSSDInput.setValue('2x375 Gb');

        await this.datacenterLocationDropdown.click();
        await $('[jsname="Fb0Bif"][aria-label="Frankfurt (europe-west3)"]').click();

        await this.committedUsageDropdown.click();
        await $('[for="1-year"]').click();
    }

    async selectMachineType(machineType) {
        await this.machineTypeDropdown.click();
        const machineTypeOption = await $(`//div[contains(text(), "${machineType}")]`);
        await machineTypeOption.waitForClickable({ timeout: 5000 });
        await machineTypeOption.click();
    }

    async clickAddGPUsButton() {
        await this.addGPUsButton.waitForClickable({ timeout: 5000 });
        await this.addGPUsButton.click();
    }

    async isAddGPUsButtonChecked() {
        const isChecked = await this.addGPUsButton.getAttribute('aria-checked');
        return isChecked === 'true';
    }

async selectRegularProvisioningModel() {
    const regularProvisioningRadioButton = await $('input#regular');
    await regularProvisioningRadioButton.waitForDisplayed({ timeout: 10000 });
    await regularProvisioningRadioButton.click();
}

    async navigateToPricingCalculator() {
    await browser.url('https://cloud.google.com/search?hl=ru&q=Google%20Cloud%20Platform%20Pricing%20Calculator');
    const pricingCalculatorLink = await $('=Google Cloud Pricing Calculator');
    await pricingCalculatorLink.waitForDisplayed();
    await pricingCalculatorLink.click();
}

    async tapOnAddToEstimateButton() {
    await browser.url('https://cloud.google.com/products/calculator?hl=en');
    const addToEstimateButton = await $('button.UywwFc-LgbsSe');
    await addToEstimateButton.click();
}

    async fillNumberOfInstances(number) {
    const numberOfInstancesInput = await $('input[jsname="YPqjbf"]');
    await numberOfInstancesInput.waitForDisplayed({ timeout: 10000 });
    await numberOfInstancesInput.setValue(number);
    await browser.pause(2000);
}
}
module.exports = new CalculatorPage();
