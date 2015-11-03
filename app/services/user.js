import Ember from 'ember';

export default Ember.Service.extend({
  user: null,
  content: Ember.computed.alias('user'),
  getUser() {
    this.get('user');
  },
  setUser(user) {
    this.set('user', user);
  },
  clearUser() {
    this.set('user', null);
  }
});
