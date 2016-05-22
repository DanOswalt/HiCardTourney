var h = require('./helpers.js')

function HiCardTable() {
	var seats = {
		seat1: 'empty',
		seat2: 'empty',
		seat3: 'empty',
		seat4: 'empty',
		seat5: 'empty',
		seat6: 'empty',
	}

	var deck = new Deck();
	var blind = h.randBetween(0, 5);
	var mainPot = 0;
	var sidePot1 = 0;
	var sidePot2 = 0;
	var sidePot3 = 0;
	var sidePot4 = 0;

}

//export as a class
module.exports = HiCardTable;