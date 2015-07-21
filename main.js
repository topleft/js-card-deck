
//appends DOM with images of whole deck
function displayCards(){
  var deck = newDeck();
  var shuffledCards = shuffleCards(deck);

  for(var i=0; i < deck.length; i++){
    var card = document.createElement('div');
    card.className = "card";
    var cardContainer = document.getElementById('container');
    cardContainer.appendChild(card);
    card.style.backgroundImage = "url(images/" + shuffledCards[i].suit + "-" + shuffledCards[i].card + ".png" + ")";

  }
}


// renames existing button
function showReset() {
  var button = document.getElementById("cards");
  button.innerHTML = "Reset";
}
// bring back original button
function showDeal() {
  var button = document.getElementById("cards");
  button.innerHTML = "Deal!";

}

// Creates a deck of 52 cards
function newDeck(){

  var ranks = [
    {card:"a"},
    {card:"2"},
    {card:"3"},
    {card:"4"},
    {card:"5"},
    {card:"6"},
    {card:"7"},
    {card:"8"},
    {card:"9"},
    {card:"10"},
    {card:"j"},
    {card:"q"},
    {card:"k"}
  ];

  var suits = ["d", "c", "s", "h"];
  var deck = [];
  for (var i = 0; i < suits.length; i++) {
    for (var j = 0; j < ranks.length; j++) {
      current = {};
        current.suit = suits[i];
         current.card = ranks[j].card;
          deck.push(current);
    };
  };
  return deck;
  console.log(deck);
}


// Shuffles the Deck
function shuffleCards(cardDeck){
    var m = cardDeck.length;
    while (m) {
      var i = Math.floor(Math.random() * m--);
      var t = cardDeck[m];
      cardDeck[m] = cardDeck[i];
      cardDeck[i] = t;
    }
    console.log(cardDeck);
    return cardDeck;
  }

// grab div where cards are displayed
var showCards = document.getElementById("cards");
// set boolean for button toggle (DEAL/RESET)
var toggle = true;

// execute programm
showCards.onclick = function(){
  if (toggle){
    var cardContainer = document.getElementById('container');
    cardContainer.innerHTML = "";
    displayCards();
    showReset();
    toggle = false;
  }
  else {
    var cardContainer = document.getElementById('container');
    cardContainer.innerHTML = "";
    toggle = true;
    showDeal();
  }

};



