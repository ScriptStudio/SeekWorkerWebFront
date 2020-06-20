#!/usr/bin/env node

const fs = require('fs');


const BD_PATH = './build/';

function move(listFiles, toDir) {

    /**
     * toDir deve ter o padrão:
     * 
     * "/newdir/"
     */

    for (const key in listFiles) {

        fs.rename(
            BD_PATH + listFiles[key], 
            BD_PATH + toDir + listFiles[key], 
            function (err) {
                console.log(listFiles[key] + ' movido');
        });
    }
}

const jsFiles = [
    'main.js',
    'main.js.map'
];

const cssFiles = [
    'main.css',
    'main.css.map'
];

move(jsFiles, '/js/');
move(cssFiles, '/css/');
