/*
Class HiCardPlayer
*/

function HiCardPlayer() {
	this.isHuman = false;
	this.chips = 0;
	this.isInHand = false;
	this.name;
	this.bet = 0;
}

//tests
// console.log(new HiCardPlayer())

//export as a class
module.exports = HiCardPlayer;