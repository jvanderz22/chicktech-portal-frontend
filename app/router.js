import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('dashboard');
  this.route('event', { path: 'events/:event_id' });
  this.route('projects');
  this.route('project', { path: 'projects/:project_id' });
});

export default Router;
