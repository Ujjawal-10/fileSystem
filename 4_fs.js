//file system module


//--------------------------------------------------------------------------------------------------------------

//files
const fileSystem = require('fs') // fs module ko fileSystem variable pe leke jayenge
//we will be reading writing updating and deleting in a file


const path = require('path')

// first make a file let f1.txt
// let content =fileSystem.readFileSync('f1.txt');

//to read a file you can use readFileSync Method

// console.log('this is my file data ->'+content) // string k sath concatenate kiya taki human readable format me aa jaye

// console.log(content) // ese krenge to buffer ayega kyuki humari machine 1 0 pe kaam krti hai aur humne content ko human readable format me bhi concatenate nhi kiya

// write to a file
// writeFileSync method is used to write to a file

// fileSystem.writeFileSync('f2.txt','hey!!!!! this is file 2 data')
// console.log('file written')

//if the file doesn't exist and we write that file name the it will create a new file with that name and will write the data to it
// fileSystem.writeFileSync('f3.txt','hey!!!!! this is file 3 data')
// console.log('file written')

//----------------------------------------------------------------------------------------------------------------

//append a file

//appendFileSync is a method which is used to update a file

// fileSystem.appendFileSync('f2.txt' , 'more data')
// console.log('file updated')

//delete a file
// unlinkSync method is used to delete a file

// fileSystem.unlinkSync('f3.txt')
 //------------------------------------------------------------------------------------------

 //directories

//  fileSystem.mkdirSync('myDirectory')
// console.log('directory Created')

//deleting or removing a directory

// fileSystem.rmdirSync('myDirectory');
// console.log('directory Removed');

// existSync method lets you know that a file / folder exists or not
//and it returns tru or false

// let doesExist = fileSystem.existsSync('f1.txt');
// console.log(doesExist);

//lstatSync -> shows status of the directory
// let statistics= fileSystem.lstatSync('f1.txt');
// console.log(statistics)

// console.log('is File?', statistics.isFile()) // agar ye file huo to true return hoga

// console.log('isDirector? ', statistics.isDirectory()) // ye  ye  btayega ki jiska stats nikala h vo file h ya directory

//readdirSync

//readdirSync is a method which is used to see content inside a directory

//---------------------------------------------------------------------------------------------------


let folderPath = ' D:\\FJP4\\10th_jan_2022\\myDirectory2' 

let folderContent= fileSystem.readdirSync(folderPath)
console.log('folder content->'+ folderContent)        // doubt

//---------------------------------------------------------------------------------------------

//copying files from src to dest
// let srcFilePath='D:\\FJP4\\10th_jan_2022\\myDirectory\\child folder\\f1.txt'
// let destinationFolderPath='D:\\FJP4\\10th_jan_2022\\myDirectory2\\'

// let tobecopiedFileName= path.basename(srcFilePath)  //f1.txt

// let destPath = path.join(destinationFolderPath , tobecopiedFileName)
// fileSystem.copyFileSync(srcFilePath , destPath)
// console.log('file copied')


