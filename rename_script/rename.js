var fs =  require('fs');
var path = require('path');
var filePath = "E:/@mehedi/js_image";
var files = fs.readdirSync(filePath).filter((file) => file.endsWith('.jpg'));
var count = 1;
var ext_name = '.jpg';
files.forEach((file)=>{
    var old_path = path.join(filePath,file);
    var new_path = path.join(filePath,'JS_'+count+ext_name);
    fs.renameSync(old_path,new_path);
    count++;
}) 