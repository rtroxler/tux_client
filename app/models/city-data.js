import DS from 'ember-data';

export default DS.Model.extend({
  city: DS.attr('string'),
  state: DS.attr('string'),
  occurences: DS.attr('number')
});
