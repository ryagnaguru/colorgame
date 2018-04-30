var numberOfSquares = 6;
var squares = document.querySelectorAll(".square");
var pickedColor;

initialSet(numberOfSquares);

function initialSet(numberOfSquares){
    setColors(numberOfSquares);
    pickedColor = getPickedColor(numberOfSquares);
    document.querySelector("#diplayColorId").textContent = "Color "+ pickedColor;
    initiateGame(numberOfSquares);
    document.querySelector("h1").style.background = "steelblue";
    document.querySelector("#messageId").textContent = ""
}

function initiateGame(numberOfSquares){
    for( var i = 0; i< numberOfSquares; i++ ){
        squares[i].style.display = "block";
        squares[i].addEventListener("click", function(e){
            if(this.style.background == pickedColor ){
                for( var i = 0; i< numberOfSquares; i++ ){
                    squares[i].style.background = pickedColor;
                }
                document.querySelector("h1").style.background = pickedColor;
                document.querySelector("#messageId").textContent = "Correct !!"
                
            }else{
                this.style.background = "#000000"
                document.querySelector("#messageId").textContent = "Retry !!"
            }
        });
    }
    if( numberOfSquares == 3 ){
        for( var i = 3; i< 6; i++ ){
            squares[i].style.display = "none";
        }
    }
}

document.querySelector("#playId").addEventListener("click", function(e){
    initialSet(numberOfSquares);
});

document.querySelector("#easyId").addEventListener("click", function(e){
    initialSet(3);
});

document.querySelector("#hardId").addEventListener("click", function(e){
    initialSet(numberOfSquares);
});

function setColors( numberOfSquares ){
    for( var i = 0; i< numberOfSquares; i++ ){
        squares[i].style.background = getColors();
    }
}

function getColors(){
    return "rgb("+getRandomColorCode()+","+getRandomColorCode()+","+getRandomColorCode()+")";
}

function getRandomColorCode(){
    return Math.floor(Math.random()*256);
}

function getPickedColor(numberOfSquares){
    var randomSquare = Math.floor(Math.random()*numberOfSquares);
    var squares = document.querySelectorAll(".square");
    return squares[randomSquare].style.background;
}
