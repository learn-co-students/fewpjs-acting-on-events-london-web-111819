// Your code here
const dodger = document.querySelector('#dodger')
function moveDodgerRight() {
    let leftPx = dodger.style.left.replace("px", "")
    let left = parseInt(leftPx, 10)
    if (left > 0) {
        dodger.style.left = `${left + 1}px`
    }
}

function moveDodgerLeft() {
    let leftPx = dodger.style.left.replace("px", "")
    let left = parseInt(leftPx, 10)
    if (left > 0) {
        dodger.style.left = `${left - 1}px`
    }
}

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft()
    } else if (e.key === "ArrowRight") {
        moveDodgerRight()
    }
})