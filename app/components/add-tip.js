import Component from '@ember/component';

export default Component.extend({
    actions: {
        //get selected tip amount
        selectOption(option){
            //conditional to find out tip percentage
            if (option == 'fifteen')
                this.number = .15;
            else if (option == 'eighteen')
            this.number = .18;
            else if (option == 'twenty')
            this.number = .20;    

            //log percent amount
            console.clear()
            console.log("Tip Percentage: ", this.number.toFixed(2));
        },
        addTip() {
            //call calculator-all function
            this.onAddTip(this.number);
        }
    }
});
