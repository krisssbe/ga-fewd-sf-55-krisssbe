// Define a function makeCone.
// It should accept two parameters, flavor and numberScoops.
// The function should take the parameters and log the following to the console: “Coming right up! 
//One {flavor} ice cream cone with {numberScoops} scoops.”

console.log(‘Get ready for some ice-cream!‘);

//make Cone function definition
var makeCone = function (flavor, numberScoops) {
  console.log('Coming right up!')
  console.log('Flavor: ' + flavor);
  console.log('Scoops: ' + numberScoops)
} 

//make Cone function call
makeCone('chocolate', 3);


// Hint: You’ll want to use string concatenation (+) to combine the variables with the human-readable text when logging the message to the console.

// Now, call that function, passing in “chocolate” and 3 as the arguments.

// You should see the following messages:

// “Coming right up!”
// “Flavor: chocolate”
// “Scoops: 3”


