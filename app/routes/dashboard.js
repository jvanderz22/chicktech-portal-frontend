import Ember from 'ember';

export default Ember.Route.extend({
  setupController(controller, model){
    this._super(controller, model);
    var eventsPromise = this.get('store').findAll('event');
    eventsPromise.then(json => {
      controller.set('events', json);
    });
    var announcementsPromise = this.get('store').findAll('announcement');
    announcementsPromise.then(json => {
      controller.set('announcements', json)
    });
    var projectsPromise = this.get('store').findAll('project');
    projectsPromise.then(json => {
      controller.set('projects', json);
    });
  }
});
