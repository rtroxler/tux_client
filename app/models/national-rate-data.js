import DS from 'ember-data';

export default DS.Model.extend({
  january: DS.attr('number'),
  february: DS.attr('number'),
  march: DS.attr('number'),
  april: DS.attr('number'),
  may: DS.attr('number'),
  june: DS.attr('number'),
  july: DS.attr('number'),
  august: DS.attr('number'),
  september: DS.attr('number'),
  october: DS.attr('number'),
  november: DS.attr('number'),
  december: DS.attr('number'),
  processingTime: DS.attr('number'),
  rentalsProcessedCount: DS.attr('number'),

  dataArray: Ember.computed('january', 'february', 'march', 'april', 'may',
                            'june', 'july', 'august', 'september', 'october',
                            'november', 'december', function() {
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
