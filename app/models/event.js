import DS from 'ember-data';

export default DS.Model.extend({
  date:                 DS.attr(),
  description:          DS.attr(),
  title:                DS.attr(),
});
