//DODAJ NOVI ATRIBUT

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

            //ATRIBUTI, NAVIGACIJA
            .useCss() // we're back to CSS now
            .waitForElementVisible("#DatabaseDropdown")
            .click("#DatabaseDropdown")
            .click('link text', 'Atributi')

            .click('#dataTables-example tr:nth-child(1) > td:nth-child(1)')
            .click('link text', 'Uredi')


            ///DODAJ ATRIBUT FORMA


            //NAZIV
            .waitForElementVisible("#attribute_title")
            .clearValue("#attribute_title")
            .setValue('#attribute_title', 'Atribut NW')

            //VRSTA UNOSA
            .waitForElementVisible("#attribute_type")
            .clearValue("#attribute_type")
            .setValue('#attribute_type', 'Tekst')

            //KATEGORIJA
            .waitForElementVisible("#attribute_category")
            .clearValue("#attribute_category")
            .setValue('#attribute_category', 'General')

            //ZADANA VRIJEDNOST
            .waitForElementVisible("#attribute_defaultValue")
            .clearValue("#attribute_defaultValue")
            .setValue('#attribute_defaultValue', 'Zadana NW')

            //ODNOSI SE NA
            .waitForElementVisible("#attribute_linkedEntityType")
            .clearValue("#attribute_linkedEntityType")
            .setValue('#attribute_linkedEntityType', 'Kabina')

            //ISTAKNUTO
            .waitForElementVisible("#attribute_featured")
            .click("#attribute_featured")


            //SPREMI
            .execute('scrollTo(0,3000)')

            .waitForElementVisible('button.btn.btn-primary')
            .click("button.btn.btn-primary")
            .pause(5000)
            .end();

    }
};