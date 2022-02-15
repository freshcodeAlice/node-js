// const fs = require('fs/promises'); - вариант 1
// const fs = require('fs').promises; - вариант 2

//const fs = require('fs');
//fs.promises; // - вариант 3

const fs = require('fs').promises;

fs.readFile('./text.txt', 'utf8').then((content)=>{
    const newContentToWrite = `Old content: ${content}, new content: Hello world`;
    fs.writeFile('./newFile.txt', newContentToWrite, 'utf8');
})

/*
1. Создать файл (вручную) и написать туда какой-то текст
2. Прочитать файл и на основании его содержимого + новой строки (lorem10) создать новый файл и записать туда этот текст

*/