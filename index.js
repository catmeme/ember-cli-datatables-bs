/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-datatables-bs',

  included: function(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/datatables.net/js/jquery.dataTables.min.js');
    app.import(app.bowerDirectory + '/datatables.net-bs/js/dataTables.bootstrap.min.js');
    app.import(app.bowerDirectory + '/datatables.net-bs/css/dataTables.bootstrap.min.css');
  }
};
