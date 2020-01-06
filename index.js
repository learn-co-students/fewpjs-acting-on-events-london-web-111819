let dodger = document.getElementById("dodger");
function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
   
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
 
  function moveDodgerRight() {
      let rightNumbers = dodger.style.left.replace("px", "");
      let left = parseInt(rightNumbers, 10);

      if (left < 360) {
          dodger.style.left = `${left + 1}px`
      }
  } // always call movements from .left or .top with +/-
   // 360 is double where the dodger was placed at (180px) in inspect

  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
    else if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
  });