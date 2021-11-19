//DODAJ NOVOG PUTNIKA

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

            //PUTNIK, NAVIGACIJA
            .useCss() // we're back to CSS now
            .waitForElementVisible("#BusinessDropdown")
            .click("#BusinessDropdown")
            .click('link text', 'Putnici')
            .click('link text', 'Novo')

            ///DODAJ PUTNIKA FORMA


            //IME
            .waitForElementVisible("#passenger_firstName")
            .setValue('#passenger_firstName', 'Ime NW')

            //PREZIME
            .waitForElementVisible("#passenger_lastName")
            .setValue('#passenger_lastName', 'Prezime NW')

            //RODENDAN
            .waitForElementVisible("#passenger_birthday")
            .setValue('#passenger_birthday', '01011999')

            //REDOSLIJED
            .waitForElementVisible("#passenger_sequence")
            .setValue('#passenger_sequence', '1')


            //SPREMI
            .execute(function () {
                document.querySelector('button.btn.btn-primary').scrollIntoView();
            }, [])

            .waitForElementVisible('button.btn.btn-primary')
            .click("button.btn.btn-primary")
            .end();

    }
};