// let gameName = "spiderman";
// gameName = "batsman";
// console.log(gameName);

//error//
// const username = "bhavay14";
// username = "bhavya";
// console.log(username);

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

// function findCar(carData){
//    console.log(carData.type);
// }

// const carData = {
//   name:"Tata Harrier", type: "electric"
// }
// const carData2={
//    name:"tata curvv",type: "coupe"
// }
// findCar(carData);
// findCar(carData2)

///   --------------higher order function-------
// function x() {
//    console.log("heyy");
// }
// function y(x) {
//    x();
//  }

// const radius = [3,1,2,4];

//const calArea = function(radius){
//   const output = [];
//    for(let i=0; i< radius.length; i++){
//        output.push(Math.PI* radius[i] * radius[i]);
//    }
//    return output;
// };
// console.log(calArea(radius));

// const calcircumference = function(radius){
//   const output = [];
//    for(let i=0; i< radius.length; i++){
//        output.push(2 * Math.PI * radius[i]);
//   }
//    return output;
//  };
// console.log(calcircumference(radius));

// const caldiameter = function(radius){
//   const output = [];
//    for(let i=0; i< radius.length; i++){
//        output.push(2 * radius[i]);
//    }
//    return output;
// };
// console.log(caldiameter(radius));

// const radius = [3,1,2,4];
// const area = function (radius){
//   return Math.PI * radius * radius;
// }
// const calcircumference = function (radius){
//    return 2 * Math.PI * radius;
// }
// const diameter = function(radius){
//    return 2 * radius;
// }
// const cal = function(radius,logic){
//    const output =[];
//    for(let i=0;i< radius.length;i++){
//        output.push(logic(radius[i]));
//    }
//    return output;
// };
// console.log(cal(radius, area));
// console.log(cal(radius, calcircumference));
// console.log(cal(radius, diameter));

const a = [1,2,3,4];
const b = [2,3,4,5];
const add = function(a,b){
    return a+b;
}
const sub = function(a,b){
    return a-b;
}
const multiply = function(a,b){
    return a*b;
}
const divide = function(a,b){
      return a/b;
}
const double = function(a,b){
    return (a * 2)+(b * 2);
}
const cal = function(a,b,logic){
    const output =[];
    for(let i =0;i<a.length;i++){
        output.push(logic(a[i],b[i]));
    }
    return output;
}
console.log(cal(a,b,add));
console.log(cal(a,b,sub));
console.log(cal(a,b,multiply));
console.log(cal(a,b,divide));
console.log(cal(a,b,double));