const fs = require('fs');
const path = require('path');

var filePath = "E:/@mehedi/image";

var files = fs.readdirSync(filePath);
// var files = fs.readdirSync(filePath).filter((file) => file.endsWith('.jpg'));

var count = 1;
files.forEach((file)=>{
    var old_path = path.join(filePath,file);
    var ext_name = path.extname(old_path);
    var new_path = path.join(filePath, "Image"+count+ext_name );

    fs.renameSync(old_path,new_path);
    count++;
    console.log("done", count, ".......");
})
