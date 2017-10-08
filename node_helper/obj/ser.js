// import * as gl from '../helpfunctions/functions';
require('../data/global'); 
require('../help-functions/functions');

console.log(''
+ '\nАтрибут writable определяет доступность значения свойства для записи.'
+ '\nАтрибут enumerable определяет доступность имени свойства для перечисления в цикле for/in.'
+ '\nАтрибут configurable определяет возможность настройки, т. е. удаления свойства и изменения его атрибутов.'
+ '\nФлаг extensible (в ECMAScript 5) указывает на возможность добавления новых свойств в объект.'
)

let str5 = `
function User(name){
    this.name = name;
}

User.prototype.hello = function(){
    return "Hello, " + this.name;
}
`
console.log(str5);

function User(name){
    this.name = name;
}

User.prototype.hello = function(){
    return "Hello, " + this.name;
}
let vasya = new User("Вася");
console.log('let vasya = new User("Вася"); vasya.hello() = ', vasya.hello());
let ptr = new User("ПиТ");
console.log('llet ptr = new User("ПиТ"); ptr.hello() = ', ptr.hello());
console.log('User == vasya ', User == vasya, 'ptr = vasya ',  ptr == vasya); 

let simple = {1:"раз"};
let book = {
  "main title": "JavaScript", // КАВЫЧКИИмена свойств с пробелами  и дефисами
  'subtitle': "The Definitive Guide",
  "for": "all audiences", // КАВЫЧКИforзарезервированное слово!!,
  author: {
  firstname: "David",
  surname: "Flanagan"
  }
};

let newBook = new Object(book);
gl_extend(glextendBook = {}, book);
gl_merge(glextendBook2 = {}, book);

let createBook = Object.create(book);
let inheritBook = gl_inherit(book);

let unionObj = gl_union(simple, book);

let onlyIn = gl_intersection(simple, unionObj);

let str = `\nlet simple = {1:"раз"};
let book = {
\0\0\0\0"main title": "JavaScript", // КАВЫЧКИИмена свойств с пробелами  и дефисами
\0\0\0\0'subtitle': "The Definitive Guide", 
\0\0\0\0"for": "all audiences", // КАВЫЧКИforзарезервированное слово!!,
\0\0\0\0author: { 
\0\0\0\0firstname: "David",
\0\0\0\0surname: "Flanagan"
\0\0\0\0} 
};
let newBook = new Object(book);

gl_extend(glextendBook = {}, book);
!!! Копировать перечислимые свойства из book в glextendBook (с затиранием). Возвращает glextendBook!!!
gl_merge(glextendBook2 = {}, book);
!!! Копировать перечислимые свойства из book в glextendBook2 (БЕЗ затирания). Возвращает glextendBook2!!!

let createBook = Object.create(book); // На выходе {} с прототипом!!!

let inheritBook = gl_inherit(book); // На выходе {} с прототипом!!!
!!! gl_inherit - Защита объекта book от непреднамеренного изменения !!!

let unionObj = gl_union(simple, book);
!!! gl_union - Возвращает новый объект, содержащий свойства, присутствующие хотя бы в одном из объектов

let onlyIn = gl_intersection(simple, unionObj);
!!! gl_intersection - Возвращает новый объект, содержащий свойства, присутствующие сразу в обоих объектах
`
console.log('\nСОЗДАНИЕ ОБЪЕКТОВ : ', str);

console.log('newBook = \n', newBook);
console.log('glextendBook = \n', glextendBook);

console.log('\ncreateBook = ', createBook);
console.log('createBook.author = ', createBook.author);
console.log('inheritBook = ', inheritBook);
console.log('inheritBook["main title"] = ', inheritBook["main title"]);
console.log('\nunionObj = \n', unionObj);
console.log('\nlet onlyIn  = gl_intersection(simple, unionObj); = ', onlyIn);

