const { User } = require("../db");

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    username = req.headers.username;
    password = req.headers.password;

    User.findOne( {
        username: username,
        password: password
    }).then(function (user) {
        if(user){
            next();
        }else{
            res.status(500).json({
                msg: "User not found"
            })
        }
    })
}

module.exports = userMiddleware;