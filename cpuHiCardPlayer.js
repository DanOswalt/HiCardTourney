/*
Class CPUHiCardPlayer (inherits from HiCardPlayer)
*/

var h = require('./helpers.js')
var HiCardPlayer = require('./HiCardPlayer.js')

function CPUHiCardPlayer() {
	this.name = h.generateName();
	this.callFrequencies = this.createCallFrequencies();
}

/*
Inherit basic values from HiCardPlayer
*/

CPUHiCardPlayer.prototype = new HiCardPlayer();

/*
Create call frequencies
Index of callFrequencies corresponds to index of card rank (i.e. 0 = '2', 12 = 'A')
top = lowest card rank that player will call every time (%100)
bottom = highest card that player will sometimes call
callRange = number of steps from bottom to top (inclusive)

The for loop creates a slope of step-increased from bottom to top of the 'sometimes' callRange
(i.e.)
top of range = 10
bottom of range = 7

10+ is called 100% of the time
9 is called 75% of time
8 is called 50% of time
7 is called 25% of time
6 and lower are never called
*/

CPUHiCardPlayer.prototype.createCallFrequencies = function() {
	var top = h.randBetween(0, 12);
	var bottom = h.randBetween(0, top);
	var callRange = (top + 1) - bottom;
	var callFrequencies = new Array(13).fill(1); //see polyfill at bottom, may work in newer node.js w/6?
	var stepsFromTop = 0;

	for (var i = 0; i < top; i++) {
		if (i < bottom) {
			callFrequencies[i] = 0;
		} else if (i >= bottom && i < top) {
			stepsFromTop = top - i;
			callFrequencies[i] = 1 - (stepsFromTop / callRange);
		}
	};

	return callFrequencies;
}

/*
Return simple true/false if a random num is less than the call frequency at that card rank index
*/

CPUHiCardPlayer.prototype.call = function(r_index) {
	return Math.random() < this.callFrequencies[r_index];
};

/*
Array.fill() polyfill, maybe not needed for node in new version w/ ECMAscript 6
*/

if (!Array.prototype.fill) {
  Array.prototype.fill = function(value) {

    // Steps 1-2.
    if (this == null) {
      throw new TypeError('this is null or not defined');
    }

    var O = Object(this);

    // Steps 3-5.
    var len = O.length >>> 0;

    // Steps 6-7.
    var start = arguments[1];
    var relativeStart = start >> 0;

    // Step 8.
    var k = relativeStart < 0 ?
      Math.max(len + relativeStart, 0) :
      Math.min(relativeStart, len);

    // Steps 9-10.
    var end = arguments[2];
    var relativeEnd = end === undefined ?
      len : end >> 0;

    // Step 11.
    var final = relativeEnd < 0 ?
      Math.max(len + relativeEnd, 0) :
      Math.min(relativeEnd, len);

    // Step 12.
    while (k < final) {
      O[k] = value;
      k++;
    }

    // Step 13.
    return O;
  };
}

//tests
// var cpu = new CPUHiCardPlayer();
// console.log(cpu.callFrequencies);
// for (var i = 0; i < cpu.callFrequencies.length; i++) {
// 	console.log(cpu.call(i))
// };

//export as a class
module.exports = CPUHiCardPlayer;