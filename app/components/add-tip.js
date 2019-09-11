import Component from '@ember/component';

export default Component.extend({
    actions: {
        //get selected tip amount
        selectOption(option){
            if (option == 'fifteen')
                this.number = .15;
            else if (option == 'eighteen')
            this.number = .18;
            else if (option == 'twenty')
            this.number = .20;    
        },
        addTip() {
            this.onAddTip(this.number);
        }
    }
});
