/*the actual tournament
will need a command line interface
later can serve an html page if the cli works
so
opens with what is your name? how many players? this ought to be unlimited really.
there will need to be function to structure the blinds
how many starting chips? how fast?
tables will be 6
generate a list of cpu players
randomize the list of all active players
generate a list of tables
will need an algorithm for how to seat players and continually adjust the tables
cli show the tables and a leaderboard
or have a menu option to see leaderboard
loop for a round:
for each table:
table.deck shuffled
each player dealt a card
player at blind seat bets automatically
player.call run on each player
if human, call y/n
sort into pots and sidepots
reveal cards animation
award pots

cleanup:
remove players that are out
check if there's a winner
adjust tables
adjust blind amount
move blind
collect cards? or generate new deck?


