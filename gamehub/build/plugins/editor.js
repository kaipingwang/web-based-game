$('#run').on('click', function() {
  $(this).prop('disabled', true);
})
$('#stop').on('click', function() {
  location.reload();
})

$('#hint').on('click', function() {
  swal({
  title: "Answer Hint",
  text: "1.move_right/move_left 2.move_left/move_right 3.move_right/move_right 4.move_left/move_left",
  imageUrl: "https://thelovehawk.files.wordpress.com/2013/11/fairy-tale.jpg",
  imageSize:"150x100"
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


  enchant(); // initialize
      var game = new Core(320, 320); // game stage
      game.preload('oo.png'); // preload image
      game.fps = 10;

      game.onload = function(){
         var scene = new Scene();
          var bear = new Sprite(34,36);
          bear.image = game.assets['oo.png'];

          scene.addChild(bear);
          game.pushScene(scene);
           // select sprite frame
          bear.speed = 4;
          bear.x = (game.width + bear.width) / 2;
          bear.y = (game.height - bear.height)*0.7;
              scene.addEventListener('enterframe', function () {
                  // Move.
                  if (game.input.right ) {
                    bear.frame =[1,1,2,2,3,3,4,4];
                      bear.x += bear.speed;
                  } else if (game.input.left ) {
                    bear.frame =[9,9,10,10,11,11];
                      bear.x -= bear.speed;
                  }

                  // Check limits.
                  if (bear.x > game.width - bear.width) {
                      bear.x = game.width - bear.width;
                  } else if (bear.x < 0) {
                      bear.x = 0;
                  }
              });


      };
