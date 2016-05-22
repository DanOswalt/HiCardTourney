function Card(suit, rank, s_index, r_index) {
	this.rank = rank;
    this.suit = suit;
    this.name = rank + suit;

    //if optional value arguments are given:
    if(s_index !== undefined && r_index !== undefined) {
		this.r_index = r_index; //2 = 2, Q = 12, etc.
		this.s_index = s_index; //s = 4, h = 3, d = 2, c = 1
		this.value = r_index + (s_index / 10) || undefined //unique value for each card
	}
}

//export as a class
module.exports = Card;

