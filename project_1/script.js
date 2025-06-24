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
})
.catch(function(handleerror){
    console.log("error:",handleerror)
});

