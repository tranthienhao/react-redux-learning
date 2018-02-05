var React = require ('react'); // require thư viện React
var ReactDom = require ('react-dom'); // require thư viện ReactDom
var {Provider} = require('react-redux'); // es6 destructuring: tao 1 bien = ten thuoc tinh
var List = require('./comps/List.js');
var store = require('store');

ReactDom.render(
  <Provider store = {store}>
   <List/>
 </Provider>,
   document.getElementById('root')
);
