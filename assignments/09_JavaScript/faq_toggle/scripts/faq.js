console.log('hello world')

$('.answer').hide();

function showAnswer1(){
  $('#answer1').slideToggle(2000);
}
function showAnswer2(){
  $('#answer2').slideToggle(2000);
}
function showAnswer3(){
  $('#answer3').slideToggle(2000);
}

$('#question1').click(showAnswer1);
$('#question2').click(showAnswer2);
$('#question3').click(showAnswer3);