var express = require('express');
var router = express.Router();
var Product = require('../models/product');
var Image = require('../models/Image');
var csrf = require('csurf');
var csrfProtection =csrf();
var passport = require('passport');
var questionController = require('../controllers/questionController.js');

router.get('/question', questionController.list);

router.get('/question/:id', questionController.show);

router.use(csrfProtection);


router.get('/',isLogIn,function(req, res, next) {
  products = Product.find(function(err,docs){
    var productChunks=[];
    var chunkSize =3;
    for(var i= 0; i<docs.length;i+= chunkSize){
      productChunks.push(docs);
    }
  res.render('game/index', { title: 'Game-based learning',products:productChunks });

  });

});

router.get('/profile',isLogIn,function(req,res,next){
  res.render('userDetail/profile');
});

router.get('/logout',isLogIn,function(req,res,next){
  req.logout();
  res.redirect('/signUp');
});
/* GET home page. */
router.get('/signIn',function(req,res,next){
  var message =req.flash('error');
  res.render('userDetail/signIn',{csrfToken:req.csrfToken(),message:message,showError:message.length>0})
});

router.post('/signIn',passport.authenticate('local.signIn',{
   successRedirect:'/profile',
   failureRedirect:'/signIn',
   failureFlash:true
}));


router.get('/signUp',notLogIn,function(req,res,next){
  var message =req.flash('error');
  Image = Image.findOne({imageName: 'registeration'},function(err,docs){
   res.render('userDetail/signUp',{csrfToken:req.csrfToken(),message:message,showError:message.length>0,signUpImage:docs.imagePath})
});
});

router.post('/signUp',notLogIn,passport.authenticate('local.signup',{
   successRedirect:'/profile',
   failureRedirect:'/signUp',
   failureFlash:true
}));

module.exports = router;

function isLogIn(req,res,next){

  if (req.isAuthenticated()){
    return next();
  }
    res.redirect('/signIn');
}

function notLogIn(req,res,next){
  if (!req.isAuthenticated()){
    return next();
  }
   res.redirect('/signIn');

}
