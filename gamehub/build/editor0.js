$('#run').on('click', function() {
  $(this).prop('disabled', true);
})
$('#que').on('click', function() {
  game.start();
  $(this).prop('disabled', true);
})
$('#stop').on('click', function() {
  location.reload();
})

$('#solution').on('click', function() {
  swal({
  title: "moveX(coin)",
  imageUrl: "cute.gif",
  imageSize:"300x300"
});
})
$('#hint').on('click', function() {
  swal({
  title: "moveX method",
  imageUrl: "fine.gif",
  imageSize:"300x300"
});
})
localStorage.text0 ="";

var editor = ace.edit("editor");
editor.setTheme("ace/theme/twilight");
editor.session.setMode("ace/mode/javascript");

  document.getElementById('run').onclick = function() {
var editorText =editor.getValue ("ace/mode/javascript");
  if (typeof(Storage) !== "undefined") {
   // Store
localStorage.text0 =editorText;
   // Retrieve
game.start();
}
};

function callback(text,coin) {
  errors.innerHTML="";
    var annotation_lists = editor.getSession().getAnnotations();
    var has_error = false;
    // Unfortunately, you get back a list of lists. However, the first list is
    //   always length one (but not always index 0)
    go_through:
    for (var l in annotation_lists) {
        for (var a in annotation_lists[l]) {
            var annotation = annotation_lists[l][a];

            if (annotation.type == "error") {
                has_error = true;
                break go_through;
            }
        }
    }

 if (!has_error) {
        try {
            eval(text);
            prevCode = text;
        }
        catch (error) {
        errors.innerHTML = error
        }
    }
};



enchant();


  // New game with a 320x320 pixel canavs, 24 frames/sec.
  var game = new Core(320, 320);
  var chara = new Sprite(32,32);
  var gameEnd = new Sprite(187, 98);
  var gravity = 6;
  var label = new Label();
  var score = 0
  game.fps = 20 ;


  game.preload('oo.png','chara2.png','end.png','icon0.gif','banna.png');


  game.onload = function () {
      gameEnd.x= 60;
      gameEnd.y= 130;
      chara.speed = 4;
      chara.image = game.assets['banna.png'];
      chara.frame =10;
      chara.x = (game.width + chara.width) / 2;
      chara.y = 250;
      label.x = 130;
      label.y = 0;
      label.width = 128;
      label.height = 64;
      label.font = "19px 'Arial'";
      label.color = 'rgb(0,100,100)';
      game.rootScene.addChild(chara);
      game.rootScene.addChild(label);

      game.rootScene.addEventListener('enterframe',function(){
          if(game.frame % 10 == 0){
              addcoin();
          }
          if(game.rootScene.age > game.fps * 20){
                label.text =score + " points";
                game.end();

             }
      });



  };

  function moveTo(name){
  chara.tl.moveTo(name.x, name.y,5)
  }
  function moveX(name){
  chara.tl.moveTo(name.x, chara.y,5)
  }
  function moveY(name){
  chara.tl.moveTo(chara.x, name.y,5)
  }
  function removeFromScene(name){

  name.tl.removeFromScene()
  }

  function show(name){

  name.tl.show()
  }
  function clear(name){

  name.tl.clear()
  }
  function pause(name){

  name.tl.pause()
  }


function addcoin(){
    var coin = new Sprite(16, 16);
    coin.x = randomInt(0, game.width - coin.width);
    coin.y = 0;
    coin.image = game.assets['icon0.gif'];
    coin.frame = 14;
    coin.addEventListener('enterframe', function() {
        if(this.intersect(chara)){
            game.rootScene.removeChild(this);
            score ++;
        }else{
            this.y += 3;
        }
        if ((coin.x-chara.x)>=0){
          chara.frame =[34,34,35,35,36,36];
        }else{
          chara.frame =[22,22,23,23,24,24];
        }
        chara.tl.clear()
        callback(localStorage.text0,coin );
    });

    game.rootScene.addChild(coin);

}


  var init=173
      function moveLeft(step){
        chara.speed=4;
        chara.addEventListener('enterframe',function funcLeft(){
        chara.frame =[22,22,23,23,24,24];
        chara.x -= chara.speed;
              if (chara.x <= 0) {
                  chara.x = 0;
              }else if (chara.x <init-4*step) {
                init=chara.x;
                  chara.speed=0;
       chara.removeEventListener('enterframe', funcLeft, false);
                }

            });
        };

function moveRight(step){
          chara.speed=4;
          chara.addEventListener('enterframe',function funcRight(){
          chara.frame =[34,34,35,35,36,36];
              chara.x += chara.speed;
        if (chara.x > game.width - chara.width) {
            chara.x = game.width - chara.width;
        } else if (chara.x < 0) {
            chara.x = 0;
        }else if (chara.x >init+4*step) {
          init=chara.x;
            chara.speed=0
            chara.removeEventListener('enterframe', funcRight, false);

        }
});
  };

function randomInt(low, high) {
  var dist  = low + Math.floor((high + 1 - low) * Math.random());
  return  dist
}