let { author: {firstname}, "for": forr } = book;
console.log('\nДЕСТРУКТУРИЗАЦИЯ : let { author: {firstname}, for: forr } = book; = ', firstname + " | " + forr);

console.log('\nbook === newBook', book === newBook, '!!!', '| book === createBook', book === createBook, '| book === inheritBook', book === inheritBook);
console.log('inheritBook === createBook', inheritBook === createBook);

var o = {} // o наследует методы объекта Object.prototype
o.x = 1; // и обладает собственным свойством x.
var p = gl_inherit(o); // p наследует свойства объектов o и Object.prototype
p.y = 2; // и обладает собственным свойством y.
var q = gl_inherit(p); // q наследует свойства объектов p, o и Object.prototype
q.z = 3; // и обладает собственным свойством z.
var s = q.toString(); // toString наследуется от Object.prototype
q.x + q.y // => 3: x и y наследуются от o и p
q.x = 2;

let inh = `
var o = {} // o наследует методы объекта Object.prototype
o.x = 1; // и обладает собственным свойством x.
var p = gl_inherit(o); // p наследует свойства объектов o и Object.prototype
p.y = 2; // и обладает собственным свойством y.
var q = gl_inherit(p); // q наследует свойства объектов p, o и Object.prototype
q.z = 3; // и обладает собственным свойством z.
var s = q.toString(); // toString наследуется от Object.prototype
q.x + q.y // => 3: x и y наследуются от o и p
q.x = 2 // перезаписывает своиство х у объекта q;
`
console.log('\nНАСЛЕДОВАНИЕ ОБЪЕКТОВ : ', inh);
console.log('q.x + q.y = ', q.x + q.y)
console.log('q.x + o.x = ', q.x + o.x )

delete glextendBook.author;
console.log('\ndelete glextendBook.author;');

gl_restrict(glextendBook2, glextendBook);
console.log('\ngl_restrict(glextendBook2, glextendBook); \nУдаляет из glextendBook2 свойства, отсутствующие в glextendBook(author). Возвращает glextendBook2. = \n', glextendBook2)

gl_subtract(glextendBook2, glextendBook);
console.log('\ngl_subtract(glextendBook2, glextendBook); \nУдаляет из glextendBook2 свойства, присутствующие в glextendBook. Возвращает glextendBook2. = \n', glextendBook2)

delete createBook.author; // Теперь объект book не имеет свойства author.
delete createBook["main title"]; // Теперь он не имеет свойства "main title".

let del = `
delete createBook.author; // Теперь объект book не имеет свойства author.
delete createBook["main title"]; // Теперь он не имеет свойства "main title".
`
console.log('\nУДАЛЕНИЕ СВОЙСТВ : ', del);

let sub = book && book.subtitle && book.subtitle.length;
let f = book && book.for && book.for.length;
let er = `
let sub = book && book.subtitle && book.subtitle.length;
let f = book && book.for && book.for.length
`
console.log('ОБРАЩЕНИЕ К ВОЗМОЖНО НЕ СУЩЕСТВУЮЩЕМУ СВОЙСТВУ subtitle (без вызова ошибки!) :', er, 'РЕЗУЛЬТАТ : console.log(sub, f);', sub, f);

var o = { x: 1 }
"x" in o; // true: o имеет собственное свойство "x"
"y" in o; // false: o не имеет свойства "y"
"toString" in o; // true: o наследует свойство toString

let inn =`
var o = { x: 1 }
"x" in o; // true: o имеет собственное свойство "x"
"y" in o; // false: o не имеет свойства "y"
"toString" in o; // true: o наследует свойство toString
`
console.log('\n1. ПРОВЕРКА СУЩЕСТВОВАНИЯ СВОЙСТВ : IN : ', inn, '"x" in o = ', "x" in o);

o.hasOwnProperty("x"); // true: o имеет собственное свойство x
o.hasOwnProperty("y"); // false: не имеет свойства y
o.hasOwnProperty("toString"); // false: toString - наследуемое свойство

