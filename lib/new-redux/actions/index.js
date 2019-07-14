'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUsers = exports.deleteIncident = exports.resolveIncident = exports.assignIncident = exports.acknowledgeIncident = exports.createIncident = exports.getIncidents = exports.GET_USERS = exports.DELETE_INCIDENT = exports.RESOLVE_INCIDENT = exports.ASSIGN_INCIDENT = exports.ACKNOWLEDGE_INCIDENT = exports.CREATE_INCIDENT = exports.GET_INCIDENTS = undefined;

var _graphqlRequest = require('graphql-request');

function _asyncToGenerator(fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new Promise(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          return Promise.resolve(value).then(function (value) {
            step("next", value);
          }, function (err) {
            step("throw", err);
          });
        }
      }

      return step("next");
    });
  };
} // incident action creators


var GET_INCIDENTS = exports.GET_INCIDENTS = 'get_incidents';
var CREATE_INCIDENT = exports.CREATE_INCIDENT = 'create_incidents';
var ACKNOWLEDGE_INCIDENT = exports.ACKNOWLEDGE_INCIDENT = 'acknowledge_incident';
var ASSIGN_INCIDENT = exports.ASSIGN_INCIDENT = 'assign_incident';
var RESOLVE_INCIDENT = exports.RESOLVE_INCIDENT = 'resolve_incident';
var DELETE_INCIDENT = exports.DELETE_INCIDENT = 'delete_incident'; // user action creators

var GET_USERS = exports.GET_USERS = 'get_users'; // GraphQL URL

var BASE_URL = 'http://localhost:3000/graphql';

var getIncidents = exports.getIncidents = function getIncidents() {
  return function () {
    var _ref = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(dispatch) {
      var query, payload;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dispatch({
                type: GET_INCIDENTS
              });
              query = '{\n    incidents {\n      _id\n      title\n      description\n      assignee\n      status\n      createdAt\n      updatedAt\n    }\n  }';
              _context.prev = 2;
              _context.next = 5;
              return (0, _graphqlRequest.request)(BASE_URL, query);

            case 5:
              payload = _context.sent;
              dispatch({
                type: GET_INCIDENTS,
                payload: payload
              });
              _context.next = 12;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context['catch'](2);
              dispatch({
                type: GET_INCIDENTS,
                payload: _context.t0
              });

            case 12:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined, [[2, 9]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};

var createIncident = exports.createIncident = function createIncident(_ref2) {
  var title = _ref2.title,
      description = _ref2.description,
      assignee = _ref2.assignee;
  return function () {
    var _ref3 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2(dispatch) {
      var mutation, payload;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              dispatch({
                type: CREATE_INCIDENT
              });
              mutation = 'mutation {\n    createIncident(title: "' + title + '", description: "' + description + '", assignee: "' + assignee + '") {\n      _id\n      title\n      description\n      assignee\n      status\n      createdAt\n      updatedAt\n    }\n  }';
              _context2.prev = 2;
              _context2.next = 5;
              return (0, _graphqlRequest.request)(BASE_URL, mutation);

            case 5:
              payload = _context2.sent;
              dispatch({
                type: CREATE_INCIDENT,
                payload: payload
              });
              _context2.next = 12;
              break;

            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2['catch'](2);
              dispatch({
                type: CREATE_INCIDENT,
                payload: _context2.t0
              });

            case 12:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined, [[2, 9]]);
    }));

    return function (_x2) {
      return _ref3.apply(this, arguments);
    };
  }();
};

var acknowledgeIncident = exports.acknowledgeIncident = function acknowledgeIncident(_id) {
  return function () {
    var _ref4 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee3(dispatch) {
      var mutation, payload;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              dispatch({
                type: ACKNOWLEDGE_INCIDENT
              });
              mutation = 'mutation {\n    acknowledgeIncident(_id: "' + _id + '") {\n      _id\n      title\n      description\n      assignee\n      status\n      createdAt\n      updatedAt\n    }\n  }';
              _context3.prev = 2;
              _context3.next = 5;
              return (0, _graphqlRequest.request)(BASE_URL, mutation);

            case 5:
              payload = _context3.sent;
              dispatch({
                type: ACKNOWLEDGE_INCIDENT,
                payload: payload
              });
              _context3.next = 12;
              break;

            case 9:
              _context3.prev = 9;
              _context3.t0 = _context3['catch'](2);
              dispatch({
                type: ACKNOWLEDGE_INCIDENT,
                payload: _context3.t0
              });

            case 12:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, undefined, [[2, 9]]);
    }));

    return function (_x3) {
      return _ref4.apply(this, arguments);
    };
  }();
};

