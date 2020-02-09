describe("Intraction with Web Element", function(){

    it("enter value in a field", function(){
        browser.url('/');
        const search = $('#twotabsearchtextbox');
        search.setValue('Apple Macbook');
    });

    it("get text of the field", function(){
        browser.url('/');
        const label = $('span.a-size-base a-color-base');
        let text = label.getText();
        console.log(text);
    });

    it("click on the field", function(){
        browser.url('/');
        const icon = $('input.nav-input');
        icon.click();
    });

});