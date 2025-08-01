const user = "BhavyaMehrotra214";
const Github_api = `https://api.github.com/users/${user}`;

const userdata = fetch(Github_api);
userdata.then(function(response){
    return response.json();
})
.then(function(data){
      document.getElementById("avatar").src =data.avatar_url;
      document.getElementById("name").textContent = data.name;
      document.getElementById("bio").textContent = data.bio;
       document.getElementById("Followers").textContent = data.followers;
       document.getElementById("repos").textContent = data.public_repos;     
       return fetch(data.repos_url);
    })
.then(function(response){
    return response.json();
})
.then(function(reposData){
    const order = document.getElementById("repo-list");
    order.html="";
    for(let i =0;i<3 && i < reposData.length; i++){
        order.innerHTML += `<li><a href="${reposData[i].html_url}" target ="_blank">${reposData[i].name}</a></li>`
    }
})
.catch(function(handleerror){
    console.log("error:",handleerror)
});

