import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'chicktech-portal-frontend/tests/helpers/start-app';

module('Acceptance | application', {
  beforeEach: function() {
    this.application = startApp();
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('visiting / redirects to dashboard', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/dashboard');
  });
});
