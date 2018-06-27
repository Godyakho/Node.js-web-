const fs = require('fs');

fs.readFile('./fs.js',(err,data) => {
    if(err){
        console.log(err)
    }
    console.log(data.toString())
})