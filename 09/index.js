const fs = require("fs");

// ! Blocking , Synchronous Way

/*
const textIn = fs.readFileSync('./hello.txt', 'utf-8')
console.log(textIn);


const textOut = `this is 09 No video`;
fs.writeFileSync('./hello.txt', textOut);
console.log('File written');
*/

// ! Non-Blocking , Asynchronous Way

fs.readFile("./hello.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  }

  fs.readFile(`./${data}.txt`, "utf-8", (err, data2) => {
    console.log(data2);

    fs.readFile("./hello3.txt", "utf-8", (err, data3) => {
      console.log(data3);

      fs.writeFile("./Fainal.txt", `${data2}\n ${data3}`, "utf-8", (err) => {
        console.log("File written");
      });
    });
  });
});

console.log("File read....");






