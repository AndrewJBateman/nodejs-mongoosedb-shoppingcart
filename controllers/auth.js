const User = require('../models/user');

exports.getLogin = (req, res, next) => {
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    isAuthenticated: false
  });
};

exports.postLogin = (req, res, next) => {
  User.findById('5c3c5fb4cda82c40382e0f8a')
    .then(user => {
      req.session.isLoggedIn = true;
      req.session.user = user;
      req.session.save(err => {
        console.log(err);
        res.redirect('/');
      });
    })
    .catch(err => console.log(err));
};

exports.postLogout = (req, res, next) => {
  req.session.destroy(err => {
    console.log(err);
    res.redirect('/');
  });
};

/*example session cookie, default name 'connect.sid':
s%3AwYOKHQqmcvwSO9ixTbbn2hFmNLKS3LpN.h7wDQtzrCz1UzYUhhEMjWG4o5DoZ8I7Pts%2FucqIxoIQ
*/