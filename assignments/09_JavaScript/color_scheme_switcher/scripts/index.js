console.log('hello world');

$('#grayButton').click(switchGray);
$('#whiteButton').click(switchWhite);

function switchGray() {
  $('body').addClass('dark-theme');
}

function switchWhite() { 
  $('body').removeClass('dark-theme');
}

