import Component from '@ember/component';

export default Component.extend({
    actions: {
        addTipToCalculator(tip){

            console.clear()

            //set variable original bill to be equal to user input
            var originalBill = this.originalBill;

            
            //set model values
            this.set('model.originalBill', '$' + originalBill);
            this.set('model.tipPercent', '$' + +originalBill * +tip);
            this.set('model.totalBill', +originalBill + +this.get('model.tipPercent'));

            //log some values
            console.log("Original Bill Amount: ", originalBill);
            console.log("Total Bill Amount: ", this.get('model.totalBill'));


        }
    }
});