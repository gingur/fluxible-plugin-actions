# fluxible-plugin-actions
Provide action creators via context to your [fluxible](https://github.com/yahoo/fluxible) application

##Install
Add the package

```bat
npm install --save fluxible-plugin-actions
```


Add to your [app](https://github.com/yahoo/fluxible/blob/master/docs/api/Fluxible.md)

```javascript
var actionPlugin = require('fluxible-plugin-actions');
var app = require('...');

app.plug(actionPlugin());
/* or */
app.plug(actionPlugin({
    actions: {
        'ACTION_NAME': function (context, payload, done) {
            ...
            context.dispatch('STORE_ACTION', payload);
            ...
            done(); // Not available for component actions
        }
    }
});
```


Add to your app [context](https://github.com/yahoo/fluxible/blob/master/docs/api/FluxibleContext.md)

```javascript
var app = require('...');
var actions = require('...');
var context = app.createContext({
    req: req,
    actions: actions
});
```


Enable in your component [context](https://github.com/yahoo/fluxible/blob/master/docs/api/addons/provideContext.md)

```javascript
var React = require('react');
var provideContext = require('fluxible/addons');
var Application = React.createClass({...});

Application = provideContext(Application, { 'getAction': React.PropTypes.func });
```


##Context
Add to your component [contextTypes](https://github.com/yahoo/fluxible/blob/master/docs/api/Components.md#component-context)

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
