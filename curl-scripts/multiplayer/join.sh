curl "https://tic-tac-toe-wdi-multiplayer.herokuapp.com/games/${ID}"  \
  --include \
  --request PATCH \
  --header "Authorization: Token token=${TOKEN}" \
  --header "Content-Type: application/json" \
  --data '{}'

echo
