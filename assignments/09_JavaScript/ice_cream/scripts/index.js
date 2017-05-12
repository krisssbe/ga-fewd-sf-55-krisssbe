

$('#flavor li').click(
  function() {
  console.log('User has set a flavor');
  console.log(event);
  console.log(event.target);
  var selectedFlavor = event.target;

  // save text content of flavor
  var setFlavor = $(selectedFlavor).text();

  // set contents of #order using saved flavorText
  $('#flavorText').text(setFlavor);
});


$('#scoops li').click(function() {
  console.log('User has selected number of Scoops');
  console.log(event);
  console.log(event.target);
  var selectednumScoops = this;
  var numScoops = $(selectednumScoops).text();
  $('#scoopsText').text(numScoops + " scoops of ");

  // save text content of number scoops
  // set contents of #order using saved scoopsText
});

