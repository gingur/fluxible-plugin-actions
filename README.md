# fluxible-plugin-actions
Provide actions via context to your fluxible application

Install
-----
Add the package
  npm install --save fluxible-plugin-actions

Add to your app

```javascript
var actionPlugin = require('fluxible-plugin-actions');
var app = require('...');

app.plug(actionPlugin());
```

Add to your context

```javascript
var app = require('...');
var actions = require('...');
var context = app.createContext({
    req: req,
    actions: actions
  });
```

Enable in your component context

```javascript
var React = require('react');
var provideContext = require('fluxible/addons');
var Application = React.createClass({...});

Application = provideContext(Application, { 'getAction': React.PropTypes.func });
```

Context
-----
Add to your component contextTypes

```javascript
var React = require('react');
module.exports = React.createClass({
  contextTypes: {
    getAction: React.PropTypes.func.isRequired,
    executeAction: React.PropTypes.func.isRequired
  },
  _someEvent: function(e){
    var action = this.context.getAction('ACTION_KEY');
    var payload = { ... };
    this.context.executeAction(action, payload);
  },
  render: function(){
    ...
  }
});
```