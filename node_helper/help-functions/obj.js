/*Пример Создание нового объекта, наследующего прототип
*inherit() возвращает вновь созданный объект, наследующий свойства объекта-прототипа p. 
*Использует функцию Object.create() из ECMAScript 5, если она определена, 
*иначе используется более старый прием.*/
function gl_inherit(p) {
	if (p == null) throw TypeError(); // p не может быть значением null
	if (Object.create) // Если Object.create() определена...
	return Object.create(p); // использовать ее.
	var t = typeof p; // Иначе выяснить тип и проверить его
	if (t !== "object" && t !== "function") throw TypeError();
	function f() {}; // Определить фиктивный конструктор.
	f.prototype = p; // Записать в его свойство prototype ссылку на объект p.
	return new f(); // Использовать f() для создания наследника" объекта p.
}
global.gl_inherit = gl_inherit;

/*Копирует перечислимые свойства из объекта p в объект o и возвращает o.
* Если o и p имеют свойства с одинаковыми именами, значение свойства
* в объекте o затирается значением свойства из объекта p.
* Эта функция не учитывает наличие методов доступа и не копирует атрибуты.*/
function gl_extend(o, p) {
	for(prop in p) { // Для всех свойств в p.
	o[prop] = p[prop]; // Добавить свойство в o.
	}
	return o;
}
global.gl_extend = gl_extend;

/*Копирует перечислимые свойства из объекта p в объект o и возвращает o.
* Если o и p имеют свойства с одинаковыми именами, значение свойства
* в объекте o остается неизменным.
* Эта функция не учитывает наличие методов доступа и не копирует атрибуты.*/
function gl_merge(o, p) {
	for(prop in p) { // Для всех свойств в p.
		if (o.hasOwnProperty[prop]) continue; // Кроме имеющихся в o.
		o[prop] = p[prop]; // Добавить свойство в o.
	}
	return o;
}
global.gl_merge = gl_merge;

/*Удаляет из объекта o свойства, отсутствующие в объекте p. Возвращает o.*/
function gl_restrict(o, p) {
	for(prop in o) { // Для всех свойств в o
		if (!(prop in p)) delete o[prop]; // Удалить, если отсутствует в p
	}
	return o;
}
global.gl_restrict = gl_restrict;

/*Удаляет из объекта o свойства, присутствующие в объекте p. Возвращает o.*/
function gl_subtract(o, p) {
	for(prop in p) { // Для всех свойств в p
		delete o[prop]; // Удалить из o (удаление несуществующих свойств можно выполнять без опаски)
	}
	return o;
}
global.gl_subtract = gl_subtract;

/*Возвращает новый объект, содержащий свойства, присутствующие хотя бы в одном
* из объектов, o или p. Если оба объекта, o и p, имеют свойства с одним
* и тем же именем, используется значение свойства из объекта p.*/
function gl_union(o,p) { return gl_extend(gl_extend({},o), p); }
global.gl_union = gl_union;

/*Возвращает новый объект, содержащий свойства, присутствующие сразу в обоих
* объектах, o или p. Результат чем-то напоминает пересечение o и p,
* но значения свойств объекта p отбрасываются*/
function gl_intersection(o,p) { return gl_restrict(gl_extend({}, o), p); }
global.gl_intersection = gl_intersection;

/* Возвращает массив имен собственных перечислимых свойств объекта o.*/
function gl_keys(o) {
	if (typeof o !== "object") throw TypeError(); // Арг. должен быть объектом
	var result = []; // Возвращаемый массив
	for(var prop in o) { // Для всех перечислимых свойств
		if (o.hasOwnProperty(prop)) // Если это собственное свойство,
		result.push(prop); // добавить его в массив array.
	}
	return result; // Вернуть массив.
}
global.gl_keys = gl_keys;

function gl_objToString(obj, ndeep) {
  if(obj == null){ return String(obj); }
  switch(typeof obj){
    case "string": return '"'+obj+'"';
    case "function": return obj.name || obj.toString();
    case "object":
      var indent = Array(ndeep||1).join('\t'), isArray = Array.isArray(obj);
      return '{['[+isArray] + Object.keys(obj).map(function(key){
           return '\n\t' + indent + key + ': ' + gl_objToString(obj[key], (ndeep||1)+1);
         }).join(',') + '\n' + indent + '}]'[+isArray];
    default: return obj.toString();
  }
}
global.gl_objToString = gl_objToString;


process.stdout.write('КОНТЕНТ ИЗ help-functions/obj |');