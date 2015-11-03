import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    rsvp() {
      console.log('rsvp');
    },

    volunteer() {
      console.log('volunteer');
    }
  }
});
