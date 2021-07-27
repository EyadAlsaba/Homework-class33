'use strict';
/*------------------------------------------------------------------------------
1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/
// create the element and style it
const span = document.createElement('p');
document.body.appendChild(span);
span.style.textAlign = 'center';
span.style.padding = '25px';
span.style.border = '2px solid #666';
span.style.fontSize = '24px';
// Define the function
function addCurrentTime() {
  // TODO complete this function
  span.textContent = new Date().toLocaleTimeString();
}
// Add the event to the window object
// TODO execute `addCurrentTime` when the browser has completed loading the page
setInterval(addCurrentTime, 1000);
window.addEventListener('load', addCurrentTime);
