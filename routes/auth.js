var express = require('express')
  , router = express.Router()
  , passport = require('passport');

// GET /auth/steam
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  The first step in Steam authentication will involve redirecting
//   the user to steamcommunity.com.  After authenticating, Steam will redirect the
//   user back to this application at /auth/steam/return
router.get('/steam', passport.authenticate('steam', { failureRedirect: '/' }), (req, res)=> {
    res.redirect('/');
  });

// GET /auth/steam/return
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.
router.get('/steam/return', (req, res, next)=> {
  // Issue #37 - Workaround for Express router module stripping the full url, causing assertion to fail 

      req.url = req.originalUrl;
      next();
  }, 
  passport.authenticate('steam', { failureRedirect: '/' }),(req, res) =>{
    
    res.redirect('/account/profile');
  });

module.exports = router;