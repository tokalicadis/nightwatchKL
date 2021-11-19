module.exports = {
    'Demo test kl-test' : function(browser) {
        browser
            //DRIVER SETUP
            .url('https://test.kl.hexis.dev/')
            .maximizeWindow()
            .waitForElementVisible('body')
            .useCss()
            .click(".btn")
            .useXpath() // every selector now must be xpath

            //LOGIN USERNAME
            .waitForElementVisible("//*[@id =\'identifierId\']")
            .setValue("//*[@id =\'identifierId\']", 'adis@hexis.hr')
            .click("//*[@id ='identifierNext']")

            //LOGIN PASSWORD
            .waitForElementVisible("//*[@id ='password']/div[1]/div / div[1]/input")
            .setValue("//*[@id ='password']/div[1]/div / div[1]/input", 'chillstone54')
            .click("//*[@id ='passwordNext']")

            //CHARTER-MIX, NAVIGACIJA
            .useCss() // we're back to CSS now
            .waitForElementVisible("#BookingsDropdown")
            .click("#BookingsDropdown")
            .click('link text', 'Charter/Mix')
            .click('link text', 'Novo')

            ///DODAJ MIX REZERVACIJU

            //VRSTA BOOKINGA
            .waitForElementVisible("#booking\\[type\\]")
            .setValue('#booking\\[type\\]', 'Mix')

            //KATEGORIJA BRODA
            .waitForElementVisible('#booking\\[shipCategory\\]')
            .setValue('#booking\\[shipCategory\\]', 'NazivSEL')

            //DATUM ZAVRSETKA
            .waitForElementVisible('#booking\\[endDate\\]')
            .setValue('#booking\\[endDate\\]','11192021')

            //SPREMI
            .execute(function () {
            document.querySelector('#application > .btn').scrollIntoView();
            }, [])

            .waitForElementVisible('#application > .btn')
            .click("#application > .btn")
            .end();

    }
};