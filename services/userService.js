
let User = require("../models/user");
const {check} = require('express-validator');

const userValidation = [
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
]
module.exports.userValidation = userValidation;