const realtordb = require('../models/realtordb');
const bcrypt = require('bcrypt');
module.exports = {
    create(req, res){
        console.log("made it in req", req.body);
        const { username, password } = req.body;
        const saltRounds = 10;
        const salt = bcrypt.genSaltSync(saltRounds);
        const hashedPass = bcrypt.hashSync(password, salt);

        req.body.username = username;
        req.body.password = hashedPass;

        realtordb.createUser(req.body)
        .then(result => {
            console.log("made it")
            res.json({
                msg: "User Inserted Successfully",
                credentials: { result }
            });
        })
        .catch(err => {
            res.status(400)
            .json({
                msg: "Failed to insert User"
                })
            })
    }
}
