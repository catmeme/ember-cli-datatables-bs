/*jshint node:true*/
module.exports = {
  description: '',

  // locals: function(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }

  normalizeEntityName: function(entityName) {
     // Normalize and validate entity name here.
     return entityName;
  },

  afterInstall: function() {
    var self = this;

    return self.addBowerPackageToProject('datatables.net').then(function() {
      return self.addBowerPackageToProject('datatables.net-bs');
    });
  }
};
