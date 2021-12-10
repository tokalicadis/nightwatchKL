//UREDI POSOTJEĆU AGENCIJU


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

            //AGENCIJE, NAVIGACIJA
            .useCss() // we're back to CSS now
            .waitForElementVisible("#BusinessDropdown")
            .click("#BusinessDropdown")
            .click('link text', 'Agencije')

            .click('#dataTables-example tr:nth-child(1) > td:nth-child(1)')
            .click('link text', 'Uredi')


            ///UREDI AGENCIJU FORMA


            //NAZIV
            .waitForElementVisible("#agency_title")
            .clearValue("#agency_title")
            .setValue('#agency_title', 'Agencija NW.JS')

            //KRATKI NAZIV
            .waitForElementVisible("#agency_shortTitle")
            .clearValue("#agency_shortTitle")
            .setValue('#agency_shortTitle', 'ANW')

            //VRSTA
            .waitForElementVisible("#agency_type")
            .clearValue("#agency_type")
            .setValue('#agency_type', 'Domaća Agencija')

            //FAKTURIRANJE
            .waitForElementVisible('#agency_billing')
            .clearValue('#agency_billing')
            .setValue('#agency_billing','Agenciji')


            //JEZIK FAKTURE
            .waitForElementVisible('#agency_billingLanguage')
            .clearValue('#agency_billingLanguage')
            .setValue('#agency_billingLanguage', 'abhaski')

            //DRŽAVA
            .waitForElementVisible('#agency_country')
            .clearValue('#agency_country')
            .setValue('#agency_country', 'Albanija')


            //ADRESA
            .waitForElementVisible('#agency_address')
            .clearValue('#agency_address')
            .setValue('#agency_address', 'Adresa NW')

            //INTERNET STRANICA
            .waitForElementVisible('#agency_website')
            .clearValue('#agency_website')
            .setValue('#agency_website', 'Web Stranica NW')


            //VLASNIK
            .waitForElementVisible('#agency_owner')
            .clearValue('#agency_owner')
            .setValue('#agency_owner', 'Vlasnik NW')

            //VAT/OIB
            .waitForElementVisible('#agency_vat')
            .clearValue('#agency_vat')
            .setValue('#agency_vat', 'OIB ili VAT NW')

            //BROJ RAČUNA
            .waitForElementVisible('#agency_accountNumber')
            .clearValue('#agency_accountNumber')
            .setValue('#agency_accountNumber', 'Broj računa NW')

            //BANKA
            .waitForElementVisible('#agency_bank')
            .clearValue('#agency_bank')
            .setValue('#agency_bank', 'Banka NW')

            //BILJEŠKA
            .waitForElementVisible('#agency_note')
            .clearValue('#agency_note')
            .setValue('#agency_note', 'Bilješke NW')

            //SPREMI
            .execute('scrollTo(0,3000)')

            .waitForElementVisible('button.btn.btn-primary')
            .click("button.btn.btn-primary")
            .pause(5000)
            .end();

    }
};