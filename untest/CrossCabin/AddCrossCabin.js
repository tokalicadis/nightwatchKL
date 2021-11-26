//DODAJ KABINU KROZ CROSS CABIN

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

            //CCR
            .useCss() // we're back to CSS now
            .waitForElementVisible("#BookingsDropdown")
            .click("#BookingsDropdown")
            .click('link text', 'Cross-Cabin')



            ///DODAJ CCR KABINU
            .waitForElementVisible('link text', 'Admiral (Charter)')
            .click('link text', 'Admiral (Charter)')
            .pause(2000)


            //DESNI KLIK - NAPRAVITI BOOKING
            .moveToElement("#\\/api\\/booking_cabins\\/5a198092-c6d8-4f01-86b8-01454d480c38", 10, 10)


            .pause(5000)
            .mouseButtonClick('right')
            .pause(2000)


            //NOVI UNOS
            .useCss()
            .click('link text', 'Novi unos')
            .pause(2000)

            /// KABINA FORMA
            .useCss()
            .pause(2000)

            //BROD
            .waitForElementVisible('.col-6:nth-child(3) .form-select')
            .setValue('.col-6:nth-child(3) .form-select', 'Brod NW')

            //RUTA
            .waitForElementVisible('.col-6:nth-child(4) .form-select')
            .setValue('.col-6:nth-child(4) .form-select', 'Dalmatian Paradise II')


            //KLIJENT
            .useXpath()
            .waitForElementVisible('//div[3]/div/div/input')
            .click('//div[3]/div/div/input')
            .keys(['\uE015', '\uE006'])


            //STATUS
            .useCss()
            .waitForElementVisible('.col .form-select')
            .setValue('.col .form-select', 'Potvrđeno')

            //STATUS PLAĆANJA
            .waitForElementVisible('.col:nth-child(2) .form-select')
            .setValue('.col:nth-child(2) .form-select', 'Plaćeno u cijelosti')


            //SPREMI
            .waitForElementVisible('.klButton > input')
            .click(".klButton > input")
            .pause(2000)
            .end();

    }
};