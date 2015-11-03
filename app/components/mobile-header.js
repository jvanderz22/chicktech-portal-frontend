import Ember from 'ember';

export default Ember.Component.extend({
  expanded: false,
  actions: {
    expand() {
      this.set('expanded', !this.get('expanded'));
    }
  }
});
