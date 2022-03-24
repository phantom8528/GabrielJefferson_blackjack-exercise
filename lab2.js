
//-------------------------------------------------------------------------------------

const { url } = require("inspector");

//-->1. Access the image folder



//------------------------------TEST SECTION-----------------------------------------
// console.log(files2); //<-- TEST: Successful - Returns an Array of filenames
// console.log(files[0]); //<-- TEST 2: Successsful - Returns the first item in the folder / array
//------------------------------TEST SECTION-----------------------------------------

//-->2. Pull random item out of the file folder


//------------------------------TEST SECTION-----------------------------------------------
// console.log(dealRandomImage(files2)); //TEST:Successful - returns a random item from the file
// randomCardFile = dealRandomImage(files2);
// console.log(randomCardFile);
//------------------------------TEST SECTION----------------------------------------------

//-->3.Strip away file extension and identify rank and suit of random file

function fileStrip (fileName){
    // singleCardObj = new Array();
    let layerOne = fileName.split(`.`).slice(0,-1).join(`.`); // takes away file extensions
    let layerTwo = layerOne.split(`_`); //takes away underscore
    let layerThree = {rank: layerTwo[0], suit: layerTwo[2]}; //targets rank and suit and puts into object
    console.log(layerThree); //outputs the object
    // console.log(layerTwoSuit);
}

//------------------------------TEST SECTION--------------------------------------------------
// console.log(fileStrip(dealRandomImage(files2))); //TEST:TBD - Returns rank and suit in an object
//------------------------------TEST SECTION--------------------------------------------------

//-->4.Build a Virtual Deck of Cards

// let jack = 11;
// let king = 12;
// let queen = 13;
// let ace = 1;
// let playerHand = [];
// let dealerHand = [];
// let rank = ["ace",2,3,4,5,6,7,8,9,10,"jack","king","queen"];
// let suit = ["hearts", "spades", "diamonds", "clubs"];

// function buildDeck(){
//     let deckOfCards = new Array();
//     for(let x=0; x<suit.length; x++){
//         for (let y=0; y<rank.length; y++){
//             let playingCards = {rank: rank[y], suit: suit[x]}
//             deckOfCards.push(playingCards);
//         }
//     }
//     return deckOfCards;
// }

// let deck1 = new buildDeck();

//--------------------------SHUFFLE CARDS---------------------------------------------------
let ace = 1;
let rank = [1,2,3,4,5,6,7,8,9,10,"jack","king","queen"];
let suit = ["hearts", "spades", "diamonds", "clubs"];

function buildDeck(){
    let deckOfCards = new Array();
    let imageSource = url();
    for(let x=0; x<suit.length; x++){
        for (let y=0; y<rank.length; y++){
            let playingCards1 = {rank: rank[y], suit: suit[x]}
            // let playingCards2 = Object.assign(playingCards1, playingCards)
            deckOfCards.push(playingCards1);
        }
    }
    return deckOfCards;
}

let deck1 = new buildDeck(); //<-- deck1 is out deck of virtual cards 
// console.log(deck1 );





//------------------------------TEST SECTION-----------------------------------------------
// console.log(deck1);
// console.log(fileStrip(dealRandomImage(files))); //TEST:TBD - Returns rank and suit in an object
//------------------------------TEST SECTION-----------------------------------------------

//-->5.Compare file to virtual card deck

function randomCardNotShuffle(theDeck){
    var card = theDeck[Math.floor(Math.random() * theDeck.length)];
    return card;
}

let randomCard = randomCardNotShuffle(deck1);





console.log(randomCard); // <-- returns object with key and value
// console.log(Object.values(randomCard));
// console.log(typeof randomCard);
console.log(randomCard.rank);
console.log(randomCard.suit);





//take random card OUT of deck and INTO / ONTO TOP OF playerHand / dealerHand list
let playerHand = [];
let dealerHand = [];

function cardTransition (card, list1){


}






//------------------------------TEST SECTION-----------------------------------------------

//------------------------------TEST SECTION-----------------------------------------------





