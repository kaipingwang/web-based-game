
$('#stop').on('click', function() {
  location.reload();
})
var content_script= ["moveRight(30)","moveLeft(50)","moveTo(heart)",
                     "shooting()","removeFromScene(bomb)",
                     "clear(fire);clear(water)"+'\n'+
                     "pause(mud);pause(lightening)"];
var content_hint= [ "Try using the moveRight method" +'\n'+
                    "You might input 20 steps to move",
                    "Try using the moveLeft method" +'\n'+
                    "You might input 40 steps to move",
                    "Try using the moveTo method" +'\n'+
                    "You might input heart position to move",
                    "Try using the shooting method",
                    "Try using the removeFromScene method",
                    "Try using the clear or pause method"];
       var script
       var hint
       $('#solution').on('click', function() {
         swal({
         title: script,
         imageUrl: "Hint.gif",
         imageSize:"300x180"
       });
       })
       $('#hint').on('click', function() {
         swal({
         title: hint,
         imageUrl: "fine.gif",
         imageSize:"300x300"
       });
       })

var editor = ace.edit("editor");
editor.setTheme("ace/theme/twilight");
editor.session.setMode("ace/mode/javascript");

  document.getElementById('run').onclick = function() {
var editorText =editor.getValue ("ace/mode/javascript");
  if (typeof(Storage) !== "undefined") {
   // Store
localStorage.text =editorText;
   // Retrieve
   callback(localStorage.text);
}
};

function callback(text) {
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
          swal({
          title: error,
          imageUrl: "error.gif",
          imageSize:"300x250"
        });
        }
    }
};

  enchant();
      var game = new Core(320, 320);
      var chara = new Sprite(34,36);
      var diamond = new Sprite(16,16);
      var ruby = new Sprite(16,16);
      var heart = new Sprite(16,16);
      var monsterA = new Sprite(48,45);
      var alien = new Sprite(64,70);
      var bossA = new Sprite(65,70);
      var bossB = new Sprite(65,70);
      var bomb = new Sprite(16,16);
      var prizeA = new Sprite(48,48);
      var prizeB = new Sprite(48,48);
      var winner = new Sprite(312,190);
      var fire = new Sprite(32,32);
      var water = new Sprite(32,32);
      var mud = new Sprite(32,32);
      var lightening = new Sprite(32,32);
      var gameEnd = new Sprite(187, 98);
      var i = 0;
      game.preload('oo.png','icon0.png','monsterA.png','phoenix.png','monsterB.png','bossA.png','bossB.png','prize.png','win.png','disaster.png','end.png');
      game.fps = 15;
      game.onload = function(){
        gameEnd.x= 60;
        gameEnd.y= 130;
        gameEnd.image = game.assets['end.png'];
        fire.x = 4;
        fire.y = 30;
        fire.image = game.assets['disaster.png'];
        fire.frame =3
        fire.isGrowing = true;
        lightening.x = 4;
        lightening.y = 250;
        lightening.image = game.assets['disaster.png'];
        lightening.frame =37
        lightening.isGrowing = true;
        mud.x = 280;
        mud.y = 250;
        mud.image = game.assets['disaster.png'];
        mud.frame =7
        mud.isGrowing = true;
        water.x = 280;
        water.y = 30;
        water.image = game.assets['disaster.png'];
        water.frame =23
        water.isGrowing = true;
        winner.x = 4;
        winner.y = 30;
        winner.image = game.assets['win.png'];
        prizeA.x = (game.width + chara.width) *0.2;
        prizeA.y = 0;
        prizeA.image = game.assets['prize.png'];
        prizeA.frame=[0,14,26];
        prizeB.x = (game.width + chara.width) *0.7;
        prizeB.y = 0;
        prizeB.image = game.assets['prize.png'];
        prizeB.frame=[10,23,35];
      bomb.x = 50;
      bomb.y = (game.height - chara.height)*0.2;
      bomb.image = game.assets['icon0.png'];
      bomb.frame=[25,24];
      bomb.isGrowing = true;
      chara.image = game.assets['oo.png'];
      chara.x = (game.width + chara.width) / 2;
      chara.y = (game.height - chara.height)*0.7;
      chara.frame =[1,1,2,2,3,3,4,4];
      diamond.image = game.assets['icon0.png'];
      diamond.frame=64;
      diamond.x =game.width - diamond.width-4
      diamond.y =(game.height - chara.height)*0.75;
      diamond.isGrowing = true;
      ruby.image = game.assets['icon0.png'];
      ruby.frame=66;
      ruby.x =0
      ruby.y =(game.height - chara.height)*0.75;
      ruby.isGrowing = true;
      heart.image = game.assets['icon0.png'];
      heart.frame=70;
      heart.x =(game.width + chara.width) / 2;
      heart.y =(game.height - chara.height)*0.5;
      heart.isGrowing = true;
      monsterA.image = game.assets['monsterA.png'];
      monsterA.frame=[0,1,2];
      monsterA.x =(game.width + chara.width) / 2;
      monsterA.y =0;
      alien.image = game.assets['monsterB.png'];
      alien.frame=[0,1,2]
      alien.x =(game.width + chara.width) *0.2;
      alien.y =50;
      alien.tl.hide();
      bossA.image = game.assets['bossA.png'];
      bossA.frame=[0,0,1,1,2,2]
      bossA.x =(game.width + chara.width) *0.2;
      bossA.y =0;
      bossA.tl.hide();
      bossB.image = game.assets['bossB.png'];
      bossB.frame=[0,0,1,1,2,2]
      bossB.x =(game.width + chara.width) *0.7;
      bossB.y =0;
      bossB.tl.hide();
      game.rootScene.addChild(diamond);
      game.rootScene.addChild(chara);
      game.rootScene.addChild(alien);
      game.rootScene.addChild(bossA);
      game.rootScene.addChild(bossB);


diamondGrowth();




      };
