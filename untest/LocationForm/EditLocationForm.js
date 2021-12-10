//UREDI LUKU

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

            //LUKE, NAVIGACIJA
            .useCss() // we're back to CSS now
            .waitForElementVisible("#DatabaseDropdown")
            .click("#DatabaseDropdown")
            .click('link text', 'Luke')



            .click('#dataTables-example tr:nth-child(1) > td:nth-child(1)')
            .click('link text', 'Uredi')

            ///UREDI LUKU FORMA


            //NAZIV
            .waitForElementVisible("#location_title")
            .setValue('#location_title', 'Luka NW')

            //ŽUPANIJA
            .waitForElementVisible("#location_county")
            .setValue('#location_county', 'Istarska')

            //SPREMI
            .execute('scrollTo(0,3000)')

            .waitForElementVisible('button.btn.btn-primary')
            .click("button.btn.btn-primary")
            .end();

    }
};