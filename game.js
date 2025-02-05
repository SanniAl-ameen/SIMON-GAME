var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];



//step 3
function nextSequence(){
  userClickedPattern = []
  var randomNumber = Math.floor(Math.random() * 4);
   var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

$('#' + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randomChosenColour);
  
  level++
  $('#level-title').text('Level ' + level) 

  
}

//step 4
$('.btn').click (function(){
  userChosenColor = $(this).attr("id")
  userClickedPattern.push(userChosenColor)
  playSound(userChosenColor);
  animatePress(userChosenColor)

  checkAnswer(userClickedPattern.length-1)
  
})


//step 5
function playSound(name){
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();

}

//step 6
function animatePress(currentColor){
  $('#' + currentColor).addClass('pressed')

  setTimeout( function() {
    $('#' + currentColor).removeClass('pressed');
  },100)
}

//step 7
start = false
level = 0
$(document).keypress(function(){
  if (!start){
    $('#level-title').text('Level ' + level)
  nextSequence()
  start = true
  }
  
})
  
//step 8
function checkAnswer(currentLevel){
  if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
    console.log('success');

    if (userClickedPattern.length === gamePattern.length){
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  }else {
    console.log('wrong')
    
    //step 9
    playSound('wrong')
    $('body').addClass('game-over')
    setTimeout(function(){
      $('body').removeClass('game-over')
    },200)
    $('#level-title').text('Game Over, Press Any Key to Restart')

    startOver();
    
  }
  }
  
  //step 10
  function startOver(){
    level = 0
    gamePattern = []
    start = false;
  }


  

