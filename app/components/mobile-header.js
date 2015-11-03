import Ember from 'ember';

export default Ember.Component.extend({
  classNames: 'mobile-header',
  expanded: false,
  actions: {
    expand() {
      this.set('expanded', !this.get('expanded'));
    }
  }
});
