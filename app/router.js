import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('volunteer', function() {
    this.route('dashboard');
    this.route('events', function() {
      this.route('event', { path: ':event_id' });
    });
  });
});

export default Router;
