window.addEventListener('DOMContentLoaded', function() { //<-- Execute after page load

    //Event Listener for the "Deal Button"
    document.getElementById("deal-button").addEventListener(`click`, dealCardsRender);
    // let dealButtonClicks = 0;

    //Player Hand
    let playerHand = document.getElementById(`player-hand`);

    //Dealer Hand
    let dealerHand = document.getElementById(`dealer-hand`);

    //limit the number of times the 
      
    //When the deal button is pressed ...
    function dealCards(hand){
      var anyCard = document.createElement(`img`);
      anyCard.setAttribute(`src`, "/Users/corcoding/Desktop/projects/blackjack-exercise/images/2_of_clubs.png");
      anyCard.setAttribute(`alt`, "2 of Clubs");
      hand.appendChild(anyCard);
      // playerHand.appendChild(anyCard);
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
    dealCards(dealerHand)
    dealCards(playerHand);
    dealCards(playerHand);

    //Once the dealer and the player have there specified allotment of cards, the button is disabled
    if (playerHand.childElementCount == 2 && dealerHand.childElementCount == 2){
      document.getElementById("deal-button").disabled = true;
    }

    


  }

  



}); //<----------- window.addEventListener END -----------------
