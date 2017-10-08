
let tr = 'try {' 
	+ '\n\tlet x = "3";'
    + '\n\tif(x == "") throw "is empty";'
    + '\n\tif(isNaN(x)) throw "is not a number";'
    + '\n\tx = Number(x);'
    + '\n\tif(x > 10) throw "is too high";'
    + '\n\tif(x < 5) throw "is too low";'
    + '\n\tconsole.log("ПРОВРКА - код до этого места не дошел");'
+ '\n}'
+ '\ncatch(err) {'
    + '\n\tconsole.log("Ошибка - ", err ); // СЮДА ПРОБРАСЫВАЕТСЯ ОШИБКА throw ИЗ try'
+ '\n}'
+ '\nfinally {'
    + '\n\tconsole.log("Эта часть кода реализуется всегда ");'
+ '\n}'
console.log(tr +'\n');

try { 
	let x = '3';
    if(x == "") throw "is empty";
    if(isNaN(x)) throw "is not a number";
    x = Number(x);
    if(x > 10) throw "is too high";
    if(x < 5) throw "is too low";
    console.log('ПРОВРКА - код до этого места не дошел');
}
catch(err) {
    console.log('Результат : Ошибка - ', err ); // СЮДА ПРОБРАСЫВАЕТСЯ  ОШИБКА throw ИЗ try
}
finally {
    console.log('Результат :  Эта часть кода реализуется всегда ');
}

var text ='';
switch (new Date().getDay()) {
    case 4:
    case 5:
        text = "4 или 5";
        break; 
    case 0:
    case 6:
        text = "0 или 6";
        break;
    default: 
        text = "default";
}

var sw = 'switch (new Date().getDay()) {'
    + '\n\0case 4:'
    + '\n\0case 5:'
        + '\n\	text = "4 или 5";'
        + '\n\tbreak; '
    + '\n\0case 0:'
    + '\n\0case 6:'
        + '\n\ttext = "0 или 6";'
        + '\n\tbreak;'
    + '\n\0default: '
        + '\n\ttext = "default";'
+ '\n}'
console.log('\n' + sw +'\n');
console.log('Результат - ', text );

let ifelse = "let time = 10;" 
+ "\nif (time < 10){"
	+ "\n\tconsole.log('IF')"
+ "\n} else if (time < 20) {"
	+ "\n\tconsole.log('ELSE IF')"
+ "\n} else {"
	+ "\n\tconsole.log('ELSE')"
+ "\n}"

console.log('\n' + ifelse);

let time = 10; if (time < 10) {console.log('IF')} else if (time < 20) {console.log('ELSE IF')} else {console.log('ELSE')}


console.log('\n\n=====================ОКОНЧАНИЕ БЛОКА КОНСТРУКЦИИ=====================') ;

