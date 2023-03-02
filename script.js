
console.log(document.getElementById("square"));

var elmnt=document.getElementById("square");
var drop=document.getElementById("drop");
drop1 = drop.offsetLeft+drop.getBoundingClientRect().width/2;
drop2 = drop.offsetTop+drop.getBoundingClientRect().height/2;
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  var org1 = 0, org2 = 0;

 
  if (elmnt) {
    /* if present, the header is where you move the DIV from:*/
    elmnt.onmousedown = dragMouseDown;
  } 

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    org1 = elmnt.offsetLeft;
    console.log(org1);
    org2 = elmnt.offsetTop;
    pos3 = e.clientX;
    console.log(pos3);
    pos4 = e.clientY;

    console.log(pos4);
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;

    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }
  
function closeDragElement() {
  document.onmouseup = null;
  document.onmousemove = null;

  // Get the position of the square
  var rect = elmnt.getBoundingClientRect();
  var x = rect.left + (rect.width / 2);
  var y = rect.top + (rect.height / 2);

  if (x > window.innerWidth / 2) {
    // If the square is on the black side, keep it where it is
    return;
  } else {
    // If the square is on the white side, move it back to its original position
    elmnt.style.top = drop2 + "px";
    elmnt.style.left = drop1 + "px";
  }
}


//when we drop the square, it come to the original location
// function closeDragElement(e) {
//   // reset the square to its original position
//   elmnt.style.top = org2 + "px";
//   elmnt.style.left = org1 + "px";
  
//   document.onmouseup = null;
//   document.onmousemove = null;
// }


//previous code
  // function closeDragElement() {
   
    
  //   document.onmouseup = null;
  //   document.onmousemove = null;
  // }
