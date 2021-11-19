//DODAJ INDIVUALNU KABINU - RASPORED BRODOVA

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
            .waitForElementVisible("#ShipsDropdown")
            .click("#ShipsDropdown")
            .click('link text', 'Raspored')

            ///DODAJ IDNIVUDALNI RASTER


            //INDIVIVUDALNI BOOKING
            .waitForElementVisible("#\\/api\\/bookings\\/ab97b66b-09fd-4fad-af4e-dbfe8e0c576b")
            .click('#\\/api\\/bookings\\/ab97b66b-09fd-4fad-af4e-dbfe8e0c576b')

            //DESNI KLIK - NAPRAVITI BOOKING
            .useXpath()
            .moveToElement("//div[@id='local/7060c12e-a3c5-277-39a7-a3e8c9ab776b']/div[3]/div[3]", 10, 10)
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