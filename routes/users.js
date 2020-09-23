const express = require('express');
const router =  express.Router();
let User = require("../models/user");

router.get("/",(req,res) =>{
    res.send("Welcome home");
});
router.post("/new", async(req,res) =>{
    try{
        const jane = await User.create({ name: "Jane" })
        res.json(jane);
    }catch (error) {
        console.log(error);
        res.status(400).json({ msg: 'Hubo un error en el get de Posteos'});
    }
});

module.exports = router;