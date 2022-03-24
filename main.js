window.addEventListener('DOMContentLoaded', function() { //<-- Execute after page load

    //Event Listener for the "Deal" Button
    document.getElementById("deal-button").addEventListener(`click`, dealCardsRender);

    //Event Listener for "Hit" Button
    document.getElementById("hit-button").addEventListener(`click`, playerHit);

    //Event Listener for "Stand" Button
    document.getElementById("stand-button").addEventListener(`click`, playerStand);

    //Player Hand
    let playerHand = document.getElementById(`player-hand`);

    //Player Points
    let playerPoints = document.getElementById("player-score");

    //Dealer Hand
    let dealerHand = document.getElementById(`dealer-hand`);

    //Dealer Points
    let dealerPoints = document.getElementById("dealer-score");



    //--------------------Requisite Material for playing Card Generation - START---------------------
    // let jack = 11;
    // let king = 12;
    // let queen = 13;
    // let ace = 1;
    let rank = ["ace",2,3,4,5,6,7,8,9,10,"jack","king","queen"];
    let suit = ["hearts", "spades", "diamonds", "clubs"];
    //-------------------------------------------------------------------- - END----------------------

    //------------------Deck Generation - START------------------------------------------------
    function buildDeck(){
      let deckOfCards = new Array();
      for(let x=0; x<suit.length; x++){
          for (let y=0; y<rank.length; y++){
              let playingCards = {rank: rank[y], suit: suit[x]}
              deckOfCards.push(playingCards);
          }
      }
      return deckOfCards;
    }
    let deck1 = new buildDeck(); //<--Generates deck of Cards named "deck1"
    //---------------------Deck Generation - END--------------------------------------------------

    //---------------------Random Playing Card Generation - START--------------------------------------------------
    function randomCardNotShuffle(theDeck){
      var card = theDeck[Math.floor(Math.random() * theDeck.length)];
      return card;
    }

    let randomCard = randomCardNotShuffle(deck1); //<-- Generates a random playing card
    //------------------------Random Playing Card Generation - END--------------------------------------------------

    //------------------------------TEST SECTION-----------------------------------------------

    // card.setAttribute(`src`, `images/${randomCard.rank}_of_${randomCard.suit}.png`);

    //------------------------------TEST SECTION-----------------------------------------------


      
  //When the deal button is pressed ...
  function dealCards(hand){
    var anyCard = document.createElement(`img`);
    // HERE <-- card objects stored in deck1 are compared with /images directory
    // anyCard.setAttribute(`src`, "/Users/corcoding/Desktop/projects/blackjack-exercise/images/2_of_clubs.png");
    anyCard.setAttribute(`src`, `images/${randomCard.rank}_of_${randomCard.suit}.png`);
    anyCard.setAttribute(`alt`, `${randomCard.rank} of ${randomCard.suit}`);
    hand.appendChild(anyCard);
  }

  //Adds a facedown card to the 0 index of the dealer's hand when the "Deal" button is clicked
  function dealerFacedownCard(){
    var facedown = document.createElement(`img`);
    facedown.setAttribute (`src`, `/Users/corcoding/Desktop/projects/blackjack-exercise/facedown.png`);
    facedown.setAttribute(`alt`, "Dealer's Facedown Card");
    dealerHand.appendChild(facedown);
  }
  //Moderates the number of cards dealt to the players and the dealer
  function dealCardsRender(){
    dealerFacedownCard();
    dealCards(dealerHand);
    dealCards(playerHand);
    dealCards(playerHand);
    //Once the dealer and the player have there specified allotment of cards, the button is disabled
    if (playerHand.childElementCount == 2 && dealerHand.childElementCount == 2){
      document.getElementById("deal-button").disabled = true;
    }

  }

  function playerHit(){
    var playerCard = document.createElement(`img`);
    playerCard.setAttribute(`src`, `images/${randomCard.rank}_of_${randomCard.suit}.png`);
    playerCard.setAttribute(`alt`, `${randomCard.rank} of ${randomCard.suit}`);
    playerHand.appendChild(playerCard);
    //HERE <--Calculates points of both the player and the dealer

  }

  function playerStand(){
    //HERE <--Calculates points of both the player and the dealer
  }

}); //<----------- window.addEventListener END -----------------
