# Ember-cli-datatables-bs

WARNING! This project is no longer maintained as I'm no longer using Ember. This was tested and works and was the first "complete' datatables widget available for Ember. Please fork and continue work as you see fit.

## Requirements

Twitter bootstrap. I would recommend ember-bootstrap. Install with:

```
ember install ember-bootstrap
```

## Installation

```
ember install https://github.com/catmeme/ember-cli-datatables-bs
```

## Usage

Place the component in your template and link up options with your data model. Optionally, give your table an id.

index.hbs
```
{{#datatables-bs options=model id="my-cool-table"}}
<tr>
  <th>Column 1 Header</th>
  <th>Column 2 Header</th>
  <th>Column 3 Header</th>
</tr>
{{/datatables-bs}}
```

Your route defines your table options, anything you find in the [datatables reference](http://datatables.net/reference/option/) can be used here. This is also where you load your data into the table.

routes/index.js
```js
import Ember from 'ember';

var options = {
    "language": {
      "search": "My Search"
    },
    "data": [
      ["row 1 data 1", "row 1 data 2", "row 1 data 3"],
      ["row 1 data 2", "row 2 data 2", "row 2 data 3"],
      ["row 1 data 3", "row 3 data 2", "row 3 data 3"],
      ["row 1 data 4", "row 4 data 2", "row 4 data 3"],
      ["row 1 data 5", "row 5 data 2", "row 5 data 3"]
    ],
    "initComplete": function( settings, json ) {
        alert("complete")
    }
};

export default Ember.Route.extend({
  model() {
    return options;
  }
});
```

### Ember addon generated documentation

This README outlines the details of collaborating on this Ember addon.

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
