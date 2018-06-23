var Image = require('../models/Image');
var mongoose = require('mongoose');
mongoose.connect('mongodb://test:1234@localhost:27017/game');


var Images = new Image({
    imageName: 'registeration',
    imagePath: 'https://sites.psu.edu/paspacegrant/files/2016/10/email-list-1tku2g8.png'
});

Images.save();
mongoose.disconnect();
