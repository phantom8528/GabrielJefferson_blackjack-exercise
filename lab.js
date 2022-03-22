let jack = 11;
let king = 12;
let queen = 13;
let playerHand = [];
let dealerHand = [];
let rank = [1,2,3,4,5,6,7,8,9,10,jack,king,queen];
let suit = ["Hearts", "Spades", "Dimaonds", "Clubs"];

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

let deck1 = new buildDeck();
//STOP and TEST - Output: Generation of Deck using Suits and Franks
// console.log(deck1); 
// console.log(`\nThere are ${deck1.length} cards in this deck of cards\n`) 



function dealCard(yourCards){
    var card = yourCards[Math.floor(Math.random() * yourCards.length)];
    return card;
}
//STOP and TEST - Output: A Random Card From Deck 1
// console.log(dealCard(deck1));


playerHand.push(dealCard(deck1));
//STOP and TEST - Output: A random card inside of the player's hand
console.log(playerHand);

// function renderCards (chooseDeck){
//     var playerTable = document.getElementsByClassName("player-hand");
//     var dealerTable = document.getElementsByClassName("dealer-hand");
//     let playerTableSpots = playerTable.childNodes;
//     let dealerTableSpots = dealerTable.childNodes;
    
// }



