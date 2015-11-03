import Ember from 'ember';

export default Ember.Component.extend({
  elementId: 'page-header',
  expanded: false,
  actions: {
    expand() {
      this.set('expanded', !this.get('expanded'));
    }
  }
});
