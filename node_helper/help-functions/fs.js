let fs = require('fs');
const path = require('path');

var gl_allFilesFromFolder = function(dir, filelist = []) {
        var path = path || require('path'),
        fs = fs || require('fs'),
        files = fs.readdirSync(dir),
        filelist = filelist || [];
        // path = gl_RootPath + path;

        files.forEach(function(file) {
            if (fs.statSync(path.join(dir, file)).isDirectory()) {
                filelist = gl_allFilesFromFolder(path.join(dir, file), filelist);
            }
            else {
                filelist.push(path.join(dir, file));
            }
        });
        return filelist;
    };
//ПРИМЕР ИСПОЛЬЗОВАНИЯ: let tt = gl_allFilesFromFolder(__dirname);
//let tt = gl_allFilesFromFolder('../../helper/');
//ИЛИ
// let tt = gl_allFilesFromFolder('D:/_DEVELOPER/Sites/_GIT/05-live-reload/helper/');
// console.log('\nВСЕ ФАЙЛЫ В ТЕКУЩЕЙ ПАПКЕ (смотри путь в командной сроке ПЛЮС путь в переменной) :\n', tt);
global.gl_allFilesFromFolder = gl_allFilesFromFolder;


function gl_choiceAllFilesFromFolder (dir, choice = 'default', filelist = []) {
    var path = path || require('path'),
    fs = fs || require('fs'),
    files = fs.readdirSync(dir),
    filelist = filelist || [],
    choice = choice || 'default';

    files.forEach(function(file) {
        if (fs.statSync(path.join(dir, file)).isDirectory()) {
            filelist = gl_choiceAllFilesFromFolder(path.join(dir, file), choice, filelist);
        }
        else {
            if(choice == 'default'){filelist.push(path.join(dir, file))};
            if(choice == 'path'){filelist.push(dir +'|' + file)};
            if(choice == 'folder'){filelist.push(path.basename(dir))};
            if(choice == 'file'){filelist.push(path.basename(file))};
            if(choice == 'ext'){filelist.push(path.extname(file))};

        }
    });
    return filelist;
};
//ПРИМЕР ИСПОЛЬЗОВАНИЯ: let tt = gl_choiceAllFilesFromFolder(__dirname);
//let tt = gl_choiceAllFilesFromFolder('../../helper/');
//ИЛИ
// let tt = gl_choiceAllFilesFromFolder('D:/_DEVELOPER/Sites/_GIT/05-live-reload/helper/');
// console.log('\nВСЕ ФАЙЛЫ В ТЕКУЩЕЙ ПАПКЕ (смотри путь в командной сроке ПЛЮС путь в переменной) :\n', tt);

global.gl_choiceAllFilesFromFolder = gl_choiceAllFilesFromFolder;

function gl_createOrClearAndWrite (path, content){
    path = gl_RootPath + path;
    fs.writeFile(path, content, function(err) {
        if(err) throw err;
    });
};
global.gl_createOrClearAndWrite = gl_createOrClearAndWrite;

function gl_appendToFile (path, content){
    path = gl_RootPath + path;
    fs.appendFile(path, content, function (err) {
      if (err) throw err; 
    });
};
global.gl_appendToFile = gl_appendToFile;

function gl_copyFile (from, to){
    from = gl_RootPath + from;
    to = gl_RootPath + to;
    fs.createReadStream(from).pipe(fs.createWriteStream(to));
}
global.gl_copyFile = gl_copyFile;

function gl_deleteFile (filePath){
    filePath = gl_RootPath + filePath;
    fs.unlinkSync(filePath);
}
global.gl_deleteFile = gl_deleteFile;


function gl_rimraf(dir_path) {
    // dir_path = gl_RootPath + dir_path;
    if (fs.existsSync(dir_path)) {
        fs.readdirSync(dir_path).forEach(function(entry) {
            var entry_path = path.join(dir_path, entry);
            if (fs.lstatSync(entry_path).isDirectory()) {
                rimraf(entry_path);
            } else {
                fs.unlinkSync(entry_path);
            }
        });
        fs.rmdirSync(dir_path);
    }
}
global.gl_rimraf = gl_rimraf;


function gl_SynchronousMkdir(args){
  try {
    fs.mkdirSync(arg);
  } 
  catch(err) {
    console.log(err);
  }
}
global.gl_SynchronousMkdir = gl_SynchronousMkdir;


function gl_AsynchronousMkdir(path){
  fs.mkdir(path, function(err) {if(err) console.log(err)});
}
global.gl_AsynchronousMkdir = gl_AsynchronousMkdir;


function gl_SynchronousRmdir(path){
  try {
    fs.rmdirSync(path);
  } 
  catch(err) {console.log(err);}
};
global.gl_SynchronousRmdir = gl_SynchronousRmdir;

function gl_AsynchronousRmdir(path ){
    fs.rmdir(path , function(err) {if(err) console.log(err)});
}
global.gl_AsynchronousRmdir = gl_AsynchronousRmdir;

function gl_deleteFilePromise(dir, file) {
    return new Promise(function (resolve, reject) {
        var filePath = path.join(dir, file);
        fs.lstat(filePath, function (err, stats) {
            if (err) {
                return reject(err);
            }
            if (stats.isDirectory()) {
                resolve(gl_deleteDirectoryPromise(filePath));
            } else {
                fs.unlink(filePath, function (err) {
                    if (err) {
                        return reject(err);
                    }
                    resolve();
                });
            }
        });
    });
};
global.gl_deleteFilePromise = gl_deleteFilePromise;

function gl_deleteDirectoryPromise(dir) {
    return new Promise(function (resolve, reject) {
        fs.access(dir, function (err) {
            if (err) {
                return reject(err);
            }
            fs.readdir(dir, function (err, files) {
                if (err) {
                    return reject(err);
                }
                Promise.all(files.map(function (file) {
                    return gl_deleteFilePromise(dir, file);
                })).then(function () {
                    fs.rmdir(dir, function (err) {
                        if (err) {
                            return reject(err);
                        }
                        resolve();
                    });
                }).catch(reject);
            });
        });
    });
};
global.gl_deleteDirectoryPromise = gl_deleteDirectoryPromise;

function gl_readFileSync(path){ 
    var contents = fs.readFileSync(path, 'utf8');
    return contents;
}
global.gl_readFileSync = gl_readFileSync;

function gl_readFileAsync(path){ 
    fs.readFile(path, function read(err, data) {
        var content = '';
        if (err) {throw err;} content = data.toString('utf8');
        console.log(content);
    });
}
global.gl_readFileAsync = gl_readFileAsync

function gl_readFileLineByLine(filename, processline) {
    var stream = fs.createReadStream(filename);
    var s = "";
    stream.on("data", function(data) {
        s += data.toString('utf8');
        var lines = s.split("\n");
        for (var i = 0; i < lines.length - 1; i++)
            processline(lines[i]);
        s = lines[lines.length - 1];
    });

    stream.on("end",function() {
        var lines = s.split("\n");
        for (var i = 0; i < lines.length; i++)
            processline(lines[i]);
    });
}
global.gl_readFileLineByLine = gl_readFileLineByLine

process.stdout.write('КОНТЕНТ ИЗ help-functions/fs |');
