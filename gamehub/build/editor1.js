$('#run').on('click', function() {
  $(this).prop('disabled', true);
})
$('#stop').on('click', function() {
  location.reload();
})
$('#que').on('click', function() {
  game.start();
  $(this).prop('disabled', true);
})
$('#solution').on('click', function() {
  swal({
  title: "moveX(monster)"+'\n'+
          "shooting()",
  imageUrl: "cute.gif",
  imageSize:"300x300"
});
})
$('#hint').on('click', function() {
  swal({
  title: "shooting method will be used with if-else",
  imageUrl: "fine.gif",
  imageSize:"300x300"
});
})
localStorage.text1 ="";
var editor = ace.edit("editor");
editor.setTheme("ace/theme/twilight");
editor.session.setMode("ace/mode/javascript");

  document.getElementById('run').onclick = function() {
var editorText =editor.getValue ("ace/mode/javascript");
  if (typeof(Storage) !== "undefined") {
   // Store
localStorage.text1 =editorText;
   // Retrieve
game.start();
}
};

function callback(text) {
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
  var monster= new Sprite(34,36);
  var chara = new Sprite(34,36);
  var gameEnd = new Sprite(187, 98);
  var gravity = 6;
  var label = new Label();
  var score =0;
  var time = 500;
  var background_image = new Sprite(320, 320);
  game.fps = 10;
  game.preload('oo.png','chara2.png','icon0.png','castle.png','end.png','effect0.png');


  game.onload = function () {
      gameEnd.x= 60;
      gameEnd.y= 130;
      chara.speed = 4;
      chara.image = game.assets['oo.png'];
      chara.x = (game.width + chara.width) / 2;
      chara.y = 250;
      monster.image = game.assets['chara2.png'];
      monster.x = randomInt(0, game.width - monster.width);
      monster.y = -1 * monster.height;
      label.x = 100;
      label.y = 0;
      label.width = 128;
      label.height = 64;
      label.font = "19px 'Arial'";
      label.color = 'rgb(0,255,255)';
      background_image.image = game.assets['castle.png'];
      game.rootScene.addChild(background_image);
      game.rootScene.addChild(chara);
      game.rootScene.addChild(monster);
      game.rootScene.addChild(label);


addMonster()
timer()

  };
  function timer(){
    label.addEventListener(Event.ENTER_FRAME, function () {
        move = time--
        if (move == 0){
          if (score => 10){
            label.text = "score: "+score+" points";
            game.stop();
          }else{
            gameEnd.image = game.assets['end.png'];
            game.rootScene.addChild(gameEnd);
           game.stop();
          };

        }else{
            label.text =move + "msec";
        }
    });
  }


function addMonster(){
monster.addEventListener(Event.ENTER_FRAME, function () {
    if (monster.y > game.height) {
       reset();
    } else {
      if(this.intersect(chara)){
        gameEnd.image = game.assets['end.png'];
        game.rootScene.addChild(gameEnd);
        game.stop();
      }else{
        monster.y += gravity;
      }
        if (monster.y ==0){
          if ((monster.x-chara.x)>=0){
            chara.frame =[1,1,2,2,3,3,4,4];
          }else{
            chara.frame =[9,9,10,10,11,11];
          }
          callback(localStorage.text1)

        }

    }
})
}
  var init=173
      function moveLeft(step){
        chara.speed=4;
        chara.addEventListener('enterframe',function funcLeft(){
        chara.frame =[9,9,10,10,11,11];
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
          chara.frame =[1,1,2,2,3,3,4,4];
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

  function shooting1(){
    var bullet = new Sprite(16,16);
    bullet.y = 235;
     bullet.x = chara.x+2;
    game.rootScene.addChild(bullet);
            bullet.addEventListener('enterframe',function func(){
                 bullet.speed =3;

                 bullet.image = game.assets['icon0.png'];
                 bullet.frame = 56;
                 bullet.y -= bullet.speed;
                 if(monster.intersect(bullet)){
                       bullet.removeEventListener('enterframe', func, false);
                       game.rootScene.removeChild(bullet);
                       effect(monster.x,monster.y);
                       score++
                       reset();
                     }
              });
            };

   function reset(){
      monster.x = randomInt(0, game.width - monster.width);  // new x,
      monster.y = -1 * monster.height;
   }

   function effect(monsterX,monsterY){
     var explosion = new Sprite(16,16);
      game.rootScene.addChild(explosion);
      explosion.frame = 1;
      explosion.addEventListener('enterframe',function func(){
                  explosion.x = monsterX;               // 0 から 319 のあいだの乱数
                  explosion.y = monsterY;
                  explosion.image = game.assets['effect0.png'];
             setTimeout(remove,500);
             function remove(){
                   game.rootScene.removeChild(explosion);
             }
           });
    };
    function moveX(name){
    chara.tl.moveTo(name.x, chara.y,8)
    }
    function moveY(name){
    chara.tl.moveTo(chara.x, name.y,8)
    }
    function moveTo(name){
    chara.tl.moveTo(name.x, name.y,8)
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

    function shooting(){
      chara.tl.then(function(){shooting1()})

    }
    function thenDo(doThing){
      chara.tl.then(function(){doThing})

    }

// === Helper functions === //
/** Generate a random integer between low and high (inclusive). */
function randomInt(low, high) {
  var dist  = low + Math.floor((high + 1 - low) * Math.random());
  return  dist
}
