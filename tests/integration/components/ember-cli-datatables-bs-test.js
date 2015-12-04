import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ember-cli-datatables-bs', 'Integration | Component | ember cli datatables bs', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{ember-cli-datatables-bs}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#ember-cli-datatables-bs}}
      template block text
    {{/ember-cli-datatables-bs}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
