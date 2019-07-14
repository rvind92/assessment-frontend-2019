'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reducer = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _actions = require('../actions');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return Array.from(arr);
  }
}

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _ref = arguments[1];
  var type = _ref.type,
      payload = _ref.payload;
  if (!payload || payload instanceof Error) return state;

  switch (type) {
    case _actions.GET_INCIDENTS:
      {
        var payloadIncidents = payload.incidents;
        var currentIncidents = state.incidents;
        var incidents = [].concat(_toConsumableArray(currentIncidents), _toConsumableArray(payloadIncidents));

        var newState = _extends({}, state, {
          incidents: incidents
        });

        return newState;
      }

    case _actions.CREATE_INCIDENT:
      {
        var createIncident = payload.createIncident;
        var _currentIncidents = state.incidents;

        var _incidents = [].concat(_toConsumableArray(_currentIncidents), [createIncident]);

        var _newState = _extends({}, state, {
          incidents: _incidents
        });

        return _newState;
      }

    case _actions.ACKNOWLEDGE_INCIDENT:
      {
        var acknowledgeIncident = payload.acknowledgeIncident;
        var _currentIncidents2 = state.incidents;

        var _newState2 = _lodash2.default.cloneDeep(state);

        var indexToUpdate = _currentIncidents2.findIndex(function (incident) {
          return acknowledgeIncident._id === incident._id;
        });

        _newState2.incidents[indexToUpdate] = acknowledgeIncident;
        return _newState2;
      }

    case _actions.ASSIGN_INCIDENT:
      {
        var assignIncident = payload.assignIncident;
        var _currentIncidents3 = state.incidents;

        var _newState3 = _lodash2.default.cloneDeep(state);

        var _indexToUpdate = _currentIncidents3.findIndex(function (incident) {
          return assignIncident._id === incident._id;
        });

        _newState3.incidents[_indexToUpdate] = assignIncident;
        return _newState3;
      }

    case _actions.RESOLVE_INCIDENT:
      {
        var resolveIncident = payload.resolveIncident;
        var _currentIncidents4 = state.incidents;

        var _newState4 = _lodash2.default.cloneDeep(state);

        var _indexToUpdate2 = _currentIncidents4.findIndex(function (incident) {
          return resolveIncident._id === incident._id;
        });

        _newState4.incidents[_indexToUpdate2] = resolveIncident;
        return _newState4;
      }

    case _actions.GET_USERS:
      {
        var payloadUsers = payload.users;
        var stateUsers = state.users;
        var users = [].concat(_toConsumableArray(stateUsers), _toConsumableArray(payloadUsers));

        var _newState5 = _extends({}, state, {
          users: users
        });

        return _newState5;
      }

    case _actions.DELETE_INCIDENT:
      {
        var _id = payload.deleteIncident._id;

        var _newState6 = _lodash2.default.cloneDeep(state);

        _newState6.incidents = _newState6.incidents.filter(function (incident) {
          return incident._id !== _id;
        });
        return _newState6;
      }

    default:
      return state;
  }
};

exports.reducer = reducer;