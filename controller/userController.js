
let User = require("../models/user");
const {validationResult} = require('express-validator');
const bcrypt = require('bcrypt');

exports.createUser = async(req,res) =>{
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
}