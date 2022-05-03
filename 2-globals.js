/*
GLOBAL VARIABLES IN NODE
__dirname - current directory path
__filename - name of current file
require - function to use modules (CommonJS)
module - module info
process - info about the environment where the program is executed
*/
console.log(__dirname)
setInterval(() => {
    console.log('Hello World')
}, 1000)