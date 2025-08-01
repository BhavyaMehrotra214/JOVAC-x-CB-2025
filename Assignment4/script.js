// document.getElementById("grandparent").addEventListener("click",()=>{
//       console.log("grandparent clicked");
// },true);
       
// document.getElementById("parent").addEventListener("click",()=>{
//       console.log("parent clicked");
// },false);
       
// document.getElementById("child").addEventListener("click",()=>{
//       console.log("child clicked");
// },false);
       




// document.getElementById("grandparent").addEventListener("click",()=>{
//       console.log("grandparent clicked");
// });
       
// document.getElementById("parent").addEventListener("click",(e)=>{
//       console.log("parent clicked");
//       e.stopPropagation();
// });
       
// document.getElementById("child").addEventListener("click",(e)=>{
//       console.log("child clicked");
//       e.stopPropagation();
// });
       
document.getElementById("grandparent").addEventListener("click",(e)=>{
       if(e.target == e.currentTarget){
       console.log("grandparent clicked");
       }
});
       
document.getElementById("parent").addEventListener("click",(e)=>{
       if(e.target == e.currentTarget)
       console.log("parent clicked");
       e.stopPropagation();
},true);
       
});
       
document.getElementById("child").addEventListener("click",(e)=>{
         if(e.target == e.currentTarget){
       console.log("child clicked");
         }
});
