//DODAJ NOVOG KLIJENTA

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

            //KLIJENT, NAVIGACIJA

            .useCss() // we're back to CSS now
            .waitForElementVisible("#BusinessDropdown")
            .click("#BusinessDropdown")
            .click('link text', 'Klijenti')
            .click('link text', 'Novo')

            ///DODAJ KLIJENTA FORMA


            //IME
            .waitForElementVisible("#client_firstName")
            .setValue('#client_firstName', 'Ime NW')

            //PREZIME
            .waitForElementVisible("#client_lastName")
            .setValue('#client_lastName', 'Prezime NW')

            //EMAIL
            .waitForElementVisible("#client_email")
            .setValue('#client_email', 'Mail NW')

            //ADRESA
            .waitForElementVisible("#client_address")
            .setValue('#client_address', 'Adresa NW')

            //JEZIK
            .waitForElementVisible("#client_language")
            .setValue('#client_language', 'Alabama')

            //DRŽAVA
            .waitForElementVisible("#client_country")
            .setValue('#client_country', 'Andora')

            //BILJEŠKA
            .waitForElementVisible("#client_note")
            .setValue('#client_note', 'Bilješka NW')

            //SPREMI
            .execute(function () {
                document.querySelector('button.btn.btn-primary').scrollIntoView();
            }, [])

            .waitForElementVisible('button.btn.btn-primary')
            .click("button.btn.btn-primary")
            .end();

    }
};