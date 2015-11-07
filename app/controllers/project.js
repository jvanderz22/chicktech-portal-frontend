import Ember from 'ember';

export default Ember.Controller.extend({
  user: Ember.inject.service(),

  canVolunteer: Ember.computed.not('alreadyVolunteered'),

  alreadyVolunteered: Ember.computed('user.content.projects.[]', 'content', function() {
    return this.get('user.content.projects').contains(this.get('content'));
  }),

  actions: {
    volunteer() {
      var user = this.get('user.content');
      var content = this.get('content');
      content.get('volunteers').addObject(user);
      var promise = content.save()
      return promise
    }
  }
});
