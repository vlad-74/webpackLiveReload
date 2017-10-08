// import * as gl from '../help-functions/functions';
require('../help-functions/functions');

console.log('\nСтроковое преобразование: String(true) === "true" - ', String(true) === "true");
console.log('Числовое преобразование: Number(true) === 1 - ', Number(true) === 1);
console.log('Логическое преобразование: Boolean(0) === false - ', Boolean(0) === false);

console.log('typeof undefined - ', typeof undefined)// "undefined"
console.log('typeof 0  - ', typeof 0 )// "number"
console.log('typeof true - ', typeof true) // "boolean"
console.log('typeof "foo" - ', typeof "foo") // "string"
console.log('typeof {} - ', typeof {}) // "object"
console.log('typeof [] - ', typeof []) // "object"
console.log('typeof null - ', typeof null )// "object"(null == "object"–это официально признанная ошибка)
console.log('typeof function(){} - ', typeof function(){}) // "function"

console.log('\ngl_classof(null) = ', gl_classof(null) ) // => "Null"
console.log('gl_classof(1) = ', gl_classof(1) )// => "Number"
console.log('gl_classof("str") = ', gl_classof("str")) // => "String"
console.log('gl_classof(false) = ', gl_classof(false)) // => "Boolean"
console.log('gl_classof({}) = ', gl_classof({})) // => "Object"
console.log('gl_classof([]) = ', gl_classof([]) )// => "Array"
console.log('gl_classof(/./) = ', gl_classof(/./)) // => "Regexp"
console.log('gl_classof(new Date()) = ', gl_classof(new Date())) // => "Date"
// console.log('gl_classof(window) = ', gl_classof(window)) // => "Window" (объект клиентской среды выполнения)
// console.log('gl_classof(new f()) = ', gl_classof(new f())); // => "Object"


console.log('\nundefined == undefined это ', undefined === undefined) ;
console.log('true == true это ', true === true) ;
console.log('null == null это ', null === null) ;
console.log('"foo" == "foo" это ', "foo" === "foo") ;
console.log('"1" == 1 это ', "1" == 1) ;
console.log('"1" === 1 это !!!', "1" === 1) ;
console.log('{} == {} это ', {} == {}) ;
console.log('[] == [] это ', [] == []) ;
console.log('JSON.stringify([]) == JSON.stringify([]) это ', JSON.stringify([]) == JSON.stringify([]) );

console.log('\nNaN == NaN это ', NaN == NaN);
console.log('isNaN(NaN) это ', isNaN(NaN));

console.log('\nisEmpty(undefined) это ', gl_isEmpty(undefined)) ;
console.log('isEmpty(null) это ', gl_isEmpty(null)) ;
console.log('isEmpty(NaN) это ', gl_isEmpty(NaN))  ;
console.log('isEmpty(" ") это ', gl_isEmpty(" ") ) ;
console.log('isEmpty([]) это ', gl_isEmpty([]) ) ;
console.log('isEmpty({}) это ', gl_isEmpty({}) ) ;
console.log('isEmpty([1]) это ', gl_isEmpty([1]) ) ;
console.log('isEmpty({id:"333"}) это ', gl_isEmpty({id:"333"}) ) ;
console.log('isEmpty(" trtr ") это ', gl_isEmpty(" trtr ") ) ;
console.log('isEmpty(333) это ', gl_isEmpty(333) ) ;


console.log('\n\n=====================ОКОНЧАНИЕ БЛОКА TYPEOF=====================') ;

