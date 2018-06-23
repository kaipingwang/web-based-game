var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Image = new Schema({
  imageName: {type: String,required: true},
  imagePath: {type: String,required: true}
});

module.exports = mongoose.model('Image',Image);
