/////////////////////////////////////////////        /////////////////////////////////////////////////////////// 
const fs = require('fs');
//sync..
// fs.writeFileSync('./text.txt','hey there');

//Async
// const result = fs.writeFile('./text.txt','hey there' , (err) => {
// })

// const result = fs.readFileSync("./city.text","utf-8")
// console.log(result);

// fs.readFile("./city.txt" , "utf-8" , (err,result) => {
//    if(err){
//        console.log("Error",err);
//    }else {
//        console.log(result);
//    }
// })

// fs.appendFile("./text.txt", `\n${new Date().toLocaleString()}`, (err,data) => {
//       if(err){
//        console.log("Error",err);
//       }else {
//        console.log("time appended");
//       }
// });

// fs.unlink("./city.txt", (err) =>{
//     if(err){
//        console.log("Error",err);
//     }else {
//        console.log("deleted");
//     }
// });

// fs.mkdir('my-docs' , (err) => {
//    if(err){
//        console.log("Error",err);
//    }else{
//        console.log("created");
//    }
// })

fs.rmdir("my-docs" , (err)=> {
    if(err){
        console.log("error",err);
    }else{
        console.log("deleted");
    }
})