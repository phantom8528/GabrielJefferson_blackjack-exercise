
 let rank = ["ace",2,3,4,5,6,7,8,9,10,"jack","king","queen"];
let suit = ["hearts", "spades", "diamonds", "clubs"];

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

  let deck2 = new buildDeck();

//---------------------Random Playing Card Generation - START--------------------------------------------------
function randomCardNotShuffle(theDeck){
  var card = theDeck[Math.floor(Math.random() * theDeck.length)];

  return card;
}

let randomCard = randomCardNotShuffle(deck2); //<-- Generates a random playing card

  let playerHand = [];
  let dealerHand = [];


function cardDeal(){
    card = deck2.pop(randomCard);
    playerHand.push(card);
    console.log(playerHand)
}

cardDeal();
cardDeal();
cardDeal();

function 


