var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/Adventure', isLogIn,function(req, res, next) {
  res.sendfile('gamehub/rpg/index.html');
});
router.get('/Shooting',isLogIn, function(req, res, next) {
  res.sendfile('gamehub/shootingGame/index.html');
});
router.get('/indexE',isLogIn, function(req, res, next) {
  res.sendfile('gamehub/shootingGame/indexE.html');
});
router.get('/index',isLogIn, function(req, res, next) {
  res.sendfile('gamehub/shootingGame/index.html');
});
router.get('/index0',isLogIn, function(req, res, next) {
  res.sendfile('gamehub/shootingGame/index0.html');
});
router.get('/index1',isLogIn, function(req, res, next) {
  res.sendfile('gamehub/shootingGame/index1.html');
});
router.get('/index2',isLogIn, function(req, res, next) {
  res.sendfile('gamehub/shootingGame/index2.html');
});
router.get('/index3',isLogIn, function(req, res, next) {
  res.sendfile('gamehub/shootingGame/index3.html');
});
router.get('/index4',isLogIn, function(req, res, next) {
  res.sendfile('gamehub/shootingGame/index4.html');
});
router.get('/index5',isLogIn, function(req, res, next) {
  res.sendfile('gamehub/shootingGame/index5.html');
});
router.get('/Logic',isLogIn, function(req, res, next) {
  res.sendfile('gamehub/Logic/index.html');
});
module.exports = router;

function isLogIn(req,res,next){

  if (req.isAuthenticated()){
    return next();
  }
    res.redirect('/signIn');
}
