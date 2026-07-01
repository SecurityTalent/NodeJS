// const fs = require('fs');



// const input = fs.readFileSync('./hello.txt', 'utf-8');
// console.log(input);


const fs = require('fs');



const readFile = fs.readFileSync('./hello.txt', 'utf-8')
console.log(readFile);


const writeFile = `This is what we know about the avocode ${readFile}\n create on ${Date.now()}`;
fs.writeFileSync('./hlw.txt', writeFile )