var assignIncident = exports.assignIncident = function assignIncident(_ref5) {
  var assignee = _ref5.assignee,
      _id = _ref5._id;
  return function () {
    var _ref6 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee4(dispatch) {
      var mutation, payload;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              dispatch({
                type: ASSIGN_INCIDENT
              });
              mutation = 'mutation {\n    assignIncident(assignee: "' + assignee + '", _id: "' + _id + '") {\n      _id\n      title\n      description\n      assignee\n      status\n      createdAt\n      updatedAt\n    }\n  }';
              _context4.prev = 2;
              _context4.next = 5;
              return (0, _graphqlRequest.request)(BASE_URL, mutation);

            case 5:
              payload = _context4.sent;
              dispatch({
                type: ASSIGN_INCIDENT,
                payload: payload
              });
              _context4.next = 12;
              break;

            case 9:
              _context4.prev = 9;
              _context4.t0 = _context4['catch'](2);
              dispatch({
                type: ASSIGN_INCIDENT,
                payload: _context4.t0
              });

            case 12:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, undefined, [[2, 9]]);
    }));

    return function (_x4) {
      return _ref6.apply(this, arguments);
    };
  }();
};

var resolveIncident = exports.resolveIncident = function resolveIncident(_id) {
  return function () {
    var _ref7 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee5(dispatch) {
      var mutation, payload;
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              dispatch({
                type: RESOLVE_INCIDENT
              });
              mutation = 'mutation {\n    resolveIncident(_id: "' + _id + '") {\n      _id\n      title\n      description\n      assignee\n      status\n      createdAt\n      updatedAt\n    }\n  }';
              _context5.prev = 2;
              _context5.next = 5;
              return (0, _graphqlRequest.request)(BASE_URL, mutation);

            case 5:
              payload = _context5.sent;
              dispatch({
                type: RESOLVE_INCIDENT,
                payload: payload
              });
              _context5.next = 12;
              break;

            case 9:
              _context5.prev = 9;
              _context5.t0 = _context5['catch'](2);
              dispatch({
                type: RESOLVE_INCIDENT,
                payload: _context5.t0
              });

            case 12:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, undefined, [[2, 9]]);
    }));

    return function (_x5) {
      return _ref7.apply(this, arguments);
    };
  }();
};

var deleteIncident = exports.deleteIncident = function deleteIncident(_id) {
  return function () {
    var _ref8 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee6(dispatch) {
      var mutation, payload;
      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              dispatch({
                type: DELETE_INCIDENT
              });
              mutation = 'mutation {\n    deleteIncident(_id: "' + _id + '") {\n      _id\n    }\n  }';
              _context6.prev = 2;
              _context6.next = 5;
              return (0, _graphqlRequest.request)(BASE_URL, mutation);

            case 5:
              payload = _context6.sent;
              dispatch({
                type: DELETE_INCIDENT,
                payload: payload
              });
              _context6.next = 12;
              break;

            case 9:
              _context6.prev = 9;
              _context6.t0 = _context6['catch'](2);
              dispatch({
                type: DELETE_INCIDENT,
                payload: _context6.t0
              });

            case 12:
            case 'end':
              return _context6.stop();
          }
        }
      }, _callee6, undefined, [[2, 9]]);
    }));

    return function (_x6) {
      return _ref8.apply(this, arguments);
    };
  }();
};

var getUsers = exports.getUsers = function getUsers() {
  return function () {
    var _ref9 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee7(dispatch) {
      var query, payload;
      return regeneratorRuntime.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              dispatch({
                type: GET_USERS
              });
              query = '{\n    users {\n      _id\n      name\n      email\n      role\n    }\n  }';
              _context7.prev = 2;
              _context7.next = 5;
              return (0, _graphqlRequest.request)(BASE_URL, query);

            case 5:
              payload = _context7.sent;
              dispatch({
                type: GET_USERS,
                payload: payload
              });
              _context7.next = 12;
              break;

            case 9:
              _context7.prev = 9;
              _context7.t0 = _context7['catch'](2);
              dispatch({
                type: GET_USERS,
                payload: _context7.t0
              });

            case 12:
            case 'end':
              return _context7.stop();
          }
        }
      }, _callee7, undefined, [[2, 9]]);
    }));

    return function (_x7) {
      return _ref9.apply(this, arguments);
    };
  }();
};