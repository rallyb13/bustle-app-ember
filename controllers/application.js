Bustle.ApplicationController = Ember.Controller.extend({
  isMediaShowing: false,
  actions: {
    showMedia: function() {
      this.set('isMediaShowing', true);
    },
    hideMedia: function() {
      this.set('isMediaShowing', false);
    }
  }
});
