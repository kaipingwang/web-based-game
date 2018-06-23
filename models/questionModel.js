var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var questionSchema = new Schema({
	id:{type: String,required: true},
	question:{type: String,required: true},
	answer1: {type: String,required: true},
	answer2: {type: String,required: true},
	answer3: {type: String,required: true},
	correctAnswer: {type: String,required: true}
});

module.exports = mongoose.model('question', questionSchema);
