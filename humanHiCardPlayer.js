/*
Class HumanHiCardPlayer (inherits from HiCardPlayer)
*/

var HiCardPlayer = require('./HiCardPlayer.js')

function HumanHiCardPlayer(name) {
	this.name = name;
	this.isHuman = true;
}

/*
Inherit basic values from HiCardPlayer
*/

HumanHiCardPlayer.prototype = new HiCardPlayer();

module.exports = HumanHiCardPlayer;
