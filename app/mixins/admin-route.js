import Ember from 'ember';

export default Ember.Mixin.create({
  beforeModel() {
    this._super(...arguments)
    if (!this.get('user').get('content.isAdmin')) {
      this.replaceWith('dashboard');
    }
  }
});
