console.log 'hello world';

var currentYear = 2017;
var name = prompt('What is your name?');
var yob = prompt('What year where you born in?')

$('#salutation').text('Hello ' + name);
$('#message').text(rentalMessage);

var age = currentYear - yob;

var printMessage = function (rentalMessage, ageCategory) {
    $('#message').text(rentalMessage);
    console.log('Rental assessment successful.');
}
if (age >= 25) {
  rentalMessage('Happy rental' + 'over age');
} else if (age < 25 && age >= 21) {
  rentalMessage ('Pay Up' + 'younglin');
} else {
  rentalMessage = ('Take the bus' + 'baby');
}

