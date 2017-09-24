// User делается глобальным через присвоение global.User
require('./global'); //импорт функционала из global.js - GBL
require('./array-functions'); //импорт ункций для массивов из array-functions.js

console.log('\nGLBL :\n', GLBL); //массив GBL

console.log('\n!!!Вначале отрабатывают контексты require(), И только затем выводятся переменные!!!');
//КОНЕКСТ ИЗ require() ОТРАБАТЫВАЕТ ТОЛЬКО 1 РАЗ - ДО ВЫПОЛНЕНИЯ ИМПОРТИРУЕМЫХ ФУНКЦИЙ!!!!!!

console.log('\nes6 map : GLBL.map(item => item.title); - ', GLBL.map(item => item.title));

console.log('\nСравнение - JSON.stringify(GLBL) == JSON.stringify(GLBL2) - ', JSON.stringify(GLBL) == JSON.stringify(GLBL2) );

let arrCopy = [...GLBL]; // копируем массив arr в массив arrAdd
console.log('\nКопируем массив GLBL в массив arrCopy - let arrCopy = [...GLBL]; - \n', arrCopy); 

GLBL.push({id: 4, title: "четвертый"},{id: 5, title: "пятый"}); 
console.log('\nДобавляем элементы в массив - GLBL.push({id: 4, title: "четвертый"},{id: 5, title: "пятый"}); - \n', GLBL);

GLBL.splice(3, 1); 
console.log('\nУдаляем 1 элемент из массива начиная со третьего индекса (0,1,2,3) - GLBL.splice(3, 1);  - \n', GLBL);

GLBL.splice(2, 1, {id: 0, title: "ноль"});
console.log('\nЗАМЕНА : \n1. удаляем 1 элемент со 2 индекса (0,1,2,3) \n2. вставляем элемент - GLBL.splice(2, 1, {id: 0, title: "ноль"});  - \n', GLBL);

for(var i=0; i < GLBL.length; i++){
	if(GLBL[i].title == "пятый"){GLBL.splice(i,1);}
}
console.log('\nУдаление циклом - for(var i=0; i < GLBL.length; i++){if(GLBL[i].title == "пятый"){GLBL.splice(i,1);}}\n',GLBL );

let filterGLBL = 1;

let result = GLBL.filter(item => item.id == filterGLBL || item.id == filterGLBL-1); //[ { id: 1, title: 'second' }, { id: 2, title: 'thed' } ]
console.log('\nFilter : GLBL.filter(item => item.id == filterGLBL || item.id == filterGLBL-1); - \n', result); //[ { id: 2, title: 'second' } ]

let filterResult = result;
console.log('\nПрисвоение : FilterResult = result - ', filterResult);

let exceptFor = GLBL.filter(item => { if (item.id != filterGLBL && item.id != filterGLBL-1) return item} );
console.log('\nExcept for: GLBL.filter(item => { if (item.id != filterGLBL && item.id != filterGLBL-1) return item}); - \n', exceptFor);//  [ { id: 3, title: 'first' } ]

console.log('\nРучной выбор : GLBL[filterGLBL - 1].title); - ', GLBL[filterGLBL - 1].title); //second

console.log('\nСортировка по возрастанию : GLBL.sort((a,b) => a.id - b.id); : \n', GLBL.sort((a,b) => a.id - b.id));
console.log('\nСртировка по убыванию : GLBL.sort((a,b) => b.id - a.id); : \n', GLBL.sort((a,b) => b.id - a.id));

console.log('\nМульти сортировка : glblArr.sort(dynamicSortMultiple("c DESC","b Asc","a"))  :\n', glblArr.sort(dynamicSortMultiple("c DESC","b Asc","a")));

//===================================================================================//
console.log('\nglblNumbers - ', glblNumbers); //массив glblNumbers

console.log('\nЕсть 4 в массиве? - glblNumbers.includes(4) - ', glblNumbers.includes(4));

console.log('\nПервый индекс найденного элемента - glblNumbers.indexOf(3) - ', glblNumbers.indexOf(3));

console.log('\nПервый найденный элемен - glblNumbers.find(e => e > 5)', glblNumbers.find(e => e > 5));
console.log('\nИндекс первого найденного элемента - glblNumbers.findIndex(e => e > 5)', glblNumbers.findIndex(e => e > 5));

console.log('\nМассив в строку - glblNumbersy.join();', glblNumbers.join());

let oddNumbers = glblNumbers.filter(number => number % 2);
console.log('\nНечетные : glblNumbers.filter(number => number % 2); - ', oddNumbers);

let evenNumbers = glblNumbers.filter( number => !(number % 2));
console.log('\nЧетные : glblNumbers.filter( number => !(number % 2)); - ', evenNumbers);

let total = 0; for(var i in glblNumbers) { total += glblNumbers[i]};
console.log('\nСумма массива - for(var i in glblNumbers) { total += glblNumbers[i]}; - ', total);

