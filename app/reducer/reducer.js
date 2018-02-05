var redux = require('redux');
var mangReducer = require('./mang');
var isAddingReducer = require ('./isAdding');

var reducer = redux.combineReducers({
  mang: mangReducer,
  isAdding: isAddingReducer
});

module.exports = reducer;
