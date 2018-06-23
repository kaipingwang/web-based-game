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
  title: "moveY(enemy)"+'\n'+
         "shooting()",
  imageUrl: "cute.gif",
  imageSize:"300x300"
});
})
$('#hint').on('click', function() {
  swal({
  title: "moveY method",
  imageUrl: "fine.gif",
  imageSize:"300x300"
});
})
localStorage.text2 ="";
var editor = ace.edit("editor");
editor.setTheme("ace/theme/twilight");
editor.session.setMode("ace/mode/javascript");

  document.getElementById('run').onclick = function() {
var editorText =editor.getValue ("ace/mode/javascript");
  if (typeof(Storage) !== "undefined") {
   // Store
localStorage.text2 =editorText;
   // Retrieve
game.start();
}
};

function callback(text,enemy) {
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
//Class Definitions
// chara class
var chara = enchant.Class.create(enchant.Sprite, {
    initialize: function(x, y){
      enchant.Sprite.call(this, 62, 59);
      this.image = game.assets['bird.png'];
        this.x = x;
        this.y = y;
        this.frame = [28,29,30,31];
         if(this.y>280){
           this.y =280;
         }
        game.rootScene.addChild(this);
    }
});

//Enemy class
var Enemy = enchant.Class.create(enchant.Sprite, {
    initialize: function(x, y, theta){

          enchant.Sprite.call(this, 41, 40);
          this.image = game.assets['plane.png'];
          this.x = x;
          this.y = y;
          this.frame = [0,1,2,3];
        this.theta = theta * Math.PI / 180;
        this.direction = Math.PI;
        this.moveSpeed = 3;
          this.tl.moveTo(this.x, this.y,20)
        // Define enemy movement
		this.addEventListener('enterframe', function(){
			      this.direction += this.theta;
            this.x += this.moveSpeed * Math.cos(this.direction);
			      this.y += this.moveSpeed * Math.sin(this.direction);

            // Disappear when outside of screen
            if(this.y > 280 || this.x > 320 || this.x < -this.width || this.y < -this.height-30){
                this.remove();
            }else if(this.age % 35 === 0){ // Fire every 10 frames
                var s = new EnemyShoot(this.x, this.y);
            }

        });

		game.rootScene.addChild(this);
	},
    remove: function(){
        game.rootScene.removeChild(this);
        delete enemies[this.key];
        delete this;
    }
});

// Shoot class
var Shoot = enchant.Class.create(enchant.Sprite, {
    initialize: function(x, y, direction){
        enchant.Sprite.call(this, 16, 16);
        this.image = game.assets['icon0.png'];
        this.x = x+4;
        this.y = y+4;
        if (direction==0){
          this.frame = 54;
        }else{
          this.frame = 27;
        }

        this.direction = direction;
        this.moveSpeed = 5;
        this.addEventListener('enterframe', function(){ // Bullets fire straight in a pre-determined direction
            this.x += this.moveSpeed * Math.cos(this.direction);
            if(this.y > 320 || this.x > 320 || this.x < -this.width || this.y < -this.height){
                this.remove();
            }
        });
        game.rootScene.addChild(this);
    },
    remove: function(){
        game.rootScene.removeChild(this);
        delete this;
    }
});

// charaShoot class
var charaShoot = enchant.Class.create(Shoot, { // Succeeds bullet class
    initialize: function(x, y){
        Shoot.call(this, x, y, 0);
        this.addEventListener('enterframe', function(){
    		// Judges whether or not chara’s bullets have hit enemy
    		for(var i in enemies){
        		if(enemies[i].intersect(this)){
                    //Start Explosion
                    var blast = new Blast(enemies[i].x,enemies[i].y);
            		// Eliminates enemy if hit
            		this.remove();
            		enemies[i].remove();
            		//Adds to score
            		game.score += 100;
        		}
    		}
		});
    }
});

// Class for enemy bullets
var EnemyShoot = enchant.Class.create(Shoot, { // Succeeds bullet class
    initialize: function(x, y){
        Shoot.call(this, x, y, Math.PI);
        this.addEventListener('enterframe', function(){
            if(chara.within(this, 6)){     // Game Over if chara is hit by bullet
                game.life--;
                if(game.life<=0) {
                  var gameEnd = new Sprite(187, 98);
                  gameEnd.x= 60;
                  gameEnd.y= 130;
                  gameEnd.image = game.assets['end.png'];
                  game.rootScene.addChild(gameEnd);
                        game.stop()
                }
}
        });
    }
});

// Class for explosions
var Blast = enchant.Class.create(Sprite, {
    initialize: function(x, y){
        enchant.Sprite.call(this,16,16);
		this.x = x;
		this.y = y;
		this.image = game.assets['effect0.gif'];
        this.frame = 0;
        this.duration = 20;

        this.addEventListener('enterframe', function(){
            // Explosion animation
            this.frame = Math.floor(this.age/this.duration * 5);
            if(this.age == this.duration)this.remove();
        });
        game.rootScene.addChild(this);
    },
    remove: function() {
        game.rootScene.removeChild(this);
    }
});

// Background class
var Background = enchant.Class.create(enchant.Sprite, {
    initialize: function(){
        enchant.Sprite.call(this,640,320);
        this.x = 0;
        this.y = 0;
        this.image = game.assets['background.jpg'];

        this.addEventListener('enterframe', function(){
               this.x--; // Simple scrolling background
               if(this.x<=-320)
               {this.x=0

               };
        });
        game.rootScene.addChild(this);
    }
});



    game = new Core(320, 320);
    //Game Properties
    game.fps = 15;
    game.score = 0;
    game.preload('plane.png','background.jpg','effect0.gif','bird.png','end.png','jungle.jpg');
    game.onload = function() {
        //In-Game Variables and Properties
        background = new Background();
        game.life = 3;

        scoreLabel = new ScoreLabel(8, 8);
        game.rootScene.addChild(scoreLabel);
        chara = new chara(0, 152);

        enemies = [];
        // Display life
        lifeLabel = new MutableText(8, 320 - 32, game.width, "");
		    lifeLabel.addEventListener('enterframe', function(){
    		this.text = "LIFE " + "OOOOOOOOO".substring(0, game.life);
		});
        game.rootScene.addChild(lifeLabel);


        game.rootScene.addEventListener('enterframe', function(){
            if(rand(100)<6){
				// Make enemies appear randomly
				var y = rand(320);
				if (y < 160) {
					theta = 1;
				} else {
					theta = -1;
				}
        var enemy = new Enemy(320, y, theta);
				enemy.key = game.frame;
        enemies[game.frame] = enemy;
        if (enemy.y<280){
         callback(localStorage.text2,enemy);
        }
			  }
            scoreLabel.score = game.score;
        });


    };



function shooting(){
var s = new charaShoot(chara.x, chara.y);
}
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

var init=173
    function moveLeft(step){
      chara.speed=4;
      chara.addEventListener('enterframe',function funcLeft(){
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
