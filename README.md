# WebDriverIO

[Playlist](https://www.youtube.com/playlist?list=PLFGoYjJG_fqqswF8qDdWNG3b-BtZfiqQn)

## Part - 1

[WebDriverIO](https://webdriver.io/)

> What is WebdriverIO?

> WebdriverIO is a custom implementation for selenium's W3C webdriver API. It is written in Javascript and packaged into 'npm' and runs on Node.js.

## Part - 2 

### Webdriver IO Installation:

1. Java

2. Node.js installation. node -v

3. NPM installation. npm -v

4. install VSC editor

Create folder in VSC > Open 
Open Terminal > pwd > get path

Initialise npm : nam init give details and yes

Package.json created it is similar to pom.xml

5. webdriver setup and installation commands:

-- npm init

-- npm install webdriverio --save-dev

-- npm install @wdio/cli

-- ./node_modules/.bin/wdio config

-- npm install chai --save-dev

-- npm install chai-webdriverio --save-dev

-- npm install local-runner --save-dev


Open wdio.conf.js 

Go to beforeTest function > uncomment and write


 beforeTest: function (test, context) {
 
        const chai = require('chai')
        
        const chaiWebdriver = require('chai-webdriverio').default
        
        chai.use(chaiWebdriver(browser))

        global.assert = chai.assert
        
        global.should = chai.should
        
        global.expect = chai.expect
        
    },


// "test": "echo \"Error: no test specified\" && exit 1"


To run standalone server 

Download standalone server > cmd java -jar “servername.jar” -port 4545



