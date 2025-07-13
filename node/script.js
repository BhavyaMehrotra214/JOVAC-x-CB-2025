
 const fs = require("fs");
// console.log(a); 
// console.log(b);

// fs.writeFile("app.js","const a =20",(err)=>{
//   if(err){
//        console.log(err);
//    }else{
//        console.log("file created");
//    }
// })

 // fs.appendFile("app.js","/nhello",(err)=>{
 //   if(err){
 //       console.log(err);
 //   }else{
 //       console.log("file created");
 //   }
 // })

// fs.unlink("math.js",(err)=>{
//    if(err){
//        console.log(err);
//    }else{
//        console.log("file deleted");
//    }
// })

fs.rmdir("new folder",{recursive : true},(err)=>{
    if(err){
        console.log(err);
    }else{
    console.log("folder created");
    }
 })


// fs.rmdir("huhuhu", ()=>{
//    if(err){
//        console.log(err);
//    }else{
//        console.log("folder deleted");
//    }
// })