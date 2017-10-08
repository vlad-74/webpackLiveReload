let gl_RootPath = '../../';
global.gl_RootPath = gl_RootPath;
require('./array'); 
require('./obj');
require('./fs');
require('./watch'); 
require('./status'); 
require('./ajax'); 

global.gl_hr = '=======================================================================================';
global.gl_rz = '---------------------------------------РЕЗУЛЬТАТ---------------------------------------';

function gl_isEmpty(value){
	let typeofValue = typeof value;
	switch (typeofValue) {
	    case "string":
	    	return value.trim().length == 0;
	    	break; 
	    case "number":
	        return isNaN(value);
	        break; 
	    case "undefined":
	        return true;
	        break;
	    case "object":
	        return value == null || JSON.stringify(value).trim().length < 3;
	        break;	        
	    default: 
	        return false;
	}
}
global.gl_isEmpty = gl_isEmpty;

function gl_classof(o) {
 if (o === null) return "Null";
 if (o === undefined) return "Undefined";
 return Object.prototype.toString.call(o).slice(8,-1);
}
global.gl_classof = gl_classof;


function gl_max(/*...*/){
 var mx = Number.NEGATIVE_INFINITY;
 for(var i = 0; i < arguments.length; i++)
 if (arguments[i] > mx) mx = arguments[i];
 return mx;
}
// var largest = gl_max(1, 10, 100, 2, 3, 1000, 4, 5, 10000, 6); // => 10000
global.gl_max = gl_max;


function gl_min(/*...*/){
 var mn = Number.POSITIVE_INFINITY;
 for(var i = 0; i < arguments.length; i++)
 if (arguments[i] < mn) mn = arguments[i];
 return mn;
}
// var largest = gl_min(1, 10, 100, 2, 3, 1000, 4, 5, 10000, 6); // 
// !!!console.log(gl_min(...[1, 10, 100, 2, 3, 1000, 4, 5, -10000, 6], 15, 25, -10001));
global.gl_min = gl_min;


// Вызывает функцию f для каждого элемента массива и возвращает массив результатов.
// Использует метод Array.prototype.map, если он определен.
var gl_map = Array.prototype.map 
? function(a, f) { return a.map(f); } // Если метод map() доступен
: function(a,f) { // Иначе реализовать свою версию
	var results = [];
	for(var i = 0, len = a.length; i < len; i++) {
		if (i in a) results[i] = f.call(null, a[i], i, a);
	}
	return results;
};
global.gl_map = gl_map;


// Выполняет свертку массива в единственное значение, используя функцию f и необязательное начальное значение. 
//Использует метод Array.prototype.reduce, если он определен.
var gl_reduce = Array.prototype.reduce
? function(a, f, initial) { // Если метод reduce() доступен.
	if (arguments.length > 2)
	return a.reduce(f, initial); // Если указано начальное значение.
	else return a.reduce(f); // Иначе без начального значения.
	}
: function(a, f, initial) { // Этот алгоритм взят из спецификации ES5
	var i = 0, len = a.length, accumulator;
	// Использовать указанное начальное значение или первый элемент a
	if (arguments.length > 2) accumulator = initial;
	else { // Найти первый элемент массива с определенным значением
		if (len == 0) throw TypeError();
		while(i < len) {
			if (i in a) {
			accumulator = a[i++];
			break;
		}
		else i++;
		}
		if (i == len) throw TypeError();
	}
	// Теперь вызвать f для каждого оставшегося элемента массива
	while(i < len) {
		if (i in a)
			accumulator = f.call(undefined, accumulator, a[i], i, a);
		i++;
	}
	return accumulator;
};
global.gl_reduce = gl_reduce;

/* =======================================htmlspecialchars=======================================*/
function gl_escapeHtml(text) {
  return text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
}
global.gl_escapeHtml = gl_escapeHtml;

function gl_escapeHtml_decode(string, quote_style) {
  var optTemp = 0,
    i = 0,
    noquotes = false;
  if (typeof quote_style === 'undefined') {
    quote_style = 2;
  }
  string = string.toString()
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
  var OPTS = {
    'ENT_NOQUOTES': 0,
    'ENT_HTML_QUOTE_SINGLE': 1,
    'ENT_HTML_QUOTE_DOUBLE': 2,
    'ENT_COMPAT': 2,
    'ENT_QUOTES': 3,
    'ENT_IGNORE': 4
  };
  if (quote_style === 0) {
    noquotes = true;
  }
  if (typeof quote_style !== 'number') { // Allow for a single string or an array of string flags
    quote_style = [].concat(quote_style);
    for (i = 0; i < quote_style.length; i++) {
      // Resolve string input to bitwise e.g. 'PATHINFO_EXTENSION' becomes 4
      if (OPTS[quote_style[i]] === 0) {
        noquotes = true;
      } else if (OPTS[quote_style[i]]) {
        optTemp = optTemp | OPTS[quote_style[i]];
      }
    }
    quote_style = optTemp;
  }
  if (quote_style & OPTS.ENT_HTML_QUOTE_SINGLE) {
    string = string.replace(/&#0*39;/g, "'"); // PHP doesn't currently escape if more than one 0, but it should
    // string = string.replace(/&apos;|&#x0*27;/g, "'"); // This would also be useful here, but not a part of PHP
  }
  if (!noquotes) {
    string = string.replace(/&quot;/g, '"');
  }
  // Put this in last place to avoid escape being double-decoded
  string = string.replace(/&amp;/g, '&');

  return string;
}
global.gl_escapeHtml_decode = gl_escapeHtml_decode;
/* =======================================htmlspecialchars=======================================*/

function gl_capitalizeFirstLetter(string) {
    return string[0].toUpperCase() + string.slice(1);
}
global.gl_capitalizeFirstLetter = gl_capitalizeFirstLetter;

function gl_toLowerFirstLetter(string) {
    return string[0].toLowerCase() + string.slice(1);
}
global.gl_toLowerFirstLetter = gl_toLowerFirstLetter;


function gl_supports_localStorage() {
  try {
    return 'localStorage' in window && window['localStorage'] !== null;
} catch (e) {
    return false;
  }
}
global.gl_supports_localStorage = gl_supports_localStorage;

var gl_getBrowser = function() {
    var b = "unknown";
    try {
        var e;
        var f = e.width;
    } catch (e) {
        var err = e.toString();
        if(err.search("not an object") !== -1){
            return "safari";
        } else if(err.search("Cannot read") !== -1){
            return "chrome";
        } else if(err.search("e is undefined") !== -1){
            return "firefox";
        } else if(err.search("Unable to get property 'width' of undefined or null reference") !== -1){
            if(!(false || !!document.documentMode) && !!window.StyleMedia){
                return "edge";
            }
        } else if(err.search("cannot convert e into object") !== -1){
            return "opera";
        } else if(/*@cc_on!@*/false || !!document.documentMode){
            return "IE";
        } else {
            return undefined;
        }
    }
};
global.gl_getBrowser = gl_getBrowser;







process.stdout.write('КОНТЕНТ ИЗ help-functions\n');