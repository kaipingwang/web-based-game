var Product = require('../models/product');
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI ||'mongodb://test:1234@localhost:27017/game');


var products =[
new Product({
    imagePath: 'http://read.pudn.com/downloads39/sourcecode/game/133755/src/RES/frame__.jpg',
    title: 'Shooting',
    description: 'Basic learning',
    level: 'Easy'
}),
new Product({
    imagePath: 'http://images.eurogamer.net/2014/usgamer/loren3.jpg',
    title: 'Adventure',
    description: ' middle learning',
    level: 'Medium'
}),
new Product({
    imagePath: 'http://www.gamehub.net.au/wp-content/uploads/2016/04/002a_Outfoxed_Initial.jpg',
    title: 'Logic',
    description: ' difficult learning',
    level: 'Difficult'
})
];

var exitFile=0;
for(var i =0; i < products.length;i++){
   products[i].save();
   exitFile++;
   if(exitFile === products.length){
      exit();
   }
}

function exit(){
  mongoose.disconnect();
}
