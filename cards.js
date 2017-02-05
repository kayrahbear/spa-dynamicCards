"use strict";

const submitButton = $("#submit");
let outputCards = $("#outputCards");
let userInput = $("#inputBox");

submitButton.click( () => {
    let card1 = `   <div class="col m3">
                    <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                    <span class="card-title">You Made a Card!</span>
                    <p> ${userInput.val()} </p>
                    </div>
                    <div class="card-action">
                    <button class="btn waves-effect waves-light" id="deleteButton">Delete!</button>
                    </div>
                    </div>
                    </div>` ;
                    
    outputCards.append(card1);
    console.log("userInput", userInput.val());
});
