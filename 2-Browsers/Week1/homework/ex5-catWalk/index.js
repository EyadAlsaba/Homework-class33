'use strict';
/*------------------------------------------------------------------------------
1. Create a variable to store a reference to the `<img>` element.
2. Change the style of the `<img>` to have a `left` of `0px`, so that it starts 
   at the left hand of the screen.
3. Complete the function called catWalk() to move the cat 10 pixels to the right
   of where it started, by changing the `left` style property.
4. Call that function every 50 milliseconds. Your cat should now be moving 
   across the screen from left to right. Hurrah!
5. When the cat reaches the right-hand of the screen, restart them at the left 
   hand side (`0px`). So they should keep walking from left to right across the 
   screen, forever and ever.
6. When the cat reaches the middle of the screen, replace the img with an image 
   of a cat dancing (use this URL given below), keep it dancing for 5 seconds, 
   and then replace the img with the original image and have it 
   continue the walk.

   Dancing cat URL:

   https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif
-----------------------------------------------------------------------------*/
// Variables that store the value's we need to use with manipulation!
const img = document.querySelector('img');
const originalImgSrc = img.src;
const dancingCat =
  'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif?itemid=10561424';

// In order to reset the position to 0 I have make this function to use inside the catWalk function!
function setCatPositionToBeginning() {
  img.style.left = '0px';
}
setCatPositionToBeginning();

function catWalk() {
  // start from 0 and each call we will add 10 to it!
  const currentPosition = parseFloat(img.style.left);
  img.style.left = (currentPosition + 10).toString().concat('px');
  const halfImageWidth = img.width
  // The innerWidth of the screen = 1536  divided by 2 to decide the half of the screen!
  const middlePosition = window.innerWidth / 2 - halfImageWidth;

  /*
  When the current position reach out 760 both of the condition is equal to true!
      \------------------- (760 >= 768 -10) ==> 760 >= 758 true
      \------------------- (760 <= 768 +10) ==> 760 <= 778 true 
  After this call the current position will be 780 which one of the condition is false so the clear interval will don't run!    
  */
  if (
    currentPosition >= middlePosition - 10 &&
    currentPosition <= middlePosition + 10
  ) {
    clearInterval(interval);
    img.src = dancingCat;
    // when 5 sec is passed we reset the src and the position back to what they were!
    setTimeout(() => {
      img.src = originalImgSrc;
      img.style.left = (currentPosition + 20).toString().concat('px');
      interval = setInterval(catWalk, 50);
    }, 5000);
  }
  // When the current position reach out 1540 set the the position back to 0
  // The outer/inner width of the screen is = 1536 (if the tab fully displayed)
  if (currentPosition > window.innerWidth) {
    setCatPositionToBeginning();
  }
}
let interval = setInterval(catWalk, 50);
