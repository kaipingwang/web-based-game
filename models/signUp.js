var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var signUpSchema = new Schema({
  name: {type: String,required: true},
  email: {type: String,required: true},
  password: {type: String,required: true}
});

signUpSchema.methods.encryptPassword = function(password){
  return bcrypt.hashSync(password, bcrypt.genSaltSync(5),null);
}
signUpSchema.methods.validPassword = function(password){
  return bcrypt.compareSync(password, this.password);
}

module.exports = mongoose.model('signUp',signUpSchema);
