"use strict";

// Variables/Constants
let gmWidth, gmHeight; // Height/Width
const body = document.body; // Makes it easier for me
const trending = document.getElementById('trending_games');

// GMWorks Class
class GMWorks {
   static #deleteChildren() {
    let first = trending.firstElementChild;
    while (first) {
      first.remove();
      first = trending.firstElementChild;
      //console.log('deleted child') <-- Use to check if deleteChildren is working
    }
   }
  
   static recalculateUI() {
     gmWidth = window.innerWidth;
     gmHeight = window.innerHeight;
     this.gmGameSlots = Math.floor(gmWidth / 215); // Game Slots to display at once (+15px to ensure that no overflow exists)
     GMWorks.#deleteChildren();
     for (let i = 0; i < this.gmGameSlots; i++) {
      let x = document.createElement("button"); 
      x.setAttribute('class', 'gameslot');
      x.setAttribute('type', 'button');       
      trending.appendChild(x);
     }
   } // You know what this does
}

// Event Listeners
window.onresize = function() { GMWorks.recalculateUI() }; // Why the hell does this work and not eventListener?

// Finish Up
GMWorks.recalculateUI();