//UREDI  KONTAKT

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

            //KONTAKTI, NAVIGACIJA

            .useCss() // we're back to CSS now
            .waitForElementVisible("#BusinessDropdown")
            .click("#BusinessDropdown")
            .click('link text', 'Kontakti')

            .click('#dataTables-example tr:nth-child(1) > td:nth-child(1)')
            .click('link text', 'Uredi')

            ///UREDI KONTAKT FORMA


            //NAZIV
            .waitForElementVisible("#contact\\[title\\]")
            .setValue('#contact\\[title\\]', 'Klijent NW')

            //POZICIJA U FIRMI
            .waitForElementVisible("#contact\\[companyPosition\\]")
            .setValue('#contact\\[companyPosition\\]', 'Direktor NW')

            //TELEFON
            .waitForElementVisible("#contact\\[phone\\]")
            .setValue('#contact\\[phone\\]', '6666')

            //MOBILNI TELEFON
            .waitForElementVisible("#contact\\[mobile\\]")
            .setValue('#contact\\[mobile\\]', '5678')

            //EMAIL
            .waitForElementVisible("#contact\\[email\\]")
            .setValue('#contact\\[email\\]', 'test@nightwatchjs.com')

            //MULTISELECTS

            .execute('scrollTo(0,3000)')

            //BRODOVI
            .waitForElementVisible('#multiselect-27')
            .click('#multiselect-27')
            .keys(['\uE015', '\uE006'])

            .click('.card')

            .execute(function () {
                document.querySelector('#multiselect-32').scrollIntoView();
            }, [])

            //VLASNICI BRODOVA
            .waitForElementVisible('#multiselect-32')
            .click('#multiselect-32')
            .keys(['\uE015', '\uE006'])

            .click('.card')

            //LUKE
            .waitForElementVisible('#multiselect-37')
            .click('#multiselect-37')
            .keys(['\uE015', '\uE006'])

            .click('.card')

            //AGENCIJE
            .waitForElementVisible('#multiselect-42')
            .click('#multiselect-42')
            .keys(['\uE015', '\uE006'])

            //ŽUPANIJE
            .waitForElementVisible('#multiselect-47')
            .click('#multiselect-47')
            .keys(['\uE015', '\uE006'])





            //SPREMI
            .execute(function () {
                document.querySelector('button.btn.btn-primary').scrollIntoView();
            }, [])

            .waitForElementVisible('button.btn.btn-primary')
            .click("button.btn.btn-primary")
            .end();

    }
};