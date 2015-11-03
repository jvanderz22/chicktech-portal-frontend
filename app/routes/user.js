import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  store: Ember.inject.service(),

  model(context) {
    return this.get('store').find('user', context.user_id);
  }
});
