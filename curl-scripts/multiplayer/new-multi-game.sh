curl "https://tic-tac-toe-wdi-multiplayer.herokuapp.com/games"  \
  --include \
  --request POST \
  --header "Authorization: Token token=${TOKEN}" \
  --header "Content-Type: application/json" \
  --data '{}'

echo
