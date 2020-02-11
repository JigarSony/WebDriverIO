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

}

module.exports = new BlazePage();