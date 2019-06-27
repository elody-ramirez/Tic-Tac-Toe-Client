# Tic Tac Toe Game

## Technologies Used
-javascript
-JQuery
-html
-css
-bootstrap
-sass

## Planning
The way I decided to approach this is to first complete all the Authentication
features and have them work correctly with the API. After that I would
build a simple, functional, unaesthetic game board. I would first make the
board appear and have X's appear. After that switch between X and O, and lastly
add functionality to not be able to click on a box that has been filled and to
not continue filling in boxes if the game is over. When everything is
functioning as it should I would then build the website to be visually pleasing.
Once aesthetic I would then try to add additional features like adding an
undo botton.

## Development Process
As I planned, I started with the Authentication features. I made forms and
buttons to sign up, log in, change password and log out. Once those were working
and communicating to the API, I implemented hide classes. So when you get to the
website you can sign up and sign in and when you log in you can change password
and log out.

I built the game board on html represented by Bootstrap using col-4 and I added
borders on css. With the board appearing I was able to add event listeners,
event handlers and ui function to place an X. Then I stored the current player
and had it switch between Xs and Os.

I tried to have the moves communicate with the API but I could not wrap my head
around the idea and decided to continue with the development of the board.

I then added lines of code to check if the box that was clicked was already
filled by keeping track of the board in the store file. If clicked it would be
an illegal move and the user would be notified. After that feature I decided to
add a GameOver property to the store value. Once a box is clicked it would first
check if the game is over, then if the move is legal, if legal, it would place
the X/O. If not the next player would have a turn, if someone won, the user
would be notified and they would not be allowed to continue making moves.

All of these game features were done with the game at the screen as soon as the
website comes up. I implemented the new game button, to always refresh all
properties in the store file and either generate the board or wipe the board
when logged in. After the button was working I made sure the new Game button
and every move communicated with the API.

When logged in I then added the button to get all the games a player has
played. With this information I was able to add functions to the UI to check
the user's total wins assuming they were always X and their total games. I also
had to fix my PATCH API info to let the API know if the game was over or not.

## Problem-Solving Strategy
The update move or PATCH communication to the API gave me trouble. The way I
approached this is to see what the API needed. Once I wrote those down I looked
at my code to see where I could get these pieces of information like "Game ID",
"index" and "value". I pulled the ID from when a new game was made. I also took
the index and value from when a move was made by accessing the element's ID. I
put these values in the store file and accessed it everytime the game talked
to the API to update.

I ran into another problem where I never told the API if the game was over.
I noticed this when I implemented the index button to get all games. First, I
looked through my code to find out why this was occuring. I realized that
my event handler would always check if the game was over in order to allow a
click. If the board wasn't full it would run, send the info to the api and then
the ui would update if the game was over or not. I moved this check to the events
handler file so that the update would occur before the api was spoken with. 
## Unsolved Problems

## Future Features

## WireFrames

## User Stories
