import Ember from 'ember';

export default Ember.Controller.extend({
  routing: Ember.inject.service('-routing'),

  currentRouteName: Ember.computed.alias('routing.currentRouteName'),
  isProjectRouteActive: Ember.computed.equal('currentRouteName', 'admin.new-project')
});
