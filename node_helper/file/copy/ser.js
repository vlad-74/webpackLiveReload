require('../help-functions/functions');

console.log(gl_hr);

let str = `
// Читать файл (путь указывается по другому)
let rf = gl_readFileSync('../file/addContent.json')
console.log('gl_readFileSync - Контент из файла :\\n', rf);

// gl_readFileAsync('../file/addContent.json')
// console.log('gl_readFileAsync - Контент из файла :');

var linenumber = 0;
gl_readFileLineByLine('../file/addContent.json', function(line) {
    console.log('gl_readFileLineByLine ' + ++linenumber + " -- " + line);
});

//Удаляем файл
gl_deleteFile('node_helper/file/new.json');

//Создание и запись в файл
gl_createOrClearAndWrite ('node_helper/file/new.json','1 Этого файла не было;\\n2 И этой записи тоже не было!');
//Перезапись в файле
gl_createOrClearAndWrite ('node_helper/file/assets.json', 'фигня номер 2');
//Добавить контент в конец файла
gl_appendToFile ('node_helper/file/addContent.json', '\\nСтрока номер 2');
//Копировать файл
gl_copyFile ('node_helper/file/addContent.json', 'node_helper/file/addContent2.json');

gl_deleteDirectoryPromise(__dirname + '/copy'); //удаляю папку copy

setTimeout(function(){
	gl_AsynchronousMkdir(__dirname + '/copy'); //Создаю папку

	//Все файлы в папке ...(!!!Здесь путь указывается по другому!!!)
	let tt = gl_choiceAllFilesFromFolder('../../node_helper/file/','path');
console.log('\\nВСЕ ФАЙЛЫ В ТЕКУЩЕЙ ПАПКЕ (смотри путь в командной сроке ПЛЮС путь в переменной) :\\n', tt);

	//Копировать все файлы из папки file в папку file/copy
	let filefrom = tt.map(item => item.replace(/\\|/, ''));
	filefrom = filefrom.map(item => item.replace(/\\.\\.\\/\\.\\.\\//, ''));

	console.log('\\n', filefrom);

	let fileTo = tt.map(item => item.replace(/\\|/, 'copy/'));
	fileTo = fileTo.map(item => item.replace(/\\.\\.\\/\\.\\.\\//, ''));

	console.log('\\n',fileTo);

	for(var i=0; i < tt.length; i++){
		gl_copyFile (filefrom[i], fileTo[i]);
	}
}, 1000);
`
console.log(str);

console.log(gl_rz );

// Читать файл (путь указывается по другому)
let rf = gl_readFileSync('../file/addContent.json')
console.log('gl_readFileSync - Контент из файла :\n', rf);

// gl_readFileAsync('../file/addContent.json')
// console.log('gl_readFileAsync - Контент из файла :');

var linenumber = 0;
gl_readFileLineByLine('../file/addContent.json', function(line) {
    console.log('gl_readFileLineByLine ' + ++linenumber + " -- " + line);
});

//Удаляем файл
gl_deleteFile('node_helper/file/new.json');


//Создание и запись в файл
gl_createOrClearAndWrite ('node_helper/file/new.json', '1 Этого файла не было;\n2 И этой записи тоже не было !!!');
//Перезапись в файле
gl_createOrClearAndWrite ('node_helper/file/assets.json', 'фигня номер 2');
//Добавить контент в конец файла
gl_appendToFile ('node_helper/file/addContent.json', '\nСтрока номер 2');
//Копировать файл
gl_copyFile ('node_helper/file/addContent.json', 'node_helper/file/addContent2.json');

gl_deleteDirectoryPromise(__dirname + '/copy');  //удаляю папку copy

setTimeout(function(){
	gl_AsynchronousMkdir(__dirname + '/copy');//Создаю папку

	//Все файлы в папке ...(!!!Здесь путь указывается по другому!!!)
	let tt = gl_choiceAllFilesFromFolder('../../node_helper/file/','path');
	console.log('\nВСЕ ФАЙЛЫ В ТЕКУЩЕЙ ПАПКЕ (смотри путь в командной сроке ПЛЮС путь в переменной) :\n', tt);

	//Копировать все файлы из папки file в папку file/copy
	let filefrom = tt.map(item => item.replace(/\|/, ''));
	filefrom = filefrom.map(item => item.replace(/\.\.\/\.\.\//, ''));

	console.log('\n', filefrom);

	let fileTo = tt.map(item => item.replace(/\|/, 'copy/'));
	fileTo = fileTo.map(item => item.replace(/\.\.\/\.\.\//, ''));

	console.log('\n',fileTo);

	for(var i=0; i < tt.length; i++){
		gl_copyFile (filefrom[i], fileTo[i]);
	}
}, 1000);