import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel(){
    var events = this.modelFor('volunteer.events');
    this.replaceWith('volunteer.events.event', events.get('firstObject'));
  }
});
