
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

function showReDeal(){
  var button = document.createElement("button");
  button.innerHTML = "Re-deal!";
  button.id = "re-deal";
  var buttonContainer = document.getElementById("buttons");
  buttonContainer.appendChild(button);
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
    }
  }
  return deck;
  // console.log(deck);
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





// set boolean for button toggle (DEAL/RESET)
var toggle = true;

// execute program
var showCards = document.getElementById("cards");
showCards.onclick = function(){
  var cardContainer = document.getElementById('container');
  if (toggle){
    cardContainer.innerHTML = "";
    displayCards();
    showReset();
    showReDeal();
    var reDeal = document.getElementById("re-deal");
    reDeal.onclick = function() {
        cardContainer.innerHTML = "";
        displayCards();
     };
    toggle = false;
  }
  else {
    cardContainer.innerHTML = "";
    toggle = true;
    showDeal();
    reDeal.remove();
  }

};





