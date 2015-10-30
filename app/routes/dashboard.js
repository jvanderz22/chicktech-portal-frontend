import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  setupController(controller, model){
    this._super(controller, model);
    var eventsPromise = this.get('store').findAll('event');
    eventsPromise.then(json => {
      controller.set('events', json);
    });
    var announcementsPromise = this.get('store').findAll('announcement');
    announcementsPromise.then(json => {
      controller.set('announcements', json);
    });
    var projectsPromise = this.get('store').findAll('project');
    projectsPromise.then(json => {
      controller.set('projects', json);
    });
  }
});
