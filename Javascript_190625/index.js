//var x =1;
//a();
//b();
//console.log(x);
//function a(){
//  var x = 10;
//  console.log(x);
//}
//function b(){
//  var x = 100;
//  console.log(x);
//}


// var xyz = function abc(){
//  console.log(10);
// }
// xyz();
// console.log(xyz);

//var xyz = function abc(){
    
//}
//console.log(xyz);
//console.log(abc);
//function createObject(){
 //     let  person = {
 //           name: 'jenny',
 //            age:  25
  //       }
  //  console.log(person.name);
//}
//createObject();

// var myFun = function logMessage(){
// console.log("hello world");
// }
// myFun();
// console.log(logMessage);


//setTimeout(()=>{
 // console.log("serve water")
//},5000);

//setTimeout(()=>{
 // console.log("serve soup")
//},2000);

//setTimeout(() => {
//   console.log("serve drinks")
//},1000);

// now lets align this with callback

// function servewater(callback){
//   console.log("serving water");
//    setTimeout(callback,1000);
// }
// function servesoup(callback){
// console.log("serving soup");
//  setTimeout(callback,1000);
// }
// function serveStarters(callback){
// console.log("serving starters");
//  setTimeout(callback,1000);
// }
// function servedrinks(callback){
//  console.log("serving drinks");
//  setTimeout(callback,1000);
// }
// function servedinner(callback){
// console.log("serving dinner");
// setTimeout(callback,1000);
// }
// function paybill(){
//  console.log("paying bill");
// }
            












// console.log("program start");
// setTimeout(()=>{
//     console.log("i am setTimeout");
// },1000);
// fetch("https://dummyjson.com/products").then(function productet(){
//   console.log('DaTa : something');
// });
// console.log("program end");




// Higher Order Function
 const data = [2,4,5];
  const calcluatedouble = function (data){
  let output = [];
  for(let i =0; i<data.length;i++){
     output.push(data[i]*data[i]);
  }
  return output;
}
console.log(calcluatedouble(data));

const calcluatehalf = function (data){
  let output =[]
  for (let i=0; i<data.length;i++){
    output.push(data[i]/2);
  }
  return output;
}
console.log(calcluatehalf(data));

const doubledata = function (data){
  return data*data;
}

const cacluate = function (data,logic){
  let output =[];
  for (let i =0;i<data.legth;i++){
    output.push(logic(data[i]));
  }
  return output;
}
console.log((cacluate(data,doubledata)));