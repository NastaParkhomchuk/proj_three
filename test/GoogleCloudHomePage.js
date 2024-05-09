class GoogleCloudHomePage {
    constructor(browser) {
        this.browser = browser;
        this.searchIcon = '.KKOy5d';
        this.searchInput = 'input[type="text"]';
        this.searchResultLink = '.K5hUy';
    }

    async open() {
        await this.browser.url('https://cloud.google.com/');
    }

    async clickSearchIcon() {
        await this.browser.elementClick(this.searchIcon);
    }

    async enterSearchQuery(query) {
        const searchInputElem = await this.browser.$(this.searchInput);
        await searchInputElem.elementSendKeys(query);
        await this.browser.keys('Enter');
    }


    async getSearchResultLinkText() {
        const linkElement = await this.browser.$(this.searchResultLink);
        return linkElement.getText();
    }
}
module.exports = GoogleCloudHomePage;
