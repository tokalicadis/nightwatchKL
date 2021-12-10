//UREDI KATEGORIJU BRODA

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

            //KATEGORIJA BRODA, NAVIGACIJA
            .useCss() // we're back to CSS now
            .waitForElementVisible("#ShipsDropdown")
            .click("#ShipsDropdown")
            .click('link text','Kategorije')
            
            .click('#dataTables-example tr:nth-child(1) > td:nth-child(1)')
            .click('link text', 'Uredi')

            ///UREDI KATEGORIJU BRODA FORMA

            //REDOSLIJED
            .waitForElementVisible("#ship_category\\[sequence\\]")
            .setValue('#ship_category\\[sequence\\]', '1')

            //NAZIV
            .waitForElementVisible("#ship_category\\[title\\]")
            .setValue('#ship_category\\[title\\]', 'Brod NW')

            //KRATKI NAZIV
            .waitForElementVisible("#ship_category\\[shortTitle\\]")
            .setValue('#ship_category\\[shortTitle\\]', 'BNW')

            //SPREMI
            .execute('scrollTo(0,3000)')

            .waitForElementVisible('button.btn.btn-primary')
            .click("button.btn.btn-primary")
            .end();

    }
};