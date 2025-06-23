// let gameName = "spiderman";
// gameName = "batsman";
// console.log(gameName);

//error//
// const username = "bhavay14";
// username = "bhavya";
// console.log(username);

//////////////////function///////////////
// function maketea(typeofTea){
//    return `Making ${typeofTea}`;
// }
// let teaorder = maketea("leamotea");
// console.log(teaorder);

// function ordertea(typeoftea){
//    function confrimorder(){
//        return `order confrim`;
//    }
//    return confrimorder()
// }
// let orderconfrimed = ordertea("chai");
// console.log(orderconfrimed)

///////////////////////////////////////arrow function////////////////////
const caltotal = (price,quantity) =>  price * quantity;

let totalcost = caltotal(20*30);
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

////////////////////////////////// call back function ///////////////////////
// setTimeout(function (){
//    console.log("time");
// },5000);
// function x(y){
// console.log("x");
// y();
// }
// x(function y(){     // y is call back function
// console.log("y");
// });
function maketea(typeoftea){
 return `maletea:${typeoftea}`;
}
function processteaorder(tea){
     return tea('earl grey')
}
let order = processteaorder(maketea)
console.log(order);

function createteamaker(){
    return function(teaType){
        return 'Making ${teaType}';
    };
}
let teamaker = createteamaker();
let result = teamaker("green tea");
console.log(result);


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

// const a = [1,2,3,4];
// const b = [2,3,4,5];
// const add = function(a,b){
//    return a+b;
// }
// const sub = function(a,b){
//    return a-b;
// }
// const multiply = function(a,b){
//    return a*b;
// }
// const divide = function(a,b){
//      return a/b;
// }
// const double = function(a,b){
//    return (a * 2)+(b * 2);
// }
// const cal = function(a,b,logic){
//    const output =[];
//    for(let i =0;i<a.length;i++){
//        output.push(logic(a[i],b[i]));
//    }
//    return output;
// }
// console.log(cal(a,b,add));
// console.log(cal(a,b,sub));
// console.log(cal(a,b,multiply));
// console.log(cal(a,b,divide));
// console.log(cal(a,b,double));



///////////////////////////////////////////map reduce filter /////////////////////////////////////////////////////////

// const arr =[ 5,3,4,6,7]
// function double(x){
//    return x*2;
 // }
// function binary(x){
//    return x.toString(2);
// }
// const output = arr.map(binary);
// console.log(output);

// const output = arr.filter(function oddv(x){
//    return x%2!=0;
// });
//    console.log(output);

// function findsum(arr){
//    let sum=0;
//    for(let i=0;i<arr.length;i++){
//        sum=sum+arr[i];
//    }
//    return sum;
// }
// console.log(findsum(arr));

// const output = arr.reduce(function (acc, curr){
//    acc = acc+curr;
//    return acc;
// },0);
// console.log(output);

//// find max///
// const outputt = arr.reduce(function (acc, curr){
//    if(acc<curr);
//    acc = curr;
//     return acc;
// },0);

// console.log(outputt);
// const user = [
//    {firstname:"bhavya",lastname:"mehrotra",age:20},
//    {firstname:"ruchi",lastname:"mehrotra",age:48},
//    ]

// const ouput = user.map((x) => x.firstname+ " "+ x.lastname)

// console.log(output);

/// acc = {26 : 2, 75: 1, 50: 1}

// const outpt = user.reduce(function(acc,curr){
//     if(acc[curr.age]){
//        acc[curr.age] = ++acc[curr.age];
//     }
//     else {
//        acc[curr.age] = 1
//     }
//     return acc;
// },{});
// console.log(outpt);

// const outpuut  = user.filter((x) => x.age<30).map((x) => x.firstname);
//    console.log(output);


////////////////////////////////////////call back hell//////////////////////////////////////////////////


///////////////////////////// promises ///////////////////////////////////////
// cartt = ["s","p","c"];
// createorder(cartt, function(orderid){
//    proceedtopayment(orderid, function(paymentinfo){
//        showodersummary(paymentinfo, function(updatewallet){
//           updatewalletbalance();
//        });
//    });
// });


// createorder(cartt).then(function(orderid){
//    return proceedtopayment(orderid);
// })
// .then(function(paymentInfo){
//    return showodersummary(paymentInfo);
// })
// .then(function(paymentInfo){
//    return updatewalletbalance(paymentInfo);
// });


// function createorder(cartt){
//    const pr = new Promise(function(resolve, reject){
//          if(!validateCart(cartt)){
//              const err = new Error("cart is not valid");
//              reject(err);
//           }
// 
           /////logic create order
//           const orderid = "1234";
//           if(orderid){
//            resolve(orderid);
//           }
//    });
//    return pr
// }
// function validateCart(cart){
//    return true;
// }

///////////////////////////////  event bubbling //////////////////
document.getElementById("grandparent").addEventListener('click',(e)=>{
    console.log("grandparent clicked");
    e.stopPropagation();
},true);//capturing
document.getElementById("parent").addEventListener('click',()=>{
    console.log("grandparent clicked");
},false);//bubbling
document.getElementById("child").addEventListener('click',()=>{
    console.log("child clicked");
},true);