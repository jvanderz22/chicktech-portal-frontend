import Ember from 'ember';

export default Ember.Controller.extend({
  routing: Ember.inject.service('-routing'),
  session: Ember.inject.service('session'),

  actions: {
    signIn() {
      var promise = this.get('session').authenticate('authenticator:authenticator', this.get('fields'))
      promise.then((data) => {
        this.get('routing').transitionTo('dashboard');
      });
      promise.catch((reason) => {
        this.set('errorMessage', reason.error);
      });
      return promise
    }
  }
});
