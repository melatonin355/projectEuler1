var prompt = require('prompt');

// Calculate the sum of multiples
// uses sumRange function to calculate result.
function promtUser () {
  prompt.start();
  console.log('Please provide the minimum and maximum Range')
  prompt.get(['minimum', 'maximum'], function (err, result) {
    if (err) { return new Error("Invalid Input"); }

    var minimum = parseInt(result.minimum);
    var maximum = parseInt(result.maximum);
    console.log(' The solution is: ' + sumRange(minimum, maximum));
  });
}

// sumRange finds the sum
// Optimized for space, sum is calculated in an adhoc manner.
// Alternative solution would be to represent the range as a function
function sumRange (minimum, maximum) {
  var sum = 0;

  if (!Number.isInteger(minimum) || !Number.isInteger(maximum)) {
    return new Error('We are expecting integers only');
  }

  if (minimum > maximum) {
    return new Error('The first number is larger than the second number. ');
  }

  // Iterate through the given range and add valid number
  for (minimum; minimum < maximum; minimum++) {
    if (minimum % 3 === 0 || minimum % 5 === 0) { // If the number is a factor add it
      sum += minimum;
    }
  }
  // console.log("The sum of the multiples is: ", sum);
  return sum;
}


// OptimizedSum
// todo: we can use math to optimize the above code
function optimizedSum (start,end,multiple1, multiple2){
  let sum = 0;
  /** since the start could be an arbitrary number
    * we need to find the next multiple of both numbers*/
    var nextNumber1 = start + multiple1 - 1;
    nextNumber1 -= (multiple1 % multiple1); //

    var nextNumber2 = end + multiple2 - 1;
    nextNumber2 -= (multiple2 % multiple2); //

    // We can then find the sum from start-End for multiple1 and multiple2
    //then subtract repeated numbers  which are factors of multiple1 and multiple2
    // finally subtract []
    // [3, 6 .. end] + [5, 10 ...end] - [15, 30, ..end]

}

promtUser()

module.exports = sumRange;



