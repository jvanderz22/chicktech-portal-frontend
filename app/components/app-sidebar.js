import Ember from 'ember';

export default Ember.Component.extend({
  user: Ember.inject.service(),

  tagName: 'ul',
  classNames: 'sidebar-nav'

});