game.start();

function moveTo(name){
  if (name.x>chara.x){
    chara.frame =[1,1,2,2,3,3,4,4];
  }else{
    chara.frame =[9,9,10,10,11,11];
  }
chara.tl.moveTo(name.x, name.y,20)
}
function moveY(name){
  if (name.x>chara.x){
    chara.frame =[1,1,2,2,3,3,4,4];
  }else{
    chara.frame =[9,9,10,10,11,11];
  }
chara.tl.moveTo(chara.x, name.y,20);
}
function moveX(name){
  if (name.x>chara.x){
    chara.frame =[1,1,2,2,3,3,4,4];
  }else{
    chara.frame =[9,9,10,10,11,11];
  }
chara.tl.moveTo(name.x, chara.y,20)

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
var init=173
      function moveLeft(step){
        chara.speed=4;
        chara.addEventListener('enterframe',function funcLeft(){
            chara.frame =[9,9,10,10,11,11];
                  chara.x -= chara.speed;
                  if (chara.x <= 0) {
                      chara.x = 0;
                      chara.removeEventListener('enterframe', funcLeft, false);
                  } else if (chara.x <init-4*step) {
                      init=chara.x;
                        chara.speed=0;
                        chara.removeEventListener('enterframe', funcLeft, false);
              }
              if(chara.intersect(ruby)){
                chara.frame =[1,1,2,2,3,3,4,4];
                chara.speed=0
                chara.removeEventListener('enterframe', funcLeft, false);
                game.rootScene.removeChild(ruby);
                heartGrowth();
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
                        chara.removeEventListener('enterframe', funcRight, false);
                    } else if (chara.x < 0) {
                        chara.x = 0;
                        chara.removeEventListener('enterframe', funcRight, false);
                    }else if (chara.x >init+4*step) {
                      init=chara.x;
                        chara.speed=0
                        chara.removeEventListener('enterframe', funcRight, false);
                    }
                    if(chara.intersect(diamond)){
                      chara.speed=0
                      chara.removeEventListener('enterframe', funcRight, false);
                      game.rootScene.removeChild(diamond);
                      rubyGrowth();
                        }
                  });
              };

              function shooting(){
                var bullet = new Sprite(16,16);
                bullet.y = chara.y-3;
                bullet.x = chara.x+2;
                game.rootScene.addChild(bullet);
                        bullet.addEventListener('enterframe',function func(){
                             bullet.speed =3;
                             bullet.image = game.assets['icon0.png'];
                             bullet.frame = 56;
                             bullet.y -= bullet.speed;
                             if(bullet.y<0){
                                   bullet.removeEventListener('enterframe', func, false);
                                   game.rootScene.removeChild(bullet);

                                 }
                                 if(bullet.intersect(monsterA)){
                                   game.rootScene.removeChild(monsterA);
                                   bombGrowth();
                                     }else if(bullet.intersect(bossA)){
                                       game.rootScene.removeChild(bossA);
                                          prizeAdo();
                                         }else if(bullet.intersect(bossB)){
                                           game.rootScene.removeChild(bossB);
                                           prizeBdo();
                                             }
                          });
                        };


function diamondGrowth(){
  diamond.addEventListener(Event.ENTER_FRAME, function event() {
           if (diamond.scaleX > 1.35) {
               diamond.isGrowing = false;
           } else if (diamond.scaleX < 0.8) {
               diamond.isGrowing = true;
           }
           if (diamond.isGrowing) {
               diamond.scaleX += 0.05;
           } else {
               diamond.scaleX -= 0.05;
           }
           diamond.scaleY = diamond.scaleX;
           var level ="Collect the Diamond"+'<br>'+
                      "If you need a clue, click the hint button" +'<br>'+
                      "More advice can see the solution button"
           $("#instruction").html(level);
          script =content_script[0];
          hint =content_hint[0];

       });
}

function rubyGrowth(){
  game.rootScene.addChild(ruby);
ruby.addEventListener(Event.ENTER_FRAME, function event() {

           if (ruby.scaleX > 1.2) {
               ruby.isGrowing = false;
           } else if (ruby.scaleX < 0.8) {
               ruby.isGrowing = true;
           }
           if (ruby.isGrowing) {
               ruby.scaleX += 0.05;
           } else {
               ruby.scaleX -= 0.05;
           }
           ruby.scaleY = ruby.scaleX;
           var level1 ="Collect the Gem"
           $("#instruction").text(level1)
           script =content_script[1]
           hint =content_hint[1];
       });
}
function fireGrowth(){
  game.rootScene.addChild(fire);
  fire.tl.moveBy(288, 6, 90).moveBy(-288, 6, 90).loop();
  fire.addEventListener(Event.ENTER_FRAME, function event() {

           if (fire.scaleX > 1.0) {
               fire.isGrowing = false;
           } else if (fire.scaleX < 0.7) {
               fire.isGrowing = true;
           }
           if (fire.isGrowing) {
               fire.scaleX += 0.05;
           } else {
               fire.scaleX -= 0.05;
           }
           fire.scaleY = fire.scaleX;
           if(chara.intersect(fire)){
             fire.removeEventListener('enterframe', event, false);
             game.rootScene.addChild(gameEnd);
             game.stop();
               }
       });
}
function waterGrowth(){
  game.rootScene.addChild(water);
  water.tl.moveBy(-288, 6, 90).moveBy(288, 6, 90).loop();
  water.addEventListener(Event.ENTER_FRAME, function event() {

           if (water.scaleX > 1.0) {
               water.isGrowing = false;
           } else if (water.scaleX < 0.7) {
               water.isGrowing = true;
           }
           if (water.isGrowing) {
               water.scaleX += 0.05;
           } else {
               water.scaleX -= 0.05;
           }
           water.scaleY = water.scaleX;
           if(chara.intersect(water)){
             water.removeEventListener('enterframe', event, false);
             game.rootScene.addChild(gameEnd);
             game.stop();
               }
       });
}
function mudGrowth(){
  game.rootScene.backgroundColor = 'black'
  chara.x=142
  chara.y= 140
  game.rootScene.addChild(mud);
  mud.tl.moveBy(-288, -6, 90).moveBy(288, -6, 90).loop();
  mud.addEventListener(Event.ENTER_FRAME, function event() {

           if (mud.scaleX > 1.0) {
               mud.isGrowing = false;
           } else if (mud.scaleX < 0.7) {
               mud.isGrowing = true;
           }
           if (mud.isGrowing) {
               mud.scaleX += 0.05;
           } else {
               mud.scaleX -= 0.05;
           }
           mud.scaleY = mud.scaleX;
           if(chara.intersect(mud)){
             mud.removeEventListener('enterframe', event, false);
             game.rootScene.addChild(gameEnd);
             game.stop();
               }
       });
}
function lighteningGrowth(){
    game.rootScene.addChild(lightening);
  lightening.tl.moveBy(288, -6, 90).moveBy(-288, -6, 90).loop();
  lightening.addEventListener(Event.ENTER_FRAME, function event() {

           if (lightening.scaleX > 1.0) {
               lightening.isGrowing = false;
           } else if (lightening.scaleX < 0.7) {
               lightening.isGrowing = true;
           }
           if (lightening.isGrowing) {
               lightening.scaleX += 0.05;
           } else {
               lightening.scaleX -= 0.05;
           }
           lightening.scaleY = lightening.scaleX;
           if(chara.intersect(lightening)){
             lightening.removeEventListener('enterframe', event, false);
             game.rootScene.addChild(gameEnd);
             game.stop();
               }
       });
}
function heartGrowth(){
  game.rootScene.addChild(heart);
heart.addEventListener(Event.ENTER_FRAME, function event() {

           if (heart.scaleX > 1.2) {
               heart.isGrowing = false;
           } else if (heart.scaleX < 0.8) {
               heart.isGrowing = true;
           }
           if (heart.isGrowing) {
               heart.scaleX += 0.05;
           } else {
               heart.scaleX -= 0.05;
           }
           var level3 ="Collect the Heart"
           $("#instruction").text(level3)
           script =content_script[2];
            hint =content_hint[2];
           heart.scaleY = heart.scaleX;
           if(chara.intersect(heart)){
             heart.removeEventListener('enterframe', event, false);
             game.rootScene.removeChild(heart);
             monsterAction()
               }
       });
}

function monsterAction(){
  game.rootScene.addChild(monsterA);
monsterA.addEventListener(Event.ENTER_FRAME, function event() {
  var level4 ="Shooting the Moster"
  $("#instruction").text(level4)
  script =content_script[3];
   hint =content_hint[3];
       });
}

function bombGrowth(){
  game.rootScene.addChild(bomb);
bomb.addEventListener(Event.ENTER_FRAME, function event() {

           if (bomb.scaleX > 1.8) {
               bomb.isGrowing = false;
           } else if (bomb.scaleX < 0.8) {
               bomb.isGrowing = true;
           }
           if (bomb.isGrowing) {
               bomb.scaleX += 0.05;
           } else {
               bomb.scaleX -= 0.05;
           }
           bomb.scaleY = bomb.scaleX;
           var level5 ="Remove the Bomb"
           $("#instruction").text(level5)
           script =content_script[4];
            hint =content_hint[4];
           if(chara.intersect(bomb)){
             game.rootScene.addChild(gameEnd);
             game.stop();
               }
       });
}

function prizeAdo(){
        chara.frame =[1,1,2,2,3,3,4,4];
        game.rootScene.addChild(prizeA);
        prizeA.addEventListener(Event.ENTER_FRAME, function event() {
           if(chara.intersect(prizeA)){
             prizeA.removeEventListener('enterframe', event, false);
             game.rootScene.removeChild(prizeA);
             score = true
             win();
               }
       });
}

function prizeBdo(){
        game.rootScene.addChild(prizeB);
        prizeB.addEventListener(Event.ENTER_FRAME, function event() {
           if(chara.intersect(prizeB)){
             prizeB.removeEventListener('enterframe', event, false);
             game.rootScene.removeChild(prizeB);
              score1 = true
              win();
               }
       });
}
var score
var score1
function win(){

  if (score1==true && score==true){
    document.getElementById("showResult").innerHTML = "Clear or Pause the Disaster Movement";
    localStorage.answerA =content_script[5];
    localStorage.hintA =content_hint[5];
    fireGrowth();
    waterGrowth();
    mudGrowth();
    lighteningGrowth();

  }

}
