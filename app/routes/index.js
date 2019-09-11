import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
         //nightmode/lightmode
         toggleDarkLight:function() {
            var container = document.getElementById("container");
            var currentClass = container.className;
            container.className =  currentClass == "dark-mode" ? "light-mode" : "dark-mode";
        },

    },
  model(){
    return { tipPercent: 0, originalBill: 0, totalBill: 0};
  }
});