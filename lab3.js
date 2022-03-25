

// //-----------------------------------------------------------------------------
window.addEventListener('DOMContentLoaded', function() { //<-- Execute after page load
//1. Build the deck - check
    let rank = ["ace",2,3,4,5,6,7,8,9,10,"jack","king","queen"];
    let suit = ["hearts", "spades", "diamonds", "clubs"];

    function buildDeck(){
        let deckOfCards = new Array();
        for(let x=0; x<suit.length; x++){
            for (let y=0; y<rank.length; y++){
                playingCards = {rank: rank[y], suit: suit[x]}
                deckOfCards.push(playingCards);
            }
        }
        return deckOfCards;
    }

    let deck1 = new buildDeck();
    //--------------------------SHUFFLE CARDS---------------------------------------------------

    //1.a) Shuffle the deck before dealing
    

    //--------------------------SHUFFLE CARDS----------------------------------------------------




    //2. Generate a random card from the deck - check
    function randomCardNotShuffle(theDeck){
        var card = theDeck[Math.floor(Math.random() * theDeck.length)];
        return card;
    }

    let randomCard = randomCardNotShuffle(deck1);



    // console.log(randomCard); // <-- TEST: returns object with key and value
    // console.log(randomCard.rank); // <--TEST: returns object rank
    // console.log(randomCard.suit); // <--TEST: returns object suit



    //-----------------------------------------------------------------------------

    //3. take random card OUT of deck and INTO / ONTO TOP OF playerHand / dealerHand list


    //-----------------------------------------------------------------------------



    let table = document.getElementsByClassName("container");

    let card = document.createElement(`img`);
    
    // const cards = [
    //     {rank: "2", suit: "hearts"}
    // ]

    // card.src = `images/${cards[0].rank}_of_${cards[0].suit}.png`;
    // card.setAttribute(`src`, `images/${deck1[0].rank}_of_${deck1[0].suit}.png`)

    card.setAttribute(`src`, `images/${randomCard.rank}_of_${randomCard.suit}.png`);


    card.width = 100;
    card.height = 250;

    table[0].appendChild(card);


}); //<----------- window.addEventListener END -----------------
