class BlazePage{

    get parent(){
        return $('ul.list-nav-links');
    }

    get child(){
        return this.parent.$$('li');
    }

    get textforli(){
        return this.child.filter(element => {
            console.log(element.getText());
        });
    }

    get useCasesElement(){
        return $('div#main_b_footer_second_block>ul>li');
    }

    get textforUseCasesElement(){
        return this.useCasesElement.filter(element =>{
            console.log(element.getText());
        })
    }

    //6th getter and non getter method
    //get specifChildElement(index){ -- it will give error getter have no params
    //remove get and run it will work
     specifChildElement(index){
        //return this.parent.$('li:nth-child(${index})')
        return this.parent.$(`li:nth-child(${index})`)
    }

    getspecifChildElementText(index){
        console.log(this.specifChildElement(index).getText());
    }

}

module.exports = new BlazePage();