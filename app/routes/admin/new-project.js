import Ember from 'ember';
import DS from 'ember-data';

import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import AdminRouteMixin from '../../mixins/admin-route';

export default Ember.Route.extend(
  AuthenticatedRouteMixin,
  AdminRouteMixin, {
    model(){
      return {}
    }
  }
);
