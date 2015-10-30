import Ember from 'ember';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

export default Ember.Route.extend(UnauthenticatedRouteMixin, {
  setupController(controller, model){
    this._super(controller, model);
    controller.set('fields', {});
  }
});
