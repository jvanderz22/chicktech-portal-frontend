import DS from 'ember-data';

export default DS.Model.extend({
  description:          DS.attr(),
  endDate:              DS.attr(),
  projectCoordinator:   DS.attr(),
  startDate:            DS.attr(),
  title:                DS.attr(),
  volunteersNeeded:     DS.attr(),
  volunteersRegistered: DS.attr(),

  volunteers:           DS.hasMany('user'),

  isComplete: true,
  isOngoing: true,
  isFuture: false
});
