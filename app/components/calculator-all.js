import Component from '@ember/component';

export default Component.extend({
    actions: {
        addTipToCalculator(tip){
            var originalBill = this.originalBill;
            this.set('model.originalBill', originalBill);
            this.set('model.tipPercent', +originalBill * +tip);
        }
    }
});
