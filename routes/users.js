const express = require('express');
const router =  express.Router();
const { body, validationResult, check} = require('express-validator');
const bcrypt = require('bcrypt');
let User = require("../models/user");

router.get("/",async (req,res) =>{
    try{
        const users = await User.findAll()
        res.json(users);
    }catch (error) {
        console.log(error);
        res.status(400).json({ msg: 'Get error'});
    }
});
router.post("/new",[
  check('email', 'Email is not valid.').isEmail()
  .custom(async value => {
    try{
      let emailCheck = await User.findOne({ where:{ 'email': value }});
      if (emailCheck !== null) {
        console.log('User Exists');
        return Promise.reject();
      }
    }catch (error) {
      console.log(error);
      res.status(400).json({ msg: 'Post error'});
    }
    }).withMessage('Email is already in use.'),
   check('firstName')
   .isLength({ min:1 }).withMessage('Field must be higher that 1 character')
   .isAlphanumeric().withMessage('Field must be alphanumeric'),
   check('lastName')
   .isLength({ min:1 }).withMessage('Field must be higher that 1 character')
   .isAlphanumeric().withMessage('Field must be alphanumeric'),
   check('password')
   .isLength({ min:8 }).withMessage('Password must be at least 8 characters in length')
    .matches('[0-9]').withMessage('Password must contain at least 1 number')
    .matches('[a-z]').withMessage('Password must contain at least 1 lowercase letter')
    .matches('[A-Z]').withMessage('Password must contain at least 1 uppercase letter')
  ] ,async(req,res) =>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try{
        const firstName = req.body.firstName;
	    const lastName = req.body.lastName;
        const email = req.body.email;
        const password = req.body.password;
        const hashPassword = bcrypt.hashSync(password, 10);
        const newUser = await User.create({firstName,lastName,email,password:hashPassword});
        res.status(200).json(newUser);
    }catch (error) {
        console.log(error);
        res.status(400).json({ msg: 'Post error'});
    }
});

module.exports = router;