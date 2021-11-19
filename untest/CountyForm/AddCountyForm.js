//DODAJ NOVU ŽUPANIJU

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

            //ŽUPANIJE, NAVIGACIJA
            .useCss() // we're back to CSS now
            .waitForElementVisible("#DatabaseDropdown")
            .click("#DatabaseDropdown")
            .click('link text', 'Županije')
            .click('link text', 'Novo')

            ///DODAJ ŽUPANIJU FORMA


            //NAZIV
            .waitForElementVisible("#county_title")
            .setValue('#county_title', 'Županija NW')

            //KRATKI NAZIV
            .waitForElementVisible("#county_shortTitle")
            .setValue('#county_shortTitle', 'ŽNW')

            //SPREMI
            .execute('scrollTo(0,3000)')

            .waitForElementVisible('button.btn.btn-primary')
            .click("button.btn.btn-primary")
            .end();

    }
};