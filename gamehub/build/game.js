
$('#stop').on('click', function() {
  location.reload();
});

$('#hint').on('click', function() {
  swal({
  title: "You need to collect six treasures to win the game \
          but you might meet monsters accidentally on the map\
          .You need to give the correct answer in order to\
          beat the monster",
  imageUrl: "https://yt3.ggpht.com/-E2JOWZf82_c/AAAAAAAAAAI/AAAAAAAAAAA/5TIL33FTKF0/s900-c-k-no-mo-rj-c0xffffff/photo.jpg",
  imageSize:"300x300"
});
})

$(".full").animate({
    opacity: 0
}, 100, function() {
        $(this).animate({
            opacity: 1
        }, 7000)
});
var script =false
var myTimer;
var countTime = 60;
var ques  =0

var failure
function call(index) {
  $(".answer-box").fadeIn('slow');
  $("#question-box").fadeIn('slow');
myCounter()
  var baseUrl = "http://localhost:3000/question"
  $.get(baseUrl, function searchCallback(data) {
    $('#question-box').empty();
    $('#answer0').empty();// clean the previous text on the element
    $('#answer1').empty();
    $('#answer2').empty();
    $('#answer3').empty();
    var arr = [];
    arr.push(data[index].answer1);
    arr.push(data[index].answer2);
    arr.push(data[index].answer3);
    arr.push(data[index].correctAnswer);
    arr.sort();// generate the random array
    $('#question-box').append("Q: " + data[index].question);
    $('#answer0').append((arr[0] == undefined ? "" : "A. " + arr[0]));// if the value of the element is undenfied, it does not show
    $('#answer1').append((arr[1] == undefined ? "" : "B. " + arr[1]));// on the screen (True or False)
    $('#answer2').append((arr[2] == undefined ? "" : "C. " + arr[2]));
    $('#answer3').append((arr[3] == undefined ? "" : "D. " + arr[3]));
  //the timer start from 60s
  stopCount();
  countTime = 60
    myTimer = setInterval(myCounter, 1000);// activate the Timer function
    for (i = 0; i < 4; i++) {
      if (arr[i] == data[index].correctAnswer) {// if it is correct answer, it sets the loop attribute
        $("#answer" + i).attr("correct", "correct");

      } else {
        $("#answer" + i).removeAttr("correct", "correct");
      }
    }

  });

};



$('#answer0').click(function() {
  check('#answer0');
});
$('#answer1').click(function() {
  check('#answer1');
});
$('#answer2').click(function() {
  check('#answer2');
});
$('#answer3').click(function() {
  check('#answer3');
});


function check(element) {

  if ($(element).attr("correct") == "correct") {// if there is an loop attribute, it must be the correct answer.
    stopCount();// clean the countdown in the timer element
   script=true;
   ques++
   $(".answer-box").fadeOut('slow');
   $("#question-box").fadeOut('slow');

 }else{
   script=false;
   $(".answer-box").fadeOut('slow');
   $("#question-box").fadeOut('slow');
   failure= true
 }
}





function myCounter() {
  countTime--;
  var timer = $("#clock").text(countTime + "s");// show the remaining time
  if (countTime == 0) {
    clearInterval(myTimer);

    return;
  }

}

function stopCount() {
  clearInterval(myTimer);// clear the myTimer
}



// the window start from this function





enchant();
    var block
    var game = new Core(320, 320);
    var label = new Label();

    game.fps = 15;
    game.preload('map1.gif', 'chara0.gif', 'avatarBg1.png','avatarBg2.png','avatarBg3.png','bigmonster1.gif','bigmonster2.gif','monster6.gif','monster7.gif','monster1.gif','monster2.gif','monster3.gif','ghost.gif',"win.png",
  'disaster.png');
    game.onload = function() {
        var map = new Map(16, 16);
        label.x = 100;
        label.y = 0;
        label.width = 170;
        label.height = 64;
        label.font = "19px 'Arial'";
        label.color = 'rgb(0,255,255)';

        map.image = game.assets['map1.gif'];
        map.loadData([
        [  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323, 323, 323, 323 ],
        [  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323, 323, 323, 323 ],
        [  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323, 323, 323, 323 ],
        [  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323, 323, 323, 323 ],
        [  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323, 323, 323, 323 ],
        [  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323, 323, 323, 323 ],
        [  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323, 323, 323, 323 ],
        [  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323, 323, 323, 323 ],
        [  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323, 323, 323, 323 ],
        [  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323, 323, 323, 323 ],
        [  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323, 323, 323, 323 ],
        [  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323, 323, 323, 323 ],
        [  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323, 323, 323, 323 ],
        [  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323, 323, 323, 323 ],
        [  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323, 323, 323, 323 ],
        [  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323, 323, 323, 323 ],
        [  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323, 323, 323, 323 ],
        [  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323, 323, 323, 323 ],
        [  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323, 323, 323, 323 ],
        [  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323, 323, 323, 323 ],
        [  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323, 323, 323, 323 ],
        [  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323, 323, 323, 323 ],
        [  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323, 323, 323, 323 ],
        [  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323, 323, 323, 323 ],
        [  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323, 323, 323, 323 ],
        [  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323, 323, 323, 323 ],
        [  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323, 323, 323, 323 ],
        [  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323, 323, 323, 323 ],
        [  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323, 323, 323, 323 ],
        [  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323, 323, 323, 323 ]
      ],[
          [  323,  323,  323,  323,  323,  520,  520,  520,  520,  520,  520, 520, 520,  520,  520,  520,  520,  520,  520,  520,  520,  520,  520,  520,  520,  520,  520,  520,  520,  520, 520, 520, 520 ],
          [  323,  323,  323,  323,  323,  323,  520,  520,  520,  520,  520, 520, 520,  520,  520,  520,  520,  520,  520,  520,  520,  520,  520,  520,  520,  520,  520,  520,  520,  520, 520, 520, 520 ],
          [  323,  323,  323,  323,  323,  323, 323,  5230,  520,  520, 520,  520,  520,  520,  520,  520, 520,  520,  520,  520, 520,  520,  520,  520,  520,  520,  520,  520,  520,  520, 520, 520, 520 ],
          [  323,  323,  323,  323,  323,  323, 323,   323,  520,  520, 520,  520,  520,  520,  520,  520, 520,  520,  520,  520, 520,  520,  520,  520,  520,  520,  520,  520,  520,  520, 520, 520, 520 ],
          [  323,  323,  323,  323,  323,  323, 323,   323,  323,  323, 520,  520,  520,  520,  520,  520, 520,  520,  520,  520, 520,  520,  520,  520,  520,  520,  520,  520,  520,  520, 520, 520, 520 ],
          [  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,   520,  323,  323,  323,  323,  323,  323,  323, 323, 323, 323 ],
          [  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323, 520,  323,  323,  323,  323,  323, 323, 323, 323 ],
          [  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  520,   520,  323,   520,   520,  323,  323,  323,  520,  323,  323, 323, 323, 323 ],
          [  323,  323,  323,  323,  323,  323,  323,  421,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,   520, 323,  323,  323,  323,  323,  323,  323,  520,  323, 323, 323, 323 ],
          [  323,  323,  323,  323,  323,  323,  421,  421,  421,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  520,   520,  323,  323,  520,  323,  323,  323,  323,  323, 323, 323, 323 ],
          [  323,  323,  323,  323,  323, 421,  421,  421,421,  421,  323,  323,  323,  323,  323,  323,  323,  323,  441,  323, 520,  323,  323,  323,  520,  323,  323,  323,  323,  323, 323, 323, 323 ],
          [  323,  323,  323,  421, 421,  421,  421, 421,  421,  421,  421,  323,  323,  323,  323,  441,  441,  441,  441,  323,  323,  323,  323,  323,  323, 520,  323,  323,  323,  323, 323, 323, 323 ],
          [  323,  323, 421,  421, 421,  421,  421,  421,  421,  421,  323,  323,  323,  323,  323,  441,  441,  441,  441,  323,  323,  520,  323,  323,  323,  323,  323,  323,  323,  323, 323, 323, 323 ],
          [  323,  323,  323,  421,  421,  421,  421, 421,  421,  421,  323,  323,  323,  323,  323,  441,  441,  441,  441,  323,  323,  323,  323,  323,  520,  323,  323,  323,  323,  323, 323, 323, 323 ],
          [  323,  323,  323,  421,  421,  421,  421,  421, 421, 421,  323,  323,  323,  323,  323,  323,  441,  441,  441,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323, 323, 323, 323 ],
          [  323,  323,  323,  323,  421,  421, 421,  421,  421,  421,  323,  323,  323,  461, 462,  323,  441,  441,  441,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323, 323, 323, 323 ],
          [  323,  323,  323,  323,  421, 421,  421,  421,  421,  421,  323,  323,  323,  481, 482, 323,  323,  323,  323,  461, 462, 323, 323,  323,  323,  323,  323,  323,  323,  323, 323, 323, 323 ],
          [  323,  323,  323,  323,  323,  323,  421,  421,  421,  421,  323,  323,  323,  461, 462,   461, 462,  461, 462,  481, 482, 323,  323,  323,  323,  323,  323,  323,  323,  323, 323, 323, 323 ],
          [  323,  323,  323,  323,  323,  323,  323,  323,  421,  323,  323,  323,  323,  481, 482, 481, 482,  481, 482,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323, 323, 323, 323 ],
          [  323,  323,  323,  323,  323,  323,  323,  323,  323,  421,  323,  323,  323,  323,  323,  461, 462,  461, 462,  323,  421,  323,  323,  323,  323,  461, 462, 323,  323,  323, 323, 323, 323 ],
          [  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  481, 482,  481, 482,  323,  323,  323,  323,  323,  323,  481, 482,  323,  323,  323, 323, 323, 323 ],
          [  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  461, 462,   323,  323,  323,  461, 462,  461, 462,  323,  323,  323,  323,  323,  323, 323, 323, 323 ],
          [  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  481, 482, 323,  323,  323,  481, 482,  481, 482,  323,  323,  323,  323,  323,  323, 323, 323, 323 ],
          [  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  461, 462,  461, 462,  323,  323,  323,  323,  323,  323, 323, 323, 323 ],
          [  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  481, 482,  481, 482,  323,  323,  323,  323,  323,  323, 323, 323, 323 ],
          [  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  461, 462, 323,  323,  323,  323,  323,  461, 462,  323,  323,  323, 323, 323, 323 ],
          [  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323, 481, 482,  323,  323,  323,  323,  323,  481, 482,  323,  323,  323, 323, 323, 323 ],
          [  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  461, 462,  461, 462, 323,  323,  323,  323,  323,  323,  323,  323,  323,  323, 323, 323, 323 ],
          [  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  481, 482,  481, 482,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323, 323, 323, 323 ],
          [  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323, 323, 323, 323 ],
          [  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323,  323, 323, 323, 323 ]
        ]);

        map.collisionData = [
            [  0,  0,  0,  0,  0,  1,  1,  1,  1,  1,  1, 1, 1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1, 1, 1, 1 ],
            [  0,  0,  0,  0,  0,  0,  1,  1,  1,  1,  1, 1, 1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1, 1, 1, 1 ],
            [  0,  0,  0,  1,  0,  0, 0,  1,  1,  1, 1,  1,  1,  1,  1,  1, 1,  1,  1,  1, 1,  1,  1,  1,  1,  1,  1,  1,  1,  1, 1, 1, 1 ],
            [  0,  0,  0,  0,  0,  0, 0,   0,  1,  1, 1,  1,  1,  1,  1,  1, 1,  1,  1,  1, 1,  1,  1,  1,  1,  1,  1,  1,  1,  1, 1, 1, 1 ],
            [  0,  0,  0,  0,  0,  0, 0,   0,  0,  0, 1,  1,  1,  1,  1,  1, 1,  1,  1,  1, 1,  1,  1,  1,  1,  1,  1,  1,  1,  1, 1, 1, 1 ],
            [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,   1,  0,  0,  0,  0,  0,  0,  0, 0, 0, 0 ],
            [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 1,  0,  0,  0,  0,  0, 0, 0, 0 ],
            [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,   1,  0,   1,   1,  0,  0,  0,  1,  0,  0, 0, 0, 0 ],
            [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,   1, 0,  0,  0,  0,  0,  0,  1,  1,  0, 0, 0, 0 ],
            [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,   1,  0,  0,  1,  0,  0,  0,  0,  0, 0, 0, 0 ],
            [  0,  0,  0,  0,  0, 0,  0,  0,0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 1,  0,  0,  0,  1,  0,  0,  0,  0,  0, 0, 0, 0 ],
            [  0,  0,  0,  0, 0,  0,  0, 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 1,  0,  0,  0,  0, 0, 0, 0 ],
            [  0,  0, 0,  0, 0,  0,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0,  0, 0, 0, 0 ],
            [  0,  0,  0,  0,  0,  0,  0, 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0, 0, 0, 0 ],
            [  0,  0,  0,  0,  0,  0,  0,  0, 0, 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 0, 0, 0 ],
            [  0,  0,  0,  0,  0,  0, 0,  0,  0,  0,  0,  0,  0,  1, 1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 0, 0, 0 ],
            [  0,  0,  0,  0,  0, 0,  0,  0,  0,  0,  0,  0,  0,  1, 1, 0,  0,  0,  0,  1, 1, 0, 0,  0,  0,  0,  0,  0,  0,  0, 0, 0, 0 ],
            [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1, 1,   1, 1,  1, 1,  1, 1, 0,  0,  0,  0,  0,  0,  0,  0,  0, 0, 0, 0 ],
            [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1, 1, 1, 1,  1, 1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 0, 0, 0 ],
            [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1, 1,  1, 1,  0,  0,  1,  0,  0,  0,  1, 1, 0,  0,  0, 0, 0, 0 ],
            [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1, 1,  1, 1,  0,  0,  0,  0,  0,  0,  1, 1,  0,  0,  0, 0, 0, 0 ],
            [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1, 1,   0,  0,  0,  1, 1,  1, 1,  0,  0,  0,  0,  0,  0, 0, 0, 0 ],
            [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1, 1, 0,  0,  0,  1, 1,  1, 1,  0,  0,  0,  0,  0,  0, 0, 0, 0 ],
            [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1, 1,  1, 1,  0,  0,  0,  0,  0,  0, 0, 0, 0 ],
            [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1, 1,  1, 1,  0,  1,  0,  0,  0,  0, 0, 0, 0 ],
            [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1, 1, 0,  0,  0,  0,  0,  1, 1,  0,  0,  0, 0, 0, 0 ],
            [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 1, 1,  0,  0,  0,  0,  0,  1, 1,  0,  0,  0, 0, 0, 0 ],
            [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1, 1,  1, 1, 0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 0, 0, 0 ],
            [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1, 1,  1, 1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 0, 0, 0 ],
            [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 0, 0, 0 ],
            [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 0, 0, 0 ]
          ];
          var   score = ""
          var   score1 = ""
          var   score2 = ""
          var   score3 = ""
          var   score4 = ""
          var   score5 = ""
          var treasure = new Sprite(16, 16);
          var moveBlock=true
          treasure.x = 96;
          treasure.y = 191

          treasure.image =game.assets['map1.gif'];
          treasure.frame=420

          var treasure1 = new Sprite(16, 16);
          treasure1.x = 48;
          treasure1.y = 31
          treasure1.image =game.assets['map1.gif'];
          treasure1.frame=420

          var treasure2 = new Sprite(16, 16);
          treasure2.x = 160;
          treasure2.y = 460;
          treasure2.image =game.assets['map1.gif'];
          treasure2.frame=420

          var treasure3 = new Sprite(16, 16);
          treasure3.x = 432;
          treasure3.y = 127;
          treasure3.image =game.assets['map1.gif'];
          treasure3.frame=420

          var treasure4 = new Sprite(16, 16);
          treasure4.x = 336;
          treasure4.y = 303;
          treasure4.image =game.assets['map1.gif'];
          treasure4.frame=420

          var treasure5 = new Sprite(16, 16);
          treasure5.x = 400;
          treasure5.y = 385;
          treasure5.image =game.assets['map1.gif'];
          treasure5.frame=420

        var player = new Sprite(32, 32);
        player.x = 10 * 16 - 8;
        player.y = 10 * 16;
        var image = new Surface(96, 128);
        image.draw(game.assets['chara0.gif'], 9, 5, 96, 128, 9, 5, 96, 128);
        player.image = image;
        player.isMoving = false;
        player.direction = 0;
        player.walk = 1;
        player.addEventListener('enterframe', function() {

            this.frame = this.direction * 3 + this.walk;
            if (this.isMoving) {
                this.moveBy(this.vx, this.vy);

                if (!(game.frame % 3)) {
                    this.walk++;
                    this.walk %= 3;
                }
                if ((this.vx && (this.x-8) % 16 == 0) || (this.vy && this.y % 16 == 0)) {
                    this.isMoving = false;
                    this.walk = 1;
                }
            } else {


                this.vx = this.vy = 0;
                if (block) {

                 this.vx = -2

                    block =false
                }


                if (game.input.left&&!block) {
                    this.direction = 1;
                    this.vx = -4;
                } else if (game.input.right&&!block) {
                    this.direction = 2;
                    this.vx = 4;
                } else if (game.input.up&&!block) {
                    this.direction = 3;
                    this.vy = -4;
                } else if (game.input.down&&!block) {
                    this.direction = 0;
                    this.vy = 4;
                }
                if (this.vx || this.vy) {
                    var x = this.x + (this.vx ? this.vx / Math.abs(this.vx) * 16 : 0) + 16;
                    var y = this.y + (this.vy ? this.vy / Math.abs(this.vy) * 16 : 0) + 16;

                    if (0 <= x && x < map.width && 0 <= y && y < map.height && !map.hitTest(x, y)) {
                        this.isMoving = true;
                        arguments.callee.call(this);
                    }

                }

                if(this.within(treasure, 25)){
                  treasure.frame =421;
                    score = true
                }else if (this.within(treasure1, 25)){
                  treasure1.frame =323;
                    score1 = true
                }else if (this.within(treasure2, 25)){
                  treasure2.frame =323;
                   score2 = true
                }else if (this.within(treasure3, 25)){
                  treasure3.frame =323;
                  score3 = true
                }else if (this.within(treasure4, 25)){
                   treasure4.frame =323;
                   score4 = true
                }else if (this.within(treasure5, 25)){
                   treasure5.frame =323;
                 score5 = true
                }



      if (((this.x== 104)&&(this.y== 160))||((this.x== 72)&&(this.y== 192))||((this.x== 88)&&(this.y== 176)) ||((this.x== 136)&&(this.y== 176))){
block =true
        monster();
      } else if (((this.x== 40)&&(this.y== 48))||((this.x== 72)&&(this.y== 64))||((this.x== 40)&&(this.y== 32)) ||((this.x== 72)&&(this.y== 48))){
block =true
        monster1();

      } else if (((this.x== 424)&&(this.y== 128))||((this.x== 424)&&(this.y== 144))||((this.x== 424)&&(this.y== 114)) ||((this.x== 408)&&(this.y== 112))){
block =true
        monster2();
      } else if (((this.x== 328)&&(this.y== 304))||((this.x== 328)&&(this.y== 272))||((this.x== 372)&&(this.y== 288)) ||((this.x== 376)&&(this.y== 304))){
block =true
        monster3();
      }else if(((this.x== 392)&&(this.y== 352))||((this.x== 408)&&(this.y== 353))||((this.x== 424)&&(this.y== 320)) ||((this.x== 424)&&(this.y== 352))){
block =true
        monster4();
      }else if(((this.x== 132)&&(this.y== 432))||((this.x== 144)&&(this.y== 416))||((this.x== 152)&&(this.y== 432)) ||((this.x== 184)&&(this.y== 432))){
block =true
        monster5();
      }else if(((this.x== 248)&&(this.y== 208))||((this.x== 280)&&(this.y== 176))||((this.x== 264)&&(this.y== 224)) ||((this.x== 280)&&(this.y== 208))){
block =true
        monster6();
      }
            } //console.log([this.x,this.y])

     if (score===true && score1===true && score2===true && score3===true &&score4===true &&score5===true){
         $("#stop").fadeOut('slow');
         $("#hint").fadeOut('slow');
       game.rootScene.addEventListener('enterframe', function() {
         var gameEnd = new Sprite(320, 320);
             gameEnd.image = game.assets['ghost.gif'];
           game.rootScene.addChild(gameEnd);
           label.text = "score: "+ques+" points";
           game.rootScene.addChild(label);
         });

        game.stop();

       }});

        var stage = new Group();
        stage.addChild(map);
        stage.addChild(player);
        stage.addChild(treasure);
        stage.addChild(treasure1);
        stage.addChild(treasure2);
        stage.addChild(treasure3);
        stage.addChild(treasure4);
        stage.addChild(treasure5);
        game.rootScene.addChild(stage);

        var pad = new Pad();
        pad.x = 0;
        pad.y = 220;
        game.rootScene.addChild(pad);

        game.rootScene.addEventListener('enterframe', function(e) {
            var x = Math.min((game.width  - 16) / 2 - player.x, 0);
            var y = Math.min((game.height - 16) / 2 - player.y, 0);
            x = Math.max(game.width,  x + map.width)  - map.width;
            y = Math.max(game.height, y + map.height) - map.height;
            stage.x = x;
            stage.y = y;
        });

        var monsterStatus = {
            hp: 2000,
        }
        var charStatus = {
            hp: 10000,
        }


        function monster(){
          var number =Math.floor((Math.random() * 2));
             console.log(number)
          call(number);
            var bg =new AvatarBG(1);
            bg.y=50;

            var pLabel = new Label();
            pLabel.color = '#FFFFFF';    // 文字色
            pLabel.x = 0;                // x座標
            pLabel.y = -200;             // y座標
            pLabel.text = "HP:"+monsterStatus.hp;            // 初期表示する文字列

            var cLabel = new Label();
            cLabel.color = '#FFFFFF';    // 文字色
            cLabel.x = 0;                // x座標
            cLabel.y = -200;
            cLabel.text = "HP:"+charStatus.hp;

            var monster = new AvatarMonster(game.assets['bigmonster1.gif']);
            monster.x=170;
            monster.y=150;

            pLabel.x = monster.x + 16;
            pLabel.y = monster.y - 16;


            var chara = new Avatar("2:2:3:2514:21350:2199");

            game.rootScene.addChild(bg);
            game.rootScene.addChild(pLabel);
            game.rootScene.addChild(monster);
            game.rootScene.addChild(chara);
            game.rootScene.addChild(cLabel);
            chara.action ="run"
            chara.scaleX=-1;
            chara.scaleY=1;
            chara.x=14;
            chara.y=100;
            chara.vx=6;
            chara.vy=3;
            cLabel.x =chara.x + 16;
            cLabel.y =chara.y - 16;
            chara.addEventListener('enterframe',function(){
              if(script&&countTime>50){
                monster.tl.pause()
                specialAttack(chara,bg,pLabel,cLabel,monster);
              }else if (script){
                    attack(chara,bg,pLabel,cLabel,monster);
              }else{
                monsterStatus.hp=2000
              dead(chara,bg,pLabel,cLabel,monster);
              }

            });

          }

          function monster1(){
             var number =Math.floor((Math.random() * 2) + 2);
             call(number);
              var bg =new AvatarBG(2);
              bg.y=50;

              var pLabel = new Label();
              pLabel.color = '#FFFFFF';    // 文字色
              pLabel.x = 0;                // x座標
              pLabel.y = -200;             // y座標
              pLabel.text = "HP:"+monsterStatus.hp;            // 初期表示する文字列

              var cLabel = new Label();
              cLabel.color = '#FFFFFF';    // 文字色
              cLabel.x = 0;                // x座標
              cLabel.y = -200;
              cLabel.text = "HP:"+charStatus.hp;


              var monster = new AvatarMonster(game.assets['bigmonster2.gif']);
              monster.x=170;
              monster.y=150;

              pLabel.x = monster.x + 16;
              pLabel.y = monster.y - 16;


              var chara = new Avatar("2:2:3:2514:21350:2199");
              game.rootScene.addChild(bg);
              game.rootScene.addChild(pLabel);
              game.rootScene.addChild(monster);
              game.rootScene.addChild(chara);
              game.rootScene.addChild(cLabel);
              chara.action ="run"
              chara.scaleX=-1;
              chara.scaleY=1;
              chara.x=14;
              chara.y=100;
              chara.vx=6;
              chara.vy=3;
              cLabel.x =chara.x + 16;
              cLabel.y =chara.y - 16;
              chara.addEventListener('enterframe',function(){
                if(script&&countTime>50){
                  monster.tl.pause()
                  specialAttack(chara,bg,pLabel,cLabel,monster);
                }else if (script){

                      attack(chara,bg,pLabel,cLabel,monster);
                }else{
                  monsterStatus.hp=2000
                dead(chara,bg,pLabel,cLabel,monster);
                }
              });

            }
            function monster2(){
              var number =Math.floor((Math.random() * 2) + 4);
              call(number);
                var bg =new AvatarBG(0);
                bg.y=50;

                var pLabel = new Label();
                pLabel.color = '#FFFFFF';    // 文字色
                pLabel.x = 0;                // x座標
                pLabel.y = -200;             // y座標
                pLabel.text ="HP:"+ monsterStatus.hp;            // 初期表示する文字列

                var cLabel = new Label();
                cLabel.color = '#FFFFFF';    // 文字色
                cLabel.x = 0;                // x座標
                cLabel.y = -200;
                cLabel.text = "HP:"+charStatus.hp;

                var monster = new AvatarMonster(game.assets['monster1.gif']);
                monster.x=170;
                monster.y=150;

                pLabel.x = monster.x + 16;
                pLabel.y = monster.y - 16;


                var chara = new Avatar("2:2:3:2514:21350:2199");
                game.rootScene.addChild(bg);
                game.rootScene.addChild(pLabel);
                game.rootScene.addChild(monster);
                game.rootScene.addChild(chara);
                game.rootScene.addChild(cLabel);
                chara.action ="run"
                chara.scaleX=-1;
                chara.scaleY=1;
                chara.x=14;
                chara.y=100;
                chara.vx=6;
                chara.vy=3;
                cLabel.x =chara.x + 16;
                cLabel.y =chara.y - 16;
                chara.addEventListener('enterframe',function(){
                  if(script&&countTime>50){
                    monster.tl.pause()
                    specialAttack(chara,bg,pLabel,cLabel,monster);
                  }else if (script){
                        attack(chara,bg,pLabel,cLabel,monster);
                  }else{
                    monsterStatus.hp=2000
                  dead(chara,bg,pLabel,cLabel,monster);
                  }
                });

              }
              function monster3(){
                var number =Math.floor((Math.random() * 2) + 6);
                call(number);
                  var bg =new AvatarBG(4);
                  bg.y=50;

                  var pLabel = new Label();
                  pLabel.color = '#FFFFFF';    // 文字色
                  pLabel.x = 0;                // x座標
                  pLabel.y = -200;             // y座標
                  pLabel.text = "HP:"+monsterStatus.hp;            // 初期表示する文字列

                  var cLabel = new Label();
                  cLabel.color = '#FFFFFF';    // 文字色
                  cLabel.x = 0;                // x座標
                  cLabel.y = -200;
                  cLabel.text = "HP:"+charStatus.hp;

                  var monster = new AvatarMonster(game.assets['monster2.gif']);
                  monster.x=170;
                  monster.y=150;

                  pLabel.x = monster.x + 16;
                  pLabel.y = monster.y - 16;


                  var chara = new Avatar("2:2:3:2514:21350:2199");
                  game.rootScene.addChild(bg);
                  game.rootScene.addChild(pLabel);
                  game.rootScene.addChild(monster);
                  game.rootScene.addChild(chara);
                  game.rootScene.addChild(cLabel);
                  chara.action ="run"
                  chara.scaleX=-1;
                  chara.scaleY=1;
                  chara.x=14;
                  chara.y=100;
                  chara.vx=6;
                  chara.vy=3;
                  cLabel.x =chara.x + 16;
                  cLabel.y =chara.y - 16;
                  chara.addEventListener('enterframe',function(){
                    if(script&&countTime>50){
                      monster.tl.pause()
                      specialAttack(chara,bg,pLabel,cLabel,monster);
                    }else if (script){
                          attack(chara,bg,pLabel,cLabel,monster);
                    }else{
                      monsterStatus.hp=2000
                    dead(chara,bg,pLabel,cLabel,monster);
                    }
                  });

                }
                function monster4(){
                  var number =Math.floor((Math.random() * 2) + 8);
                  call(number);
                    var bg =new AvatarBG(1);
                    bg.y=50;

                    var pLabel = new Label();
                    pLabel.color = '#FFFFFF';    // 文字色
                    pLabel.x = 0;                // x座標
                    pLabel.y = -200;             // y座標
                    pLabel.text ="HP:"+ monsterStatus.hp;            // 初期表示する文字列

                    var cLabel = new Label();
                    cLabel.color = '#FFFFFF';    // 文字色
                    cLabel.x = 0;                // x座標
                    cLabel.y = -200;
                    cLabel.text = "HP:"+charStatus.hp;

                    var monster = new AvatarMonster(game.assets['monster3.gif']);
                    monster.x=170;
                    monster.y=150;

                    pLabel.x = monster.x + 16;
                    pLabel.y = monster.y - 16;


                    var chara = new Avatar("2:2:3:2514:21350:2199");
                    game.rootScene.addChild(bg);
                    game.rootScene.addChild(pLabel);
                    game.rootScene.addChild(monster);
                    game.rootScene.addChild(chara);
                    game.rootScene.addChild(cLabel);
                    chara.action ="run"
                    chara.scaleX=-1;
                    chara.scaleY=1;
                    chara.x=14;
                    chara.y=100;
                    chara.vx=6;
                    chara.vy=3;
                    cLabel.x =chara.x + 16;
                    cLabel.y =chara.y - 16;
                    chara.addEventListener('enterframe',function(){
                      if(script&&countTime>50){
                        monster.tl.pause()
                        specialAttack(chara,bg,pLabel,cLabel,monster);
                      }else if (script){
                            attack(chara,bg,pLabel,cLabel,monster);
                      }else{
                     monsterStatus.hp=2000
                      dead(chara,bg,pLabel,cLabel,monster);
                      }
                    });

                  }
                  function monster5(){
                    var number =Math.floor((Math.random() * 2) + 10);
                    call(number);
                      var bg =new AvatarBG(5);
                      bg.y=50;

                      var pLabel = new Label();
                      pLabel.color = '#FFFFFF';    // 文字色
                      pLabel.x = 0;                // x座標
                      pLabel.y = -200;             // y座標
                      pLabel.text = "HP:"+monsterStatus.hp;            // 初期表示する文字列

                      var cLabel = new Label();
                      cLabel.color = '#FFFFFF';    // 文字色
                      cLabel.x = 0;                // x座標
                      cLabel.y = -200;
                      cLabel.text = "HP:"+charStatus.hp;

                      var monster = new AvatarMonster(game.assets['monster6.gif']);
                      monster.x=170;
                      monster.y=150;

                      pLabel.x = monster.x + 16;
                      pLabel.y = monster.y - 16;


                      var chara = new Avatar("2:2:3:2514:21350:2199");
                      game.rootScene.addChild(bg);
                      game.rootScene.addChild(pLabel);
                      game.rootScene.addChild(monster);
                      game.rootScene.addChild(chara);
                      game.rootScene.addChild(cLabel);
                      chara.action ="run"
                      chara.scaleX=-1;
                      chara.scaleY=1;
                      chara.x=14;
                      chara.y=100;
                      chara.vx=6;
                      chara.vy=3;
                      cLabel.x =chara.x + 16;
                      cLabel.y =chara.y - 16;
                      chara.addEventListener('enterframe',function(){
                        if(script&&countTime>50){
                          monster.tl.pause()
                          specialAttack(chara,bg,pLabel,cLabel,monster);
                        }else if (script){
                              attack(chara,bg,pLabel,cLabel,monster);
                        }else{
                        monsterStatus.hp=2000
                        dead(chara,bg,pLabel,cLabel,monster);
                        }


                      });

                    }
                    function monster6(){
                      var number =Math.floor((Math.random() * 2) + 12);
                      call(number);
                        var bg =new AvatarBG(3);
                        bg.y=50;

                        var pLabel = new Label();
                        pLabel.color = '#FFFFFF';    // 文字色
                        pLabel.x = 0;                // x座標
                        pLabel.y = -200;             // y座標
                        pLabel.text = "HP:"+monsterStatus.hp;            // 初期表示する文字列

                        var cLabel = new Label();
                        cLabel.color = '#FFFFFF';    // 文字色
                        cLabel.x = 0;                // x座標
                        cLabel.y = -200;
                        cLabel.text = "HP:"+charStatus.hp;

                        var monster = new AvatarMonster(game.assets['monster7.gif']);
                        monster.x=170;
                        monster.y=150;
                        pLabel.x = monster.x + 16;
                        pLabel.y = monster.y - 16;


                        var chara = new Avatar("2:2:3:2514:21350:2199");
                        game.rootScene.addChild(bg);
                        game.rootScene.addChild(pLabel);
                        game.rootScene.addChild(monster);
                        game.rootScene.addChild(chara);
                        game.rootScene.addChild(cLabel);
                        chara.action ="run"
                        chara.scaleX=-1;
                        chara.scaleY=1;
                        chara.x=14;
                        chara.y=100;
                        chara.vx=6;
                        chara.vy=3;
                        cLabel.x =chara.x + 16;
                        cLabel.y =chara.y - 16;
                        chara.addEventListener('enterframe',function(){
                          if(script&&countTime>50){
                            monster.tl.pause()
                            specialAttack(chara,bg,pLabel,cLabel,monster);
                          }else if (script){
                                attack(chara,bg,pLabel,cLabel,monster);
                          }else{
                            monsterStatus.hp=2000
                          dead(chara,bg,pLabel,cLabel,monster);
                          }

                        });

                      }

                      function attack(chara,bg,pLabel,cLabel,monster){
                        monsterStatus.hp -=10
                        chara.tl.moveTo(120,150,3).then(function(){
                        chara.action = 'special';
                        pLabel.text = (monsterStatus.hp <= 0) ? "HP:"+0:"HP:"+monsterStatus.hp ;


                      });

                      chara.tl.delay(28).moveTo(14,100,3).delay(20).then(function(){
                      chara.tl.clear()});
                      monster.tl.delay(20).fadeTo(0, 2).fadeTo(1, 2).fadeTo(0, 2).fadeTo(1, 2).delay(40).fadeTo(0, 2).fadeTo(1, 2).delay(40).fadeTo(0, 2).fadeTo(1, 2).fadeTo(0, 2).fadeTo(1, 2)
                                .delay(40).fadeTo(0, 2).fadeTo(1, 2).fadeTo(0, 2).fadeTo(1, 2).then(function(){
                      game.rootScene.removeChild(pLabel);
                      monster.action="disappear";
                      monster.death = true;
                      chara.tl.pause();
                       setTimeout(removeFunc,3700);

                       })

                      function removeFunc(){
                            script =false
                            game.rootScene.removeChild(chara);
                            game.rootScene.removeChild(bg);
                            monsterStatus.hp=2000
                            game.rootScene.removeChild(cLabel);
                            game.rootScene.removeChild(monster);
                            block =false

                      }
                      }

  function specialAttack(chara,bg,pLabel,cLabel,monster){
    var Mblood =monsterStatus.hp -2000
var energy = new Sprite(32,32);
    energy.x = 20;
    energy.y = 55;
    energy.image = game.assets['disaster.png'];
    energy.frame = 65;
    game.rootScene.addChild(energy);
    chara.tl.moveTo(80,150,4).delay(8).then(function(){
    chara.action = 'attack';
    pLabel.text = (Mblood <= 0) ? "HP:"+0: "HP:"+Mblood;
  });
  chara.tl.moveTo(250,160,7).delay(20).moveTo(14,100,3).then(function(){
  chara.tl.pause()});
  energy.addEventListener(Event.ENTER_FRAME, function event() {
     game.rootScene.removeChild(energy);
  })

  monster.tl.resume().fadeTo(0, 2).fadeTo(1, 2).fadeTo(0, 2).fadeTo(1, 2).delay(10).then(function(){
  game.rootScene.removeChild(pLabel);
  monster.action="disappear";
  monster.death = true;

   setTimeout(removeFunc,2500);
 })
  function removeFunc(){
        script =false
        game.rootScene.removeChild(chara);
        game.rootScene.removeChild(bg);

        game.rootScene.removeChild(cLabel);
        game.rootScene.removeChild(monster);

        block =false

  }


       }

function dead(chara,bg,pLabel,cLabel,monster){

  charStatus.hp --
  monster.tl.delay(60).moveTo(68,95,3).then(function(){
  monster.action = 'attack'
  chara.action = "damage";

  cLabel.text = "HP:"+charStatus.hp
  chara.tl.fadeTo(0, 2).fadeTo(1, 2).then(function(){chara.tl.clear()})
})
 monster.tl.delay(20).moveTo(170,150,3).then(function(){monster.tl.clear()})
 if(failure){
   setTimeout(removeFunc,2000);
  var blood = charStatus.hp-200
   cLabel.text = "HP:"+blood
   chara.action = 'dead'
   }
function removeFunc(){
  game.rootScene.removeChild(chara);
  game.rootScene.removeChild(bg);
  game.rootScene.removeChild(pLabel);
  game.rootScene.removeChild(cLabel);
  game.rootScene.removeChild(monster);
    failure= false;
    block =false
}
}


}
game.start();
