var Image = require('../models/Image');
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI ||'mongodb://game:aa1234@ds117061.mlab.com:17061/heroku_rfcwjx13');


var Images = new Image({
    imageName: 'registeration',
    imagePath: 'https://sites.psu.edu/paspacegrant/files/2016/10/email-list-1tku2g8.png'
});

Images.save();
mongoose.disconnect();
