const router = require('express').Router();
var mongoose = require('mongoose');
const User = require('../../models/user');
var crypto = require('crypto');
const { query } = require('express');

// router.get('/', (req, res) => {
//     UserModel.find({
//         name: req.name,
//         email: req.email,
//         password: req.password,

//     },
//         function (err, elements) {
//             if (elements.length) {
//                 axios.post('/', true);
//             } else {
//                 axios.post('/', false);
//             }
//         });
// })

router.post('/', (req, res) => {
    // const salt = crypto.randomBytes(16).toString('hex');
    // const hash = crypto.pbkdf2Sync(req.body.password, salt,
    //     1000, 64, `sha512`).toString(`hex`);

    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
    newUser.save(user => res.json(user))

})
module.exports = router;