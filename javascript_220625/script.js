//// Async & Await //////////

// console.log("class start");
// const projectbyb = new Promise(function(resolvereject){
//      setTimeout(()=>{
//       console.log("i have done");
//        resolve("work done");
//     },5000)
// });

// async function projectevaluation(){
//    const fileofb = await projectbyb;
//    console.log("file recevied", fileofb);
//    console.log("class end")
// }
// projectevaluation();
// console.log("t am outside");

///////// working example /////
// function fetchproductdata(){
//    const response = fetch("https://dummyjson.com/products");
//    const data = response
//    console.log(data);
// }
// fetchproductdata();

// const data = fetch("https://dummyjson.com/products")
//    .then(res => res.json())
//    .then(data => console.log(data));

// async function getProducts(){
//    try{
//    const res = await fetch('https://dummyjson.com/products');
//    const resdata = await res.json();
//    console.log(res);
//    }
//        catch(error){
//            console.log(error);

//        }
//    }
// console.log("end");
// getProducts();
 

//////////////call//////////////
// function admissionprocess(greet, fees){
//  console.log(greet + this.name + fees);
// }
// const student = {name: "bhavya"}
// admissionprocess("hello","");
// admissionprocess.call(student, "hello, ", "2 lacs");

/////////////apply/////////////

// function admissionprocess(greet, fees){
//  console.log(greet + this.name + fees);
// }
// const student = {name: "bhavya"}
// admissionprocess("hello","");
// admissionprocess.apply(student,["hello, ", "2 lacs"]);

///////////bind//////////////

// function admissionprocess(greet, fees){
//  console.log(greet + this.name + fees);
// }
// const student = {name: "bhavya"}
// admissionprocess("hello","20000");
// const studentdata1 = admissionprocess.bind(student,"hello, ", "2 lacs");
// studentdata1();



///////////////////currying in js///////////////


function sumofall(a,c,b){
    return a+b+c;
}
console.log(sumofall(10,20,30));

// currying approach

// function firstnumber(a){
//    return function(b){
//        return function(c){
//            return a+b+c;
//        }
//    }
// }
console.log(firstnumber(5)(10)(20));


function choosebread(bread){
    return function(party){
        return function(cheesse){
            return `bread: ${bread},`
        }
    }
}
console.log(choosebread("multigrain")("paneer"));



const grandparent = document.getElementById("grandparent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");

grandparent.addEventListener('click',()=>{
    console.log("grandparent")
});
grandparent.addEventListener('click',()=>{
    console.log("parent")
});
grandparent.addEventListener('click',()=>{
    console.log("child")
});
