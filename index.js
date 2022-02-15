// const fs = require('fs/promises'); - вариант 1
// const fs = require('fs').promises; - вариант 2

//const fs = require('fs');
//fs.promises; // - вариант 3

const fs = require('fs').promises;

fs.readFile('./text.txt', 'utf8').then((data)=>{
    console.log(data);
})