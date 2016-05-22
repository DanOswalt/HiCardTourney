var h = require('./helpers.js')
var Card = require('./card.js');

function Deck() {
    this.suits = ["c", "d", "h", "s"];
    this.ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K", "A"]; 
    this.deck = [];
    this.dealtCards = [];

    for (var s_index = 0; s_index < this.suits.length; s_index += 1) {
    	for (r_index = 0; r_index < this.ranks.length; r_index += 1) {
    		//create a card object
        	this.deck.push(
        		new Card(this.suits[s_index],
        				 this.ranks[r_index],
        				 s_index, 
        				 r_index
        			)
        	)
    	}
    }
}

//splice one card from the deck array
//append to dealtCards array
//return that card
Deck.prototype.dealACard = function() {
	//splice one card
	var card = this.deck.splice(h.randBetween(0, this.deck.length), 1)[0];
	this.dealtCards.push(card);
	return card;
}

Deck.prototype.shuffle = function() {
	//fischer-yates shuffle
	var j = 0;
	var temp = null;

	for (var i = this.deck.length - 1; i > 0; i -= 1) {
		j = Math.floor(Math.random() * (i + 1));
		temp = this.deck[i];
		this.deck[i] = this.deck[j];
		this.deck[j] = temp;
	}
}

Deck.prototype.collect = function() {
	this.deck = this.deck.concat(this.dealtCards);
};

//tests:
var myDeck = new Deck();

var card = myDeck.dealACard();
var card2 = myDeck.dealACard();

console.log(card);
console.log(card2);
// console.log(myDeck.dealtCards);
// myDeck.shuffle()
// for (var i = 0; i < myDeck.deck.length; i++) {
// 	console.log(myDeck.deck[i].name);
// };

//export as a class
module.exports = Deck