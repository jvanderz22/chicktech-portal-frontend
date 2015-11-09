import Ember from 'ember';
import AdminRouteMixin from '../../../mixins/admin-route';
import { module, test } from 'qunit';

module('Unit | Mixin | admin route');

// Replace this with your real tests.
test('it works', function(assert) {
  var AdminRouteObject = Ember.Object.extend(AdminRouteMixin);
  var subject = AdminRouteObject.create();
  assert.ok(subject);
});
