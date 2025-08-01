// const product = [
//    {id:1, name:"tshirt", price:"600"},
//    {id:2, name:"jeans", price:"800"},
//    {id:3, name:"kurti", price:"700"},
//    {id:4, name:"pant", price:"500"},
//    {id:5, name:"shirt", price:"900"},
// ]

// let wallet = {balance: 1500};

// let cart =[]

// function addProductTocart(proid,callback){
//    setTimeout(() => {
//    for(let i=0;i<product.length;i++){
//        if(product[i].id === proid){
//           cart.push(product[i]);
//           console.log(`${product[i].name} added`);
//            callback();
//            return;
//       }
//    }
//    console.log("not added");
// },1000);
// }

// function createorder(callback){
//    setTimeout(() => {
//        if(cart.length>0){
//            console.log("order created")
//            callback();
//        }
//        else{
//            console.log("order not created");
//        }
//    }, 1000);
//  }

// function payment(callback){
//    setTimeout(()=>{
//        const summary = cart.map(x => ({
//            name: x.name, price:x.price}));
//        const total = summary.reduce((sum,prod)=>sum+prod.price,0);
//        if(wallet.balance >= total){
//            wallet.balance = wallet.balance-total;
//           console.log("payment sucessfull");
//            callback(summary,total);
//        }
//        else{
//            console.log("Less amount")
//        }
//        },1000);
//    }
// function showSummary(summary){
//    console.log("order details:");
//    for(let i =0;i<summary.length;i++){
//    console.log(`${summary[i].name}-${summary[i].price}`)
//    };
//    console.log(`Remaining wallet balance: ${wallet.balance}`);
// }
// addProductTocart(3, () =>{
//    createorder(()=>{
//        payment((summary, total) => {
//            showSummary(summary, total);
//        });
//    })
// });






////////////////// USING PROMISES ////////////////////////////
const product = [
    {id:1, name:"tshirt",price:600},
    {id:2, name:"kurti",price:400},
    {id:3, name:"shirt",price:700},
    {id:4, name:"jeans",price:500},
    {id:5, name:"pant",price:600},
]

let wallet = {balance:1500};
let cart =[];

function addproducttocart(orderid){
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            for(let i=0;i<product.length;i++){
            if(product[i].id == orderid){
                cart.push(product[i]);
                console.log(`${product[i].name} added`);
                resolve();
            }
            }
                reject("product not found");
            },1000);
    });
}

function createorder(){
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            if(cart.length > 0){
                console.log("order created");
                resolve();
            }else{
                reject("cart empty");
            }
        },1000);
    })
}

function payment(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
          const details = cart.map(x =>({
            name : x.name, price:x.price}));
            const total = details.reduce((sum,prod)=> sum+prod.price,0);  
            if(wallet.balance >= total){
                wallet.balance -= total;
                console.log("payment successful");
                resolve({details});
            }else{
                reject("less amount");
            }
        },1000);
    });
};

function showordersummary({details}){
    console.log("order details:");
    for(let i =0;i < details.length;i++){
        console.log(`${details[i].name}- ${details[i].price}`);
    }
    console.log(`Remaining wallet balance: ${wallet.balance}`);
}
function handleerror(err){
    console.log(err);
}

addproducttocart(4)
.then(createorder)
.then(payment)
.then(showordersummary)
.catch(handleerror);
