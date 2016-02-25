import DS from 'ember-data';
/* global Ember */

export default DS.Model.extend({
  january: DS.attr('integer'),
  february: DS.attr('integer'),
  march: DS.attr('integer'),
  april: DS.attr('integer'),
  may: DS.attr('integer'),
  june: DS.attr('integer'),
  july: DS.attr('integer'),
  august: DS.attr('integer'),
  september: DS.attr('integer'),
  october: DS.attr('integer'),
  november: DS.attr('integer'),
  december: DS.attr('integer'),

  dataArray: Ember.computed('january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december', function() {
    return [
      this.get('january'),
      this.get('february'),
      this.get('march'),
      this.get('april'),
      this.get('may'),
      this.get('june'),
      this.get('july'),
      this.get('august'),
      this.get('september'),
      this.get('october'),
      this.get('november'),
      this.get('december')
    ];
  })
});
