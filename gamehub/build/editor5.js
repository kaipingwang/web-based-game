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
  title: "",
  text:"if (Math.abs(monsterB.x-chara.x)>Math.abs(monster.x-chara.x)){ "+'\n'+
    "moveX(monster)"+'\n'+
    "if(Math.abs(monster.x-chara.x)<10){"+'\n'+
        "shooting()"+'\n'+
    " }"+'\n'+
"}else { moveX(monsterB)"+'\n'+
"if(Math.abs(monsterB.x-chara.x)<10){"+'\n'+
    "shooting();"+'\n'+
  "}"+'\n'+
 "}",
  imageUrl: "cute.gif",
  imageSize:"300x300"
});
})
$('#hint').on('click', function() {
  swal({
  title: "shooting method will be implemented with if-else statement",
  imageUrl: "fine.gif",
  imageSize:"300x300"
});
})

localStorage.text5 ="";

var editor = ace.edit("editor");
editor.setTheme("ace/theme/twilight");
editor.session.setMode("ace/mode/javascript");

  document.getElementById('run').onclick = function() {
var editorText =editor.getValue ("ace/mode/javascript");
  if (typeof(Storage) !== "undefined") {
   // Store
localStorage.text5 =editorText;
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
  var monster= new Sprite(48,48);
  var monsterB= new Sprite(48,48);
  var chara = new Sprite(34,36);
  var gameEnd = new Sprite(187, 98);
  var gravity = 8;
  var label = new Label();
  var score =0;
  var time = 500;
  var background_image = new Sprite(320, 320);
  game.fps = 10;
  game.preload('oo.png','chara2.png','icon0.png','dessert.png','end.png','effect0.png','monsterA.png');


  game.onload = function () {
      gameEnd.x= 60;
      gameEnd.y= 130;
      chara.speed = 4;
      chara.image = game.assets['oo.png'];
      chara.x = (game.width + chara.width) / 2;
      chara.y = 280;
      monster.image = game.assets['monsterA.png'];
      monster.frame =[21,22,23]
      monster.x = game.width+1 * monster.width;
      monster.y = randomInt(0, 250);
      monsterB.image = game.assets['monsterA.png'];
      monsterB.frame =[78,79,80]
      monsterB.x = -1 * monster.width;
      monsterB.y = randomInt(0, 250);
      label.x = 120;
      label.y = 00
      label.width = 180;
      label.height = 64;
      label.font = "19px 'Arial'";
      label.color = 'black';
      background_image.image = game.assets['dessert.png'];
      game.rootScene.addChild(background_image);
      game.rootScene.addChild(chara);
      game.rootScene.addChild(monster);
      game.rootScene.addChild(monsterB);
      game.rootScene.addChild(label);

addMonsterB()
addMonster()
timer()

  };
  function timer(){
    label.addEventListener(Event.ENTER_FRAME, function () {
        move = time--
        if (move == 0){
          if (score > 20){

            game.stop();
            $("#instruction").fadeOut("fast");
            $("#run").fadeOut("fast");
            $("#stop").fadeOut("fast");
            $("#hint").fadeOut("fast");
            $("#solution").fadeOut("fast");
            $("#back").fadeOut("fast");
            $(".col-md-7").fadeOut("fast");
            $('*').css('background', 'transparent')
            $('body').css('background', 'url(EndGirl.png)')
            $("#finalMark").text("Score: "+score+" points")
          }else{
            label.text = "Score: "+score+"points";
            gameEnd.image = game.assets['end.png'];
            game.rootScene.addChild(gameEnd);
            game.stop();
          };

        }else{
            label.text =move + "msec";
        }
    });
  }
  function moveX(name){
  chara.tl.moveTo(name.x-25, chara.y,4)
  }
  function moveY(name){
  chara.tl.moveTo(chara.x, name.y,3)
  }
  function moveTo(name){
  chara.tl.moveTo(name.x, name.y,3)

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

  function thenDo(func){
    chara.tl.then(function(){func})

  }

function addMonster(){
monster.addEventListener(Event.ENTER_FRAME, function () {
    if (monster.x <0) {
       reset();
    } else {
        monster.x-= gravity;
        }
    if( monster.x>0 && monster.x< (game.width- chara.width)&&monsterB.x>0 && monsterB.x< (game.width- chara.width)){
      if ((monster.x-chara.x)>=0){
        chara.frame =[1,1,2,2,3,3,4,4];
      }else{
        chara.frame =[9,9,10,10,11,11];
      }
    callback(localStorage.text5)
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

  function shooting(){
    var bullet = new Sprite(16,16);
    bullet.x = chara.x+2;
    bullet.y = chara.y-2;
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
                     }else if (monsterB.intersect(bullet)){
                           bullet.removeEventListener('enterframe', func, false);
                           game.rootScene.removeChild(bullet);
                           effect(monsterB.x,monsterB.y);
                           score++
                           resetB();
                         }
              });
            };

   function reset(){
     monster.x = game.width +1 * monster.width;
     monster.y = randomInt(0, 250);
   }

   function resetB(){
     monsterB.x = -1 * monster.width;
     monsterB.y = randomInt(0, 250);
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

    function addMonsterB(){
    monsterB.addEventListener(Event.ENTER_FRAME, function () {
        if (monsterB.x > game.width) {
        resetB();
        } else {
            monsterB.x+= gravity;}
            if(monster.x>0 && monster.x< (game.width- chara.width)&&  monsterB.x>0 && monsterB.x< (game.width- chara.width)){
              if ((monsterB.x-chara.x)>=0){
                chara.frame =[1,1,2,2,3,3,4,4];
              }else{
                chara.frame =[9,9,10,10,11,11];
              }
              chara.tl.clear()
             callback(localStorage.text5)
            }
    })
}

// === Helper functions === //
/** Generate a random integer between low and high (inclusive). */
function randomInt(low, high) {
  var dist  = low + Math.floor((high + 1 - low) * Math.random());
  return  dist
}
