import Ember from 'ember';

export default Ember.Service.extend({
  user: null,
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
