//IZBRIŠI CHARTER REZERVACIJU


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

            //CHARTER/MIX NAVIGACIJA
            .useCss() // we're back to CSS now
            .waitForElementVisible("#BookingsDropdown")
            .click("#BookingsDropdown")
            .click('link text', 'Charter/Mix')
            .pause(2000)

            //BRIŠI CHARTER
            .setValue('#type','Charter')
            .pause(5000)

            .click('#dataTables-example tr:nth-child(1) > td:nth-child(1)')
            .waitForElementVisible(".btn-danger")
            .click('.btn-danger')

            .pause(2000)
            .acceptAlert()
            .pause(5000)



            .end();

    }
};