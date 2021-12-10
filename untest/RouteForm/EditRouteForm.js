//UREDI RUTU

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


            .execute('scrollTo(0,3000)')

            //RUTA, NAVIGACIJA
            .useCss() // we're back to CSS now
            .waitForElementVisible("#DatabaseDropdown")
            .click("#DatabaseDropdown")
            .click('link text', 'Rute')

            .click('#dataTables-example tr:nth-child(1) > td:nth-child(1)')
            .click('link text', 'Uredi')

            ///UREDI RUTU

            //NAZIV
            .waitForElementVisible("#route\\[title\\]")
            .setValue('#route\\[title\\]', 'Ruta NW')

            //KRATKI NAZIV
            .waitForElementVisible("#route\\[shortTitle\\]")
            .setValue('#route\\[shortTitle\\]', 'RNW')

            //KATEGORIJA
            .waitForElementVisible("#route\\[category\\]")
            .setValue('#route\\[category\\]', 'Deluxe')

            //VRSTA
            .waitForElementVisible("#route\\[type\\]")
            .setValue('#route\\[type\\]', 'TBA')

            //PRIPADA
            .waitForElementVisible("#route\\[parent\\]")
            .setValue('#route\\[parent\\]', 'Divine Dalmatia')

            //DANI RUTE
            .execute(function () {
                document.querySelector('button.btn.btn-primary').scrollIntoView();
            }, [])

            .click('link text', 'Novi unos')
            .waitForElementVisible("#route\\[routeLocations\\]\\[1\\]\\[location\\]")
            .click('link text', 'Novi unos')
            .waitForElementVisible("#route\\[routeLocations\\]\\[2\\]\\[location\\]")

            //1.DAN

            //LUKA
            .waitForElementVisible("#route\\[routeLocations\\]\\[0\\]\\[location\\]")
            .setValue('#route\\[routeLocations\\]\\[0\\]\\[location\\]', 'Baška')

            //VRSTA BORAVKA
            .waitForElementVisible("#route\\[routeLocations\\]\\[0\\]\\[stayType\\]")
            .setValue('#route\\[routeLocations\\]\\[0\\]\\[stayType\\]]', 'Ukrcaj')


            //2.DAN

            //LUKA
            .waitForElementVisible("#route\\[routeLocations\\]\\[1\\]\\[location\\]")
            .setValue('#route\\[routeLocations\\]\\[1\\]\\[location\\]', 'Gradac')

            //VRSTA BORAVKA
            .waitForElementVisible("#route\\[routeLocations\\]\\[1\\]\\[stayType\\]")
            .setValue('#route\\[routeLocations\\]\\[1\\]\\[stayType\\]', 'Noćenje')


            //3.DAN

            //LUKA
            .waitForElementVisible("#route\\[routeLocations\\]\\[2\\]\\[location\\]")
            .setValue('#route\\[routeLocations\\]\\[2\\]\\[location\\]', 'Ist')

            //VRSTA BORAVKA
            .waitForElementVisible("#route\\[routeLocations\\]\\[2\\]\\[stayType\\]")
            .setValue('#route\\[routeLocations\\]\\[2\\]\\[stayType\\]', 'Iskrcaj')

            //SPREMI
            .execute(function () {
                document.querySelector('button.btn.btn-primary').scrollIntoView();
            }, [])

            .waitForElementVisible('button.btn.btn-primary')
            .click("button.btn.btn-primary")
            .end();

    }
};