//UREDI BROD
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

            //BROD, NAVIGACIJA
            .useCss() // we're back to CSS now
            .waitForElementVisible("#ShipsDropdown")
            .click("#ShipsDropdown")
            .click('.show > li:nth-child(2) > .dropdown-item')

            .click('#dataTables-example tr:nth-child(1) > td:nth-child(1)')
            .click('link text', 'Uredi')

            ///UREDI BROD

            //NAZIV
            .waitForElementVisible("#ship\\[title\\]")
            .setValue('#ship\\[title\\]', 'Brod NW')

            //STATUS
            .waitForElementVisible("#ship\\[status\\]")
            .setValue('#ship\\[status\\]', 'Aktivan')

            //KATEGORIJA
            .waitForElementVisible("#ship\\[category\\]")
            .setValue('#ship\\[category\\]', 'NazivSEL')

            //DODATNIH LEZAJA
            .waitForElementVisible("#ship\\[numberOfExtraBeds\\]")
            .setValue('#ship\\[numberOfExtraBeds\\]', '2')

            //VLASNIK
            .waitForElementVisible("#ship\\[owner\\]")
            .setValue('#ship\\[owner\\]', 'OBRT NIKOLA')

            //RAD NA UPIT
            .waitForElementVisible("#ship\\[workOnRequest\\]")
            .click("#ship\\[workOnRequest\\]")

            //BILJESKE
            .waitForElementVisible("#ship\\[note\\]")
            .setValue('#ship\\[note\\]', 'Bilješka NW')


            //SPREMI
            .execute('scrollTo(0,3000)')

            .waitForElementVisible('button.btn.btn-primary')
            .click(".btn:nth-child(5)")
            .end();

    }
};