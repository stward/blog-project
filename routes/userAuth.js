var User = require('../models/user')

module.exports = function (app, passport) {
  app.post('/login', function(req, res, next) {
    passport.authenticate('local-login', function(err, user, info) {
      if(err) {
        return next(err)
      }
      if(!user) {
        return res.json(info)
      }
      req.logIn(user, function(err) {
        if (err) {
          return next(err)
        }
        return res.json(user)
      })
    })(req, res, next)
  });
  app.post('/signup', function(req, res, next) {
    passport.authenticate('local-signup', function(err, user, info) {
      if (err) {
        console.log(err);
        return next(err)
      } else {
        if (!user) {
          console.log('email already taken error');
          res.json({message: 'Email is already taken'})
        } else {
          res.json(user)
        }
      }
    })(req, res, next)
  });
  app.get('/getCurrentUser', function(req, res) {
    if(req.user) {
      User.findById(req.user._id)
        .populate('location')
        .exec(function(err, data) {
          if(err) {
            console.log(err)
          } else {
            res.json(data)
          }
        })
    }
  });

  app.get('/profile', function (req, res) {
    res.json({message: 'logged IN.'});
  })

  // app.get('/auth/facebook', passport.authenticate('facebook', {scope: 'email'}));
  //
  // app.get('/auth/facebook/callback', passport.authenticate('facebook', {
  //   successRedirect : '/profile',
  //   failureRedirect : '/'
  // }));
  //
  // app.get('/auth/twitter', passport.authenticate('twitter'));
  //
  // app.get('/auth/twitter/callback', passport.authenticate('twitter', {
  //   successRedirect : '/profile',
  //   failureRedirect : '/'
  // }));
  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
      return next()
    }
    res.redirect('/')
  }
  app.get('/logout', function(req, res) {
    req.logout()
    res.redirect('/')
  })
}
