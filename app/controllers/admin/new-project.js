import Ember from 'ember';

export default Ember.Controller.extend({
  store: Ember.inject.service(),

  actions: {
    submit() {
      var project = this.get('store').createRecord('project', this.get('model'));
      var promise = project.save()
      promise.then(json => {
        this.transitionToRoute('project', json.id);
      });
    }
  }
});
