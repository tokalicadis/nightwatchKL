//DODAJ CHARTER FORM - OPCIJA

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

            ///DODAJ CHARTER FORMU


            //VRSTA BOOKINGA
            .waitForElementVisible("#booking\\[type\\]")
            .setValue('#booking\\[type\\]', 'Charter')

            //RUTA
            .waitForElementVisible("#booking\\[route\\]")
            .setValue('#booking\\[route\\]', 'Adriatic Explorer One Way from Dubrovnik')


            //DATUM POLASKA
            .waitForElementVisible('#booking\\[startDate\\]')
            .setValue('#booking\\[startDate\\]','11122022')

            //DATUM ZAVRSETKA
            .waitForElementVisible('#booking\\[endDate\\]')
            .setValue('#booking\\[endDate\\]','11192022')


            //KLIJENT
            .waitForElementVisible('#booking\\[client\\]')
            .setValue('#booking\\[client\\]', 'Rachel Bowers')

            //AGENCIJA
            .waitForElementVisible('.multiselect-search')
            .click('.multiselect-search')
            .keys(['\uE015', '\uE006'])




            //KATEGORIJA BRODA
            .waitForElementVisible('#booking\\[shipCategory\\]')
            .setValue('#booking\\[shipCategory\\]', 'NazivSEL')

            //STATUS
            .waitForElementVisible('#booking\\[status\\]')
            .setValue('#booking\\[status\\]', 'Opcija')

            //OPCIJA ISTIČE
            .waitForElementVisible('#booking\\[optionExpirationDate\\]')
            .setValue('#booking\\[optionExpirationDate\\]', '121220211130')


            //KOMERCIJALIST
            .waitForElementVisible('#booking\\[assignee\\]')
            .setValue('#booking\\[assignee\\]', 'Adis Tokalić')


            //SPREMI
            .execute(function () {
                document.querySelector('button.btn.btn-primary').scrollIntoView();
            }, [])

            .waitForElementVisible('button.btn.btn-primary')
            .click("button.btn.btn-primary")
            .end();

    }
};