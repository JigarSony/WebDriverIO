const blazePage = require("../pages/blazemeter")

describe("blaze page element handle",function(){

    it("get Text of all main links",function(){
       browser.url("https://www.blazemeter.com/");
       blazePage.textforli;
       blazePage.textforUseCasesElement;
    });

});