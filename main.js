window.addEventListener('DOMContentLoaded', function() { //<-- Execute after page load


    //Event Listener for the "Deal" Button
    document.getElementById("deal-button").addEventListener(`click`, dealCardsRender);

    //Event Listener for "Hit" Button
    document.getElementById("hit-button").addEventListener(`click`, playerHit);

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
    // let randomCard = randomCardNotShuffle(deck1); //<-- Generates a random playing card

    //---------------------Random Playing Card Generation - END--------------------------------------------------

    //Plan.b) Draws card from deck
    function getCardFromDeck (theDeck){
      let card = theDeck.pop();
      theDeck--
      return card;

    }

    let drawnCard = getCardFromDeck(deck1);



  //When the deal button is pressed ...
  function dealCards(hand){
    var anyCard = document.createElement(`img`);
    anyCard.setAttribute(`src`, `images/${drawnCard.rank}_of_${drawnCard.suit}.png`);
    anyCard.setAttribute(`alt`, `${drawnCard.rank} of ${drawnCard.suit}`);
    hand.appendChild(anyCard);
  }

  //Adds a facedown card to the 0 index of the dealer's hand when the "Deal" button is clicked
  function dealerFacedownCard(){
      var facedown = document.createElement(`img`);
      facedown.setAttribute (`src`, `/Users/corcoding/Desktop/projects/blackjack-exercise/images/facedown.png`);
      facedown.setAttribute(`alt`, "Dealer's Facedown Card");
      dealerHand.appendChild(facedown);
    }


  //Moderates the number of cards dealt to the players and the dealer
  function dealCardsRender(){
    dealerFacedownCard();
    dealCards(playerHand);
    dealCards(playerHand);
    dealCards(dealerHand);

    if (playerHand.childElementCount == 2 && dealerHand.childElementCount == 2){
      document.getElementById("deal-button").disabled = true;
    }

    }

  //Deals card to the player
  function playerHit(){
    
      var playerCard = document.createElement(`img`);
      playerCard.setAttribute(`src`, `images/${drawnCard.rank}_of_${drawnCard.suit}.png`);
      playerCard.setAttribute(`alt`, `${drawnCard.rank} of ${drawnCard.suit}`);
      playerHand.appendChild(playerCard);

      if (playerHand.childElementCount == 12){
        document.getElementById("hit-button").disabled = true;
      }

    }



}); //<----------- window.addEventListener END -----------------
