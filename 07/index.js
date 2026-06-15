
const fs = require('fs');

// const Hello = 'Hello world';
// console.log(Hello);

const content = fs.readFileSync('./hello.txt', 'utf-8');
console.log(content);

const textOut = 'Hello world';
fs.writeFileSync('./hello-out.txt', textOut);



// 08








