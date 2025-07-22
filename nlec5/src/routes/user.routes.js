const express = require("express");
const userModel = require("../model/user.model");
const mongoose = require("mongoose")
const router = express.Router();

router.get("/", async (req, res) => {
    const users = await userModel.find();
    console.log(users);
    res.render("home", { title: "home page", users });
});


router.get("/register", (req, res) => {
    res.render("register", { title: "register page" });
});


router.post("/register", async (req, res) => {
    const { name, email, picture } = req.body;

    const user = await userModel.create({ name, email, picture });
    console.log(user);

    res.redirect("/register-successful");
});

router.get("/register-successful", (req, res) => {
    res.render("registered", { title: "successful" });
});

router.get("/users/:id" , async(req,res)=>{
    let { id } = req.params;

    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.json({message : "invalid userid"})
    }

    const user = await userModel.findById(id);


    if(!user){
         return res.json({message: "name is not found"})
    }

    res.render("userdetails", {title : user.name, user})
})

router.delete("/users/:id" , async(req,res)=>{
    let { id } = req.params;
     
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.json({message: " is is invalid"})
    }

    await userModel.findByIdAndDelete(id);
    res.json({message : "user deleted"});
})


// router.patch("/update/:id", async (req, res) => {
//    let { id } = req.params;
//    let { name } = req.query;

//     if (!id) {
//        return res.json({ message: "User ID is invalid" });
//    }


//    if(!mongoose.Types.ObjectId.isValid(id)){
//        return res.json({message : "invalid userid"})
//    }

//    if (!name) {
//        return res.json({ message: "Name is required" });
//    }


//    const user = await userModel.findByIdAndUpdate(
//        id,
//        { name },
//        { new: true }
//    );

//    if (!user) {
//        return res.status(404).json({ message: "User not found" });
//    }

//    res.json({ message: "User updated successfully", user });
// });

module.exports = router;


