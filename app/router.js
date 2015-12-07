import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('dashboard');
  this.route('events');
  this.route('event', { path: 'events/:event_id' });
  this.route('projects');
  this.route('project', { path: 'projects/:project_id' });
  this.route('user', { path: 'users/:user_id' });
  this.route('admin', function() {
    this.route('new-project');
    this.route('create-event');
  });
});

export default Router;
