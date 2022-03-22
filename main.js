window.addEventListener('DOMContentLoaded', function() {
  // Execute after page load

  const dealerTable = document.getElementById(`dealer-table`);

  //1.Lets Make the Deal Button
  document.getElementById("deal-button").addEventListener(`click`, dealCards);
  
  //2. Create function for connecting the button
  function dealCards(){
    var anyCard = document.createElement(`img`);
    anyCard.setAttribute(`src`, "/Users/corcoding/Desktop/projects/blackjack-exercise/images/2_of_clubs.png");
    anyCard.setAttribute(`alt`, "2 of Clubs");
    document.getElementById(`dealer-hand`).appendChild(anyCard);
  }



  

})