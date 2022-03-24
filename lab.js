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

//STOP and TEST - Print the rank and suit of each card seperately
let cardRank = deck1.map(item => item.rank);
console.log(cardRank);
// let cardSuitsKeys = deck1.map(item => item.suit);
// // console.log(cardSuits);






function dealRandomlCard(yourCards){
    var card = yourCards[Math.floor(Math.random() * yourCards.length)];
    return card;
}
//STOP and TEST - Output: A Random Card From Deck 1
// console.log(dealCard(deck1));

// function dealRandomImage(yourFile){
//     var card = yourFile[Math.floor(Math.random() * yourFile.length)];
//     return card;
// }


// playerHand.push(dealCard(deck1));
// console.log(dealRandomImage(files));
//STOP and TEST - Output: A random card inside of the player's hand
// console.log(playerHand);

// function renderCards (chooseDeck){
//     var playerTable = document.getElementsByClassName("player-hand");
//     var dealerTable = document.getElementsByClassName("dealer-hand");
//     let playerTableSpots = playerTable.childNodes;
//     let dealerTableSpots = dealerTable.childNodes;
    
// }

//----------------------Accessing the files in the images folder---------------------------------
const fs = require(`fs`);
var files = fs.readdirSync(`/Users/corcoding/Desktop/projects/blackjack-exercise/images`);
var files2 = fs.readdirSync(`/Users/corcoding/Desktop/projects/blackjack-exercise/images`);


// console.log(files); //<-- Testing whether the access was succcessful
// console.log(files[0]); //<-- prints the first item in the file / list
// imageFile = `${rank}_of_${suit}.png`;


//----------------------Comparing the files to the objects---------------------------------





//----------------------NESTED DATA STRUCTURES EXPERIMENT---------------------------------
const activities = { //<-- Level 1: Array
    savedActivities: [//<-- Level 2: List
        {//<-- Level 3: Array
            name: "To do this weekend",
            activities: [ //<-- Level 4: List
                "Cook one new recipe",
                "Go for a run",
                "Water plants"
            ],
            id: "1"
        },
        {
            name: "Fun fall activities",
            activities: [
                "Visit pumpkin patch",
                "Have a photo session of cat",
                "Write a note of appreciation to someone"
            ],
            id: "2"
        },
        {
            name: "Winter goals",
            activities: [
                "Go skiing",
                "Visit the beach",
                "Read War and Peace"
            ],
            id: "3"
        }

    ],
    completedActivities: [
        {
            activity: "Learn how to whistle with your fingers",
            id: "1"
        },
        {
            activity: "Create and follow a savings plan",
            id: "2"
        }

    ]

};

//Lets start by getting each "name" value out of the saved activities array.
let activityMap = activities.savedActivities.map(item => item.name);
// console.log(activityMap); // Returns all of the name values
// console.log(activityMap[0]); // Returns the name value at index 0 in 

//Lets try it with activities
let activityMap2 = activities.savedActivities.map(item => item.activities);
// console.log(activityMap2);
// console.log(activityMap2[0]);
// console.log(activityMap2[0][0]);

//----------------------NESTED DATA STRUCTURES EXPERIMENT - END---------------------------------

//----------------------REVERSE STRING INTERPOLATION - START---------------------------------
const dateString = "Received on Saturday 14th of July 2018";

// Split the string up by spaces
const dateParts = dateString.split(' ');

// Grab each part of the date. We parse the day as an int to just get the numeral value
const month = dateParts[5];
const day = parseInt(dateParts[3]);
const year = dateParts[6];

// Parse the date by reassembling the string
const date = new Date(month + ' ' + day + ' ' + year);

// Output in your desired format (ISO)
const formattedDate = date.getFullYear()+'-' + (date.getMonth()+1) + '-'+date.getDate();

// console.log(formattedDate);
//----------------------REVERSE STRING INTERPOLATION - END---------------------------------

//----------------------APPLICATION TO IMAGES FOLDER - START---------------------------------

// filename.split('.').slice(0, -1).join('.')
// console.log(matchCard(files));

for (const element of files){
    if (element === "facedown.png"){
        continue;
    }
    let newElement1 = element.split(`.`).slice(0, -1).join(`.`); 
    //Line Above: seperates file extension from filename, removes file extension, joins remaining strings without the dot
    let newElement2 = newElement1.split(`_`);
    let cardRank = newElement2[0];
    let cardSuit = newElement2[2];
    let finalCard = `${cardRank} of ${cardSuit}`;
    // console.log(finalCard); //<-- SUCCESS
}

//--> Put "for..of.." statement in a function that returns two value



for (const element of files){

    let newElement1 = element.split(`.`).slice(0, -1).join(`.`); 
    //Line Above: seperates file extension from filename, removes file extension, joins remaining strings without the dot
    let newElement2 = newElement1.split(`_`);
    let cardRank = newElement2[0];
    let cardSuit = newElement2[2];
}
// console.log(cardRankKeys);
// console.log(cardSuitsKeys);


// function imageRank (fileFolder){

//     for (const element of fileFolder){
//         let newElement1 = element.split(`.`).slice(0, -1).join(`.`); 
//         //Line Above: seperates file extension from filename, removes file extension, joins remaining strings without the dot
//         let newElement2 = newElement1.split(`_`);
//         let cardRank = newElement2[0];
//         // let cardSuit = newElement2[2];
//         console.log(cardRank)

//     }

// }

// function imageSuit (fileFolder){

//     for (const element of fileFolder){
//         let newElement1 = element.split(`.`).slice(0, -1).join(`.`); 
//         //Line Above: seperates file extension from filename, removes file extension, joins remaining strings without the dot
//         let newElement2 = newElement1.split(`_`);
//         // let cardRank = newElement2[0];
//         let cardSuit = newElement2[2];

//         console.log(cardSuit)

//     }

// }

function cardFunction (fileFolder){

    for (const element of fileFolder){
        if (element === "facedown.png"){
            continue;
        }
        let newElement1 = element.split(`.`).slice(0, -1).join(`.`); 
        //Line Above: seperates file extension from filename, removes file extension, joins remaining strings without the dot
        let newElement2 = newElement1.split(`_`);
        let cardRank = newElement2[0];
        let cardSuit = newElement2[2];
        // let finalCard = `${cardRank} of ${cardSuit}`;
        let finalCardObj = {rank:`${cardRank}`, suit: `${cardSuit}`};
        console.log(finalCardObj); //<-- SUCCESS
    }

}

let newDeckOfCards = new Array();
newDeckOfCards.push(cardFunction(files));
// console.log(newDeckOfCards); //<-- SUCCESS



// console.log(cardFunction(files));

//----
// function dealRandomImage(yourFile){
//     var card = yourFile[Math.floor(Math.random() * yourFile.length)];
//     return card;
// }


// playerHand.push(dealCard(deck1));
// console.log(dealRandomImage(files));



//----------------------APPLICATION TO IMAGES FOLDER - START---------------------------------





























