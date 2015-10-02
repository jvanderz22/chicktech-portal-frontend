import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'chicktech-portal-frontend/tests/helpers/start-app';

module('Acceptance | volunteer', {
  beforeEach: function() {
    this.application = startApp();
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('visiting /volunteer redirects to dashboard', function(assert) {
  visit('/volunteer');

  andThen(function() {
    assert.equal(currentURL(), '/volunteer/dashboard');
  });
});
