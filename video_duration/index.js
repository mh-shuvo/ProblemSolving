const fs = require('fs');
const path = require('path');
const colors = require('colors');
const {getVideoDurationInSeconds} = require('get-video-duration');
const homeDir = 'E:/';
const dir = path.resolve(
homeDir,
'@mehedi',
'tutorial'
);
function getListOfFile(dir = '/', type = '.mp4', fileList){
    let files = fs.readdirSync(dir);
    fileList = fileList || [];

    files.forEach(f=>{
        if(!f.startsWith('.')){
            let filePath = path.join(dir,f);
            if(fs.statSync(filePath).isDirectory()){
                fileList = getListOfFile(filePath,type,fileList);
            }
            else{
                if(f.endsWith(type)){
                    fileList.push(filePath);
                }
            }
        }
    });
    return fileList;
}
(async () => {
    let videoFileList = getListOfFile(dir);
    videoFileList = videoFileList.map(async video => await getVideoDurationInSeconds(video));
    let totalScounds = 0;
    for await (let v of videoFileList){
        totalScounds += v;
    }
    let totalMinute = totalScounds/60;
    let totalHour = totalMinute/60;
    let totalFile = videoFileList.length;
    console.log("Total Video: " + String(totalFile).blue);
    console.log("Total Scounds: " + String(totalScounds.toFixed(2)).green);
    console.log("Total Minute: " + String(totalMinute.toFixed(2)).bgMagenta);
    console.log("Total Hour: " + String(totalHour.toFixed(2)).red);
})()