//// reduce ////
// const arr = [5,1,2,4,7];

// function sumofar(arr){
//    let sum =0;
//    for(let i =0;i<arr.length;i++){
//        sum+=arr[i];
//    }
//    return sum;
// }
// console.log(sumofar(arr));

///Reduce syntax
// let arr = [1,2,3,4]
//    const output = arr.reduce(function(acc,curr){
//        acc = acc+curr;
//        return acc;
//    },0)
//    console.log(output);

// let arrr=[4,,5,6]
// let max = arrr[0];
//  for(let i =0;i<arrr.length;i++){
//     if(arrr[i]>max){
//        max = arrr[i];
//     }
// }
// console.log(max);

 // const outputt = arr.reduce(function(acc,curr){
 //   if(curr>acc){
 //       acc=curr;
 //   }
 //   return acc;
 //  },0)
//  console.log(output);

///////////////////////////////////////

// object 

const users = [
    {
        firstname: "bhavya",
        lastname: "mehrotra",
        age: 21
    },
    {
        firstname: "kirti",
        lastname: "mehrotra",
        age:20
    },
    {
       firtsname: "tanisha",
//       lastname: "mehrotra",
       age:20
    },
]
// console.log(users.firstname);

// const output = users.map(user => user.firstname + " " + user.lastname);
// console.log(output);

// const outputfilter = users.filter(user => user.age <=20);
// console.log(outputfilter);

// const finalresult = outputfilter.map((namee)=> namee.firstname);
// console.log(finalresult);


//////////////promises///////////

const cart = ["shoes", "watches", 'pants', "glassses"];
createorder(cart, function(orderid){
    proceedtopay(orderid , function(paymentinfo){
        showordersummary(paymentinfo, function(){
            updatewallet();
        });
    });
});

/////////// create promise/////////
function createorder(cart){
    let orderid ="1234"
    console.log(orderid);

}
const promise = createorder(cart);
// console.log(promise);

promise.then(function(orderid){
    console.log(orderid);
}).catch(function(err){
    console.log(err.message);
})


