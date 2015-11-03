import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  bio: DS.attr(),
  email: DS.attr(),
  firstName: DS.attr(),
  lastName: DS.attr(),
  location: DS.attr(),
  phoneNumber: DS.attr(),
  role: DS.attr(),

  fullName: Ember.computed('firstName', 'lastName', function() {
    return this.get('firstName') + ' ' + this.get('lastName');
  }),

  isAdmin: Ember.computed.equal('role', 'admin')
});
