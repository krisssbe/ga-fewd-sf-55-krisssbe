//When form is submitted
//read entered city
//check if supported
//update background to supported city
//Else
//Alert City not supported

console.log('hello world');

$('.entry').on('submit', function(event){
  e.preventDefault();
  showCity();
})

var userEntry = $('#city-type').val();

var newYork = ["New York", "New York City", "NYC"];
var sanFran = ["San Francisco", "SF", "Bay Area"];
var losAngeles = ["Los Angeles", "LA", "LAX"];
var austin = ["Austin", "ATX"];
var sydney = ["Sydney", "SYD"];


function showCity() {
  if(userEntry === newYork[0] || userEntry === newYork[1] || userEntry === newYork[2]) {
    $('body').css('background','url(../images/nyc.jpg)').fadein();
  } 
  else if(userEntry === sanFran[0] || userEntry === sanFran[1] || userEntry === sanFran[2]) {
    $('body').css('background','url(../images/sf.jpg)').fadein();
  } 
  else if(userEntry === losAngeles[0] || userEntry === losAngeles[1] || userEntry === losAngeles[2]) {
    $('body').css('background','url(../images/la.jpg)').fadein();
  } 
  else if(userEntry === austin[0] || userEntry === austin[1]) {
    $('body').css('background','url(../austin.jpg)').fadein();
  } 
  else if(userEntry === sydney[0] || userEntry === sydney[1]) {
    $('body').css('background','url(../images/sydney.jpg)').fadein();
  }
  $('userEntry').val('');
};

$('#submit-btn').on('submit', showCity);




