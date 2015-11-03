import Ember from 'ember';

export default Ember.Route.extend({
  user: Ember.inject.service(),

  beforeModel() {
    if (!this.get('user').get('content.isAdmin')) {
      this.replaceWith('dashboard');
    }
  }
});
