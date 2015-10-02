import Ember from 'ember';

export default Ember.Route.extend({
  setupController(controller, model){
    this._super(controller, model);
    var eventsPromise = this.get('store').findAll('event');
    eventsPromise.then(json => {
      controller.set('events', json);
    });
  }
});
