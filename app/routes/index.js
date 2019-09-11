import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return { tipPercent: 0, originalBill: 0, totalBill: 0};
  }
});