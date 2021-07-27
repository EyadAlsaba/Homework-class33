'use strict';
/*------------------------------------------------------------------------------
1. Using JavaScript, change the body tag's style so it has a font-family of 
   "Arial, sans-serif".
2. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
3. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
------------------------------------------------------------------------------*/

// TODO add your JavaScript code here.
// CHANGE THE FONT FAMILY OF THE BODY
document.body.style.fontFamily = 'Arial, sans-serif';

// CHANGE THE SPANS ID NAME WITH MY INFO
const spanId = document.getElementsByTagName('span');
for (let i = 0; i < spanId.length; i++) {
  spanId[0].textContent = 'Eyad';
  spanId[1].textContent = 'Hummus';
  spanId[2].textContent = 'Syria';
}
// CHANGE THE CLASS NAME OF THE LIST ITEMS
const listItems = document.getElementsByTagName('li');
for (let i = 0; i < listItems.length; i++) {
  listItems[i].setAttribute('class', 'list-item');
}
