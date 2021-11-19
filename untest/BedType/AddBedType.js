//DODAJ NOVU VRSTU LEŽAJA

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

            //VRSTA LEŽAJA, NAVIGACIJA

            .useCss() // we're back to CSS now
            .waitForElementVisible("#ShipsDropdown")
            .click("#ShipsDropdown")
            .click('link text', 'Vrste ležaja')
            .click('link text', 'Novo')

            ///DODAJ VRSTU LEŽAJA FORMA


            //NAZIV
            .waitForElementVisible("#bed_type_title")
            .setValue('#bed_type_title', 'Ležaj NW')

            //KRATKI NAZIV
            .waitForElementVisible("#bed_type_shortTitle")
            .setValue('#bed_type_shortTitle', 'LNW')

            //KAPACITET
            .waitForElementVisible("#bed_type_capacity")
            .setValue('#bed_type_capacity', '2')

            //SPREMI
            .execute('scrollTo(0,3000)')

            .waitForElementVisible('button.btn.btn-primary')
            .click("button.btn.btn-primary")
            .end();

    }
};