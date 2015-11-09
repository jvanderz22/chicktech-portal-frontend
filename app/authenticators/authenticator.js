import Ember from 'ember';
import Base from 'ember-simple-auth/authenticators/base';

export default Base.extend({
  store: Ember.inject.service(),
  user: Ember.inject.service(),

  restore(data) {
    var promises = {
      session: this._loadSession().then(session => {
        return this._loadUser(session);
      })
    }
    return Ember.RSVP.hash(promises);
  },
  authenticate(options) {
    var promise = Ember.$.ajax('/sessions', {
      type: 'POST',
      data: JSON.stringify({
        'data': {
          'email': options.email,
          'password': options.password
        }
      })
    });
    promise.then(session => {
      this._loadUser(session)
    });
    return promise;
  },
  invalidate(data) {
    this.get('user').clearUser();
    return Ember.RSVP.resolve();
  },
  _loadUser(session) {
    var promise = this.get('store').find('user', session.data.relationships.user.id)
    promise.then(user => {
      this.get('user').setUser(user);
    });
    return promise;
  },
  _loadSession() {
    return Ember.$.get('/sessions');
  }
});
