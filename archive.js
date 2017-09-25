const rimraf = require('rimraf'); //УДАЛЯЕТ СТАРЫЕ JS ФАЙЛЫ ИЗ ПАПКИ

const copydir = require('copy-dir');
const compressor = require('node-minify');

let t = Date.parse(new Date()); //milliseconds

//ОЧИСТИТЬ ПАПКИ public_mini/menu
rimraf.sync('public_mini');

copydir('frontend', 'frontend_archive/'+ t +'/', function(err){
  if(err){
    console.log(err);
  } else {
    console.log('ok');
  }
});

copydir('public/menu', 'public_mini/menu', function(err){
  if(err){
    console.log(err);
  } else {
    console.log('ok');
  }
});


function miniJs(fn){
	compressor.minify({
		compressor: 'uglifyjs',
		input: './public/1*.js',
		output: 'public_mini/.' + fn,
		callback: function (err, min) {}
	});
};

function miniCss(fn){
	compressor.minify({
	  compressor: 'clean-css',
	  input: './public/app*.css',
	  output: 'public_mini/.' + fn,
	  options: {
	    advanced: false, // set to false to disable advanced optimizations - selector & property merging, reduction, etc. 
	    aggressiveMerging: false // set to false to disable aggressive merging of properties. 
	  },
	  callback: function (err, min) {}
	});
};

var fs = require('fs');
var path = require('path');

var p = 'public';
 
fs.readdir(p, function(err, items) {
    for (var i=0; i<items.length; i++) {
    	
        console.log(items[i]);

        // if(path.extname(items[i]) == '.js'){
        // 	miniJs(items[i])
        // }else if(path.extname(items[i]) == '.css'){
        // 	miniCss(items[i])
        // }else if(path.extname(items[i]) == '.html'){
        // 	fs.createReadStream(p +'/index.html').pipe(fs.createWriteStream('public_mini/index.html'));
        // }
    }
});