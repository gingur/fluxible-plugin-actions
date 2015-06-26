'use strict';

var assign = require('lodash.assign');

module.exports = function fluxiblePluginActions(settings) {
  settings = settings || {};
  return {
    name: 'fluxible-plugin-actions',
    plugContext: function (options) {
      options = options || {};
      var _actions = assign({}, settings.actions || {}, options.actions || {});
      return {
        plugComponentContext: function (componentContext) {
          componentContext.getAction = componentContext.getAction || function (action) {
              return _actions[action];
            }
        },
        dehydrate: function () {
          return {
            actions: _actions
          };
        },
        rehydrate: function (state) {
          state = state || {};
          _actions = state.actions;
        }
      }
    }
  }
};