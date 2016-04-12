"use strict";

const arrsToObj = require("../lib");

let names = [
      "location"
    , "age"
    , "name"
    ]
  , values = [
      "Earth"
    , 42
    , "Alice"
    ]
  ;

console.log(arrsToObj(names, values));
// => {
//    location: 'Earth'
//  , age: 42
//  , name: 'Alice'
// }
