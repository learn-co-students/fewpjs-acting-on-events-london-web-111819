// Your code here

let dodger = document.getElementById('dodger');

//move to left

function moveDodgerLeft(){
    let leftNumber = dodger.style.left.replace("px","");
    let left = parseInt(leftNumber,10);

    if (left > 0){
        dodger.style.left = `${left-1}px`;
    }
}

document.addEventListener("keydown", function(e){
    if (e.key === "ArrowLeft"){
        moveDodgerLeft();
    }
})

//move to right

function moveDodgerRight(){
    let leftNumber = dodger.style.left.replace("px","");
    let left = parseInt(leftNumber,10);

    if (left < 360){
        dodger.style.left = `${left+1}px`;
    }
}

document.addEventListener("keydown", function(e){
    if (e.key === "ArrowRight"){
        moveDodgerRight();
    }
})


