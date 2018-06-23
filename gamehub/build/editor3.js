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
  title: "if ((monsterX-chara.x)>=0){"+'\n'+
          "     moveLeft(7);"+'\n'+
          "     }else{"+'\n'+
          "     moveRight(7);"+'\n'+
          "     }",
  imageUrl: "cute.gif",
  imageSize:"300x300"
});
})
$('#hint').on('click', function() {
  swal({
  title: "if ( some condition is true ){"+'\n'+
         "do some stuff"+'\n'+
         "}else {"+'\n'+
         "do some other stuff"+'\n'+
         "}",
  imageUrl: "fine.gif",
  imageSize:"300x300"
});
})
localStorage.text3 ="";
var editor = ace.edit("editor");
editor.setTheme("ace/theme/twilight");
editor.session.setMode("ace/mode/javascript");

  document.getElementById('run').onclick = function() {
var editorText =editor.getValue ("ace/mode/javascript");
  if (typeof(Storage) !== "undefined") {
   // Store
localStorage.text3 =editorText;
   // Retrieve
game.start();
}
};

function callback(text,monsterX,monsterY) {
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
  game.fps = 20 ;


  game.preload('oo.png','chara2.png','end.png');


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
      label.x = 130;
      label.y = 0;
      label.width = 128;
      label.height = 64;
      label.font = "19px 'Arial'";
      label.color = 'rgb(0,100,100)';
      game.rootScene.addChild(chara);
      game.rootScene.addChild(monster);
      game.rootScene.addChild(label);

addMonster();
timer()

  };
  function moveTo(name){
  chara.tl.moveTo(name.x, name.y,25)
  }
  function moveX(name){
  chara.tl.moveTo(name.x, chara.y,25)
  }
  function moveY(name){
  chara.tl.moveTo(name.x, chara.y,25)
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

function addMonster(){
monster.addEventListener(Event.ENTER_FRAME, function () {
    if (monster.y > game.height) {  // if monster has gone below canvas,
        monster.x = randomInt(0, game.width - monster.width);  // new x,
        monster.y = -1 * monster.height;            // reset y location.
    } else {
      if(this.intersect(chara)){       // charaとの当たり判定
        gameEnd.image = game.assets['end.png'];
        game.rootScene.addChild(gameEnd);
        game.stop(); // 画面から消去
      }else{
        monster.y += gravity;
      }

        if (monster.y ==162){
          callback(localStorage.text3,monster.x,monster.y);

        }

    }
});
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

// === Helper functions === //
/** Generate a random integer between low and high (inclusive). */
function randomInt(low, high) {
  var dist  = low + Math.floor((high + 1 - low) * Math.random());
  return  dist
}
var move =0
function timer(){
  label.addEventListener(Event.ENTER_FRAME, function () {
      move++
          label.text =move + "msec";

  });
}
