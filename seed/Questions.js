var Question = require('../models/questionModel');
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI  || 'mongodb://test:1234@localhost:27017/game');


var questions =[
new Question({
    id:0,
    question: 'If you call the move method, how do you write how far the player should move?',
    answer1: 'move 20',
    answer2: 'move("20")',
    answer3: 'move(“twenty”)',
    correctAnswer:'move(20)'
}),new Question({
    id:0,
    question: 'If you call the moveX method, how do you write how far the player should move?',
    answer1: 'moveX 20',
    answer2: 'moveX("20")',
    answer3: 'moveX(“twenty”)',
    correctAnswer:'moveX(20)'
}),new Question({
    id:1,
    question:'How would you move a player left?',
    answer1: 'moveUp()',
    answer2: 'moveRight()',
    answer3: 'moveBack()',
    correctAnswer:'moveLeft()'
}),new Question({
    id:1,
    question:'How would you move a player right?',
    answer1: 'moveUp()',
    answer2: 'moveLeft()',
    answer3: 'moveBack()',
    correctAnswer:'moveRight()'
}),new Question({
    id:2,
    question: 'What does the function shooting() work for?',
    answer1: 'fly ',
    answer2: 'suicide',
    answer3: 'jump',
    correctAnswer:'kill enemy'
}),new Question({
    id:2,
    question: 'What does the function removeFromScene() work for?',
    answer1: 'fly ',
    answer2: 'suicide',
    answer3: 'kill enemy',
    correctAnswer:'remove enemy'
}),new Question({
    id:3,
    question: 'How to move to the certain position instead of moveLeft() and moveRight()?',
    answer1: 'moveDown()',
    answer2: 'moveBy()',
    answer3: 'moveUp()',
    correctAnswer:'moveTo()'
}),new Question({
    id:3,
    question: 'How to move to the certain position?',
    answer1: 'moveDown()',
    answer2: 'moveBy()',
    answer3: 'moveUp()',
    correctAnswer:'moveTo()'
}),new Question({
    id:4,
    question: 'Which function can show invisible monsters?',
    answer1: 'pause()',
    answer2: 'hidden()',
    answer3: 'clear()',
    correctAnswer:'show()'
}),new Question({
    id:4,
    question: 'Which function can stop monsters?',
    answer1: 'show()',
    answer2: 'hidden()',
    answer3: 'clear()',
    correctAnswer:'pause()'
}),new Question({
    id:5,
    question:'Which part of the games you found is interesting?',
    answer1: 'Adventure game',
    answer2: 'Shooting game',
    answer3: 'Not one of them',
    correctAnswer:'All are interesting'
}),new Question({
    id:5,
    question:'Do you think the game develper is handsome?',
    answer1: 'No',
    answer2: 'Maybe',
    answer3: 'I do not know',
    correctAnswer:'Yes'
}),new Question({
    id:6,
    question:'Can you find out how far up the screen the player character is? \
              if(true){ \
                moveLeft(10)\
              }else{\
                moveRight(10)\
              }',
    answer1: '10 steps up',
    answer2: '10 steps right ',
    answer3: 'no move',
    correctAnswer:' 10 steps left'
}),new Question({
    id:6,
    question:'Can you figure out how far up the screen the player character is? \
              if(false){ \
                moveLeft(10)\
              }else{\
                moveRight(10)\
              }',
    answer1: '10 steps up',
    answer2: '10 steps left ',
    answer3: 'no move',
    correctAnswer:' 10 steps right'
})
];

let exitFile=0;
for(let i =0; i < questions.length;i++){
   questions[i].save();
   exitFile++;
   if(exitFile === questions.length){
      exit();
   }
}

function exit(){
  mongoose.disconnect();
}
