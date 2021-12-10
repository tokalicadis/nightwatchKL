//UREDI CHARTER FORMU - POTVRĐENO - ČEKA AKONTACIJU

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


            .pause(2000)
            .setValue('#type','Charter')
            .pause(5000)

            .click('#dataTables-example tr:nth-child(1) > td:nth-child(1)')
            .click('link text', 'Uredi')


            ///UREDI CHARTER FORMU


            //VRSTA BOOKINGA
            .waitForElementVisible("#booking\\[type\\]")
            .clearValue("#booking\\[type\\]")
            .setValue('#booking\\[type\\]', 'Charter')

            //RUTA
            .waitForElementVisible("#booking\\[route\\]")
            .clearValue("#booking\\[route\\]")
            .setValue('#booking\\[route\\]', 'Adriatic Explorer One Way from Dubrovnik')


            //DATUM POLASKA
            .waitForElementVisible('#booking\\[startDate\\]')
            .clearValue('#booking\\[startDate\\]')
            .setValue('#booking\\[startDate\\]','11122022')

            //DATUM ZAVRSETKA
            .waitForElementVisible('#booking\\[endDate\\]')
            .clearValue('#booking\\[endDate\\]')
            .setValue('#booking\\[endDate\\]','11192022')


            //KLIJENT
            .waitForElementVisible('#booking\\[client\\]')
            .clearValue('#booking\\[client\\]')
            .setValue('#booking\\[client\\]', 'Rachel Bowers')

            //AGENCIJA
            .waitForElementVisible('.multiselect-search')
            .clearValue('.multiselect-search')
            .click('.multiselect-search')
            .keys(['\uE015', '\uE006'])




            //KATEGORIJA BRODA
            .waitForElementVisible('#booking\\[shipCategory\\]')
            .clearValue('#booking\\[shipCategory\\]')
            .setValue('#booking\\[shipCategory\\]', 'Deluxe')

            //BROD
            .waitForElementVisible('#booking\\[ship\\]')
            .clearValue('#booking\\[ship\\]')
            .setValue('#booking\\[shipCategory\\]', 'Admiral')

            //STATUS
            .waitForElementVisible('#booking\\[status\\]')
            .clearValue('#booking\\[status\\]')
            .setValue('#booking\\[status\\]', 'Potvrđeno')

            //KOMERCIJALIST
            .waitForElementVisible('#booking\\[assignee\\]')
            .clearValue('#booking\\[assignee\\]')
            .setValue('#booking\\[assignee\\]', 'Adis Tokalić')


            //SPREMI
            .execute('scrollTo(0,5000)')

            .waitForElementVisible('button.btn.btn-primary')
            .click("button.btn.btn-primary")
            .pause(5000)
            .end();


    }
};