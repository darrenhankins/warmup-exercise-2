const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const query = require('../db/query');

function validUser(user) {
    const validEmail = typeof user.email == 'string' && user.email.trim() != '';
    const validPassword = typeof user.password == 'string' && user.password.trim() != '';
    return validEmail && validPassword;
}

router.post('/signup', (req, res, next) => {
    if (validUser(req.body)) {
        query.findUserByEmail(req.body.email)
            .then(user => {
                if (user) {
                  // user exists in db
                    console.log("user exists");
                } else {
                  // user not in db
                  const user = {
                    email: req.body.email
                  }
                  bcrypt.hash(req.body.password, 8)
                    .then(hash => {
                        user.password = hash;
                        query.createUser(user)
                          .then(user => {
                              res.json(user);
                          });
                      });
                }
            });
    } else {
        next(new Error('invalid user'));
    }
});

router.post('/login', (req, res, next) => {
    console.log(req.body);
    console.log("login");

})

module.exports = router;
