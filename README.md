# Webpack для SPA сайта :<br />
1. npm i : Импортировать необходимые модули.Зависимости указаны в файле package.json
2. создать папку **frontend_archive** (эта папка включена в .gitignore, поэтому не отражается на git)

ЗАГОЛОВОК HTML СТРАНИЦЫ - const titleHTML = 'ЗАГОЛОВОК';

!!! ПРИ ВНЕСЕНИЕ ИЗМЕНЕНИЙ В JS ФАЙЛЫ - ПЕРЕЗАГРУЗИТЬ = npm run devser

# !!!ЗАПУСКАТЬ ТОЛЬКО ЧЕРЕЗ npm run скрипт!!!

# npm run devser       <br />-- http://localhost:8080/webpack-dev-server/
# npm run testser      <br />-- http://127.0.0.1:3000/ 
# npm run archive      <br />АРХИВАЦИЯ frontend В frontend_archive И МИНИМИЗАЦИЯ css & js ФАЙЛОВ!!!

scripts в package.json:<br />
1. "error": "webpack --display-error-details",
2. "info": "webpack --display-modules",
3. "infov": "webpack --display-modules –v",
4. "time": "webpack --profile --display-modules",
5. "timev": "webpack --profile --display-modules --display-reasons",
6. "devser": "set NODE_ENV=devser&set NODE_ARCH=0&webpack-dev-server --inline --hot",
7. "testser": "set NODE_ENV=testser&set NODE_ARCH=0&webpack&node server.js",
8. "ar-mi": "node archive-mini.js"

Плагины:
1. NoErrorsPlugin – не добавляет в сборку файлы с ошибками
2. rimraf - удаляет старые js файлы из папки
3. assetsPlugin - СОЗДАЕТ ФАЙЛ assets.json С ИНФОРМАЦИЕЙ О СБОРКЕ (hesh)
4. HtmlWebpackPlugin - создает index.html файл с подключенным внутри и обновленным app.[hash].js
5. CopyWebpackPlugin - копирует файлы
6. ExtractTextPlugin - создает CSS файл

"dependencies": {<br />
    "assets-webpack-plugin": "^3.5.1",<br />
    "autoprefixer-loader": "^3.1.0",<br />
    "babel": "^6.0.15",<br />
    "babel-core": "^6.0.14",<br />
    "babel-loader": "^6.0.0",<br />
    "babel-plugin-transform-es2015-modules-commonjs": "^6.0.14",<br />
    "babel-preset-es2015": "^6.0.14",<br />
    "bundle-loader": "^0.5.5",<br />
    "copy-webpack-plugin": "^4.0.1",<br />
    "css-loader": "^0.21.0",<br />
    "extract-text-webpack-plugin": "^0.8.2",<br />
    "file-loader": "^0.8.4",<br />
    "html-webpack-plugin": "^2.30.1",<br />
    "jade": "^1.11.0",<br />
    "jade-loader": "^0.7.1",<br />
    "node-minify": "^2.3.0",<br />
    "node-static": "^0.7.7",<br />
    "rimraf": "^2.6.2",<br />
    "style-loader": "^0.13.0",<br />
    "stylus-loader": "^1.4.0",<br />
    "url-loader": "^0.5.6",<br />
    "webpack": "^1.12.2",<br />
    "webpack-dev-server": "^1.12.1"<br />