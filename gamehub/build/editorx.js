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
  title: "moveTo(bear)"+'\n'+
         "hit()",
  imageUrl: "cute.gif",
  imageSize:"300x300"
});
})
$('#hint').on('click', function() {
  swal({
  title: "hit method",
  imageUrl: "fine.gif",
  imageSize:"300x300"
});
})
localStorage.text12 ="";

var editor = ace.edit("editor");
editor.setTheme("ace/theme/twilight");
editor.session.setMode("ace/mode/javascript");

  document.getElementById('run').onclick = function() {
var editorText =editor.getValue ("ace/mode/javascript");
  if (typeof(Storage) !== "undefined") {
   // Store
localStorage.text12 =editorText;
game.start();
   // Retrieve

}
};

function callback(text,bear) {
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
var show = false;
maxDroid = 30;
var hitPoint =false
var Player= enchant.Class.create(enchant.Sprite, {
    initialize: function(){
        enchant.Sprite.call(this,55,55);
        this.x = 150;
        this.y = 230;
        this.frame = [0,0,1,1,2,2];
        this.image = game.assets['heroBird.png'];
        game.rootScene.addChild(this);
    }
});

var Background = enchant.Class.create(enchant.Sprite, {
    initialize: function(){
        enchant.Sprite.call(this,320,320);
        this.x = 0;
        this.y = 0;
        this.image = game.assets['grass.png'];
        game.rootScene.addChild(this);
    }
});


//穴クラスの定義
Pit = Class.create(Sprite,{ //Spriteクラスを継承する
	initialize:function(x,y){
		enchant.Sprite.call(this,48,48); //Spriteクラスのコンストラクタ呼び出し
		this.image = game.assets['mogura.png'];
		this.x = x;
		this.y = y;
		this.addEventListener('enterframe',this.tick); //イベントリスナーを定義
		this.mode = 2; //ドロイド君の出現モードを待つ、からに設定
		this.nextMode = 0;
		this.waitFor =  game.frame+Math.floor(Math.random()*200+100);

	},
	tick:function(){ //ドロイド君が出るアニメーションを繰り返す
		if(game.frame%2!=0)return; //4フレームごとに実行する
    if(this.frame>=1){
      if(player.within(this, 10)){
      this.frame =2;
      hitPoint =true
    }}
		switch(this.mode){
			case 0: //穴からドロイド君がでてくる
				this.frame++;
				if(this.frame>=1){
					this.mode=2; 	//出切ったら、待つモードへ
					this.nextMode=1;//待った後に遷移するモードは1(隠れる)
					this.waitFor = game.frame+Math.floor(Math.random()*60);
          var bear = this
          callback(localStorage.text12,bear)


				}
				break;
			case 1://ドロイド君が穴に隠れる
				this.frame--;
				if(this.frame<=0){
					this.mode=2; 	//出切ったら、待つモードへ
					this.nextMode=0;//待った後に遷移するモードは0(出現)
					this.waitFor = game.frame+Math.floor(Math.random()*200+200);

					//ドロイド君の最大数を減らす
					maxDroid--;
					//もしこれ以上ドロイド君は出現しないなら、穴を塞ぐ
					if(maxDroid<=0)this.mode=3;
				}
				break;
			case 2://待つ
				if(game.frame>this.waitFor){
					this.mode = this.nextMode;
				}
				break;
			case 3://なにもしない(この穴からもうドロイド君は出ない)
        game.end()
				break;
		}
	}
});
//ScoreLabelクラスの定義
ScoreLabel = Class.create(Label,{ //Labelクラスを継承する
	initialize:function(x,y){
		enchant.Label.call(this,"SCORE:0");
    this.font = "20px 'Arial'";
    this.color = 'rgb(0,400,255)';
		this.x=x;
		this.y=y;
		this.score = 0;
	},
	add:function(pts){ //スコアを加算
		this.score+=pts;
		this.text="SCORE:"+this.score; //表示を修正
	}
});


function hit(){
  player.tl.then(function(){
  player.frame=[3,3,3,3,4,4,4,4,5,5,5,5];
  if(hitPoint){
scoreLabel.add(1);
  hitPoint =false
  }



  });
}



	game = new Game(320, 320);
	game.preload('mogura.png','grass.png','heroBird.png');
	game.onload = function(){
  background = new Background();
	scoreLabel=new ScoreLabel(5,5);
	game.rootScene.addChild(scoreLabel);

		for(y=0;y<4;y=y+1.5){
			for(x=0;x<6;x=x+1.5){
				var pit = new Pit(x*48+20,y*48+20);
				game.rootScene.addChild(pit);
			}

		}
    player = new Player();



    }
    function moveTo(name){
    player.tl.moveTo(name.x, name.y,5)
  }
    function moveX(name){
    player.tl.moveTo(name.x, player.y,5)
    }
    function moveY(name){
    player.tl.moveTo(player.x, name.y,5)
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



var init=88
var iniY=160
    function moveLeft(step){
      player.direction = 1;
      player.speed=2;
      player.addEventListener('enterframe',function funcLeft(){
      player.x -= player.speed;
            if (player.x <= 0) {
                player.x = 0;
            }else if (player.x <init-2*step) {
              init=player.x;
                player.speed=0;
                player.removeEventListener('enterframe', funcLeft, false);
              }
          });
      };

function moveRight(step){
  player.direction = 2;
        player.speed=2;
        player.addEventListener('enterframe',function funcRight(){
          player.x += player.speed;
      if (player.x > game.width - player.width) {
          player.x = game.width - player.width;
      } else if (player.x < 0) {
          player.x = 0;
      }else if (player.x >init+2*step) {
        init=player.x;
          player.speed=0
          player.removeEventListener('enterframe', funcRight, false);
      }
    });
};

function moveUp(step){
  player.direction = 3;
  player.speed=2;
  player.addEventListener('enterframe',function funcUp(){
  player.y -= player.speed;
        if (player.y <= 0) {
            player.y = 0;
        }else if (player.y <iniY-2*step) {
          iniY=player.y;
            player.speed=0;
            player.removeEventListener('enterframe', funcUp, false);
          }
      });
  };

  function moveDown(step){
    player.direction = 0;
    player.speed=2;
    player.addEventListener('enterframe',function funcDown(){
    player.y += player.speed;
          if (player.y > game.height - player.height) {
              player.y = game.height - player.height;
          }else if (player.y >iniY+2*step) {
            iniY=player.y;
              player.speed=0;
              player.removeEventListener('enterframe', funcDown, false);
            }
        });
    };
