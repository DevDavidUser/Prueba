const express = require('express');
const router =  express.Router();
const userController = require('../controller/userController');
const userService = require('../services/userService');


router.get("/",async (req,res) =>{
  /*  
  try{
        const users = await User.findAll()
        res.json(users);
    }catch (error) {
        console.log(error);
        res.status(400).json({ msg: 'Get error'});
    }
    */
   re.send("Welcome home");
});
router.post("/new", userService.userValidation ,userController.createUser);

module.exports = router;