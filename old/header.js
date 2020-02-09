describe("Verify the header", function(){

    it("get the header text", function(){
        browser.url('https://www.freshworks.com');
        const header = $('h1');
        let text = header.getText();
        header.console.log(text);
    });
});   