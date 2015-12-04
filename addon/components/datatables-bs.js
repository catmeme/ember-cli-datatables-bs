import Ember from 'ember';
import layout from '../templates/components/datatables-bs';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'table',
  classNames: ['table', 'table-striped', 'table-bordered'],
  options: false,

  initialize: Ember.on('didInsertElement', function() {

    let options = this.get('options');
    let dataTable = this.$().DataTable(options);

    this.set('dataTable', dataTable);
  })
});
