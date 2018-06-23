var passport = require('passport');
var userSignUp = require('../models/signUp');
var localStrategy = require('passport-local').Strategy;


passport.serializeUser(function(user,done){
  done(null,user.id);
});

passport.deserializeUser(function(id,done){
  userSignUp.findById(id, function(err,user){
  done(err, user);
  });
});
passport.use('local.signup', new localStrategy({
     usernameField:'name',
     password:'password',
     passReqToCallback:true

   }, function(req,name,password,done){
     req.checkBody('email','Invalid email').notEmpty().isEmail();
     req.checkBody('password','Invalid password less than 4 numbers').notEmpty().isLength({min:4});
     var errors = req.validationErrors();
     if(errors){
       var messages =[];
       errors.forEach(function(error){
         messages.push(error.msg);
       });
       return done(null,false,req.flash('error',messages))
     }
     userSignUp.findOne({'name':name}, function(err,user){
       if(err){
         return done(err);
       }
       if(user){
           return done(null, false, {message:'Username has already been used'});
       }

       var newSignUp = new userSignUp();
           newSignUp.name = name;
           newSignUp.email =req.body.email;
           newSignUp.password =newSignUp.encryptPassword(password);
           newSignUp.save(function(err, result) {
             if(err){
               return done(err);
             }
             return done(null,newSignUp);
           });
   });

}));

passport.use('local.signIn', new localStrategy({
     usernameField:'name',
     password:'password',
     passReqToCallback:true
   }, function(req,name,password,done){
     req.checkBody('email','Invalid email').notEmpty().isEmail();
     req.checkBody('password','Invalid password').notEmpty();
     var errors = req.validationErrors();
     if(errors){
       var messages =[];
       errors.forEach(function(error){
         messages.push(error.msg);
       });
       return done(null,false,req.flash('error',messages))
     }

     userSignUp.findOne({'name':name}, function(err,user){
       if(err){
         return done(err);
       }
       if(!user){
           return done(null, false, {message:'No user found'});
       }
       if(!user.validPassword(password)){
           return done(null, false, {message:'Wrong password'});
       }
           return done(null,user);
   });
   }));