let hop =`
o.hasOwnProperty("x"); // true: o имеет собственное свойство x
o.hasOwnProperty("y"); // false: не имеет свойства y
o.hasOwnProperty("toString"); // false: toString - наследуемое свойство
`
console.log('\n2. ПРОВЕРКА СУЩЕСТВОВАНИЯ СВОИХ СВОЙСТВ : hasOwnProperty() : ', hop, 'o.hasOwnProperty("y") = ', o.hasOwnProperty("y"));

let cyc = `\nЦИКЛ FORIN : for(p in book) - process.stdout.write(p + ' | ');  = `
process.stdout.write(cyc);
for(p in book)  process.stdout.write(p + ' | '); 

let gk = gl_keys(book);
console.log('\n\nlet gk = gl_keys(book); = ', gk);

let choos = `
\ВЫБОРКА ТОЛЬКО СВОИХ СВОЙСТВ, КРОМЕ ФУНКЦИЙ : \nfor(p in o) {
	if (!o.hasOwnProperty(p)) continue; // Пропустить унаследованные свойства
	if (typeof o[p] === "function") continue; // Пропустить методы
	process.stdout.write(p + ' | '); 
}
`
process.stdout.write(choos);
for(p in book) {
	if (!book.hasOwnProperty(p)) continue; // Пропустить унаследованные свойства
	if (typeof book[p] === "function") continue; // Пропустить методы
	process.stdout.write(p + ' | '); 
}

console.log('\n\n!!! Object.getOwnPropertyDescriptor - Атрибуты СОБСТВЕННОГО свойства subtitle объекта book : \nObject.getOwnPropertyDescriptor(book, "subtitle") = \n', Object.getOwnPropertyDescriptor(book, "subtitle"));

Object.defineProperty(book, "subtitle", { writable: false });
console.log('\n!!! Object.defineProperty - Сделать свойство subtitle доступным только для чтения : \nObject.defineProperty(book, "subtitle", { writable: false });');


console.log('\n!!! isPrototypeOf - является ли book прототипом inheritBook : book.isPrototypeOf(inheritBook) = ', book.isPrototypeOf(inheritBook));
console.log('!!! isPrototypeOf - является ли book прототипом newtBook : book.isPrototypeOf(newBook) = ', book.isPrototypeOf(newBook));

console.log('\n!!! Object.isExtensible() - допускается ли расширять объект : Object.isExtensible(book) = ',   Object.isExtensible(book));
console.log('!!! Object.preventExtensions() - Сделать объект не расширяемым : Object.preventExtensions(book) = \n', Object.preventExtensions(book));
console.log('!!! Object.isExtensible() - допускается ли расширять объект : Object.isExtensible(book) = ',   Object.isExtensible(book));
console.log('!!! Object.seal() -  делает объект нерасширяемым и все свойства этого объекта недоступными для настройки : \nObject.seal(book) = \n', Object.seal(book));
console.log('!!! Object.isSealed() -  вызывался ли метод Object.seal() : Object.isSealed(book) = ', Object.isSealed(book));
console.log('!!!  Object.freeze()  : \n1. делает объект нерасширяемым и свойства недоступными для настройки \n2.все собственные свойства с данными доступными только для чтения \n Object.freeze(book) = \n',  Object.freeze(book));
console.log('!!! Object.isFrozen() -  вызывался ли метод  Object.freeze() : Object.isFrozen(book) = ', Object.isFrozen(book));

let js = JSON.stringify(book);
console.log('\n1. СЕРИАЛИЗАЦИЯ ОБЪЕКТОВ (из объекта в строку) : let sj = JSON.stringify(book); = \n', js);

let pp = JSON.parse(js);
console.log('2. СЕРИАЛИЗАЦИЯ ОБЪЕКТОВ (из строки в объект) : let p = JSON.parse(sj); = \n', pp);


console.log('\n\n=====================ОКОНЧАНИЕ БЛОКА OBJECT=====================') ;


