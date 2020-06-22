const textEle = document.getElementById('text');
const options = document.getElementsByClassName('btn');

for (var i = 0; i < options.length; i++) {
    (function(index) {
         options[index].addEventListener("mousedown", function() {
            progressGame(index);
          })
    })(i);
}

let sceneNum = 0;

let sceneText = [
                "My Text Adventure",//scene 0
                "You Wake up In Bed to a new morning", //scene 1
                "Made By Michael", //scene2 
                "You Go back to sleep",//scene 3
                "You Enjoy your Day", //scene 4
                "You go to Bed", //scene 5
                "You collapse, exhausted", //scene 6
                ];

let sceneOption1 = [
                    "Play", //scene 0
                    "Go Back to Sleep",//scene 1
                    "Play", //scene 2
                    "Play Again",//scene 3
                    "It's Time for Bed",//scene 4
                    "Play Again",//scene 5
                    "Play Again",//scene 6
                    ];

let sceneOption2 = [
                    "Credits",//scene 0
                    "Get Up",//scene 1
                    "Main Menu", //scene 2
                    "Main Menu",//scene 3
                    "Carry On",//scene 4
                    "Main Menu",//scene 5
                    "Main Menu",//scene 6
                    ];


function startGame(){
    displayText(sceneNum);
    console.log(sceneNum);
}

function progressGame(whichOption){

    switch(sceneNum) {
        case 0:
            if(whichOption==0){
                sceneNum = 1;
                displayText(sceneNum);
            }
            else if(whichOption == 1){
                sceneNum = 2;
                displayText(sceneNum);
            }
          break;

        case 1:
            if(whichOption==0){
                sceneNum = 3;
                displayText(sceneNum);
            }
            else if(whichOption == 1){
                sceneNum = 4;
                displayText(sceneNum);
            }
          break;

        case 2:
            if(whichOption==0){
                sceneNum = 1;
                displayText(sceneNum);
            }
            else if(whichOption == 1){
                sceneNum = 0;
                displayText(sceneNum);
            }
          break;

        case 3:
            if(whichOption==0){
                sceneNum = 1;
                displayText(sceneNum);
            }
            else if(whichOption == 1){
                sceneNum = 0;
                displayText(sceneNum);
            }
          break;

        case 4:
            if(whichOption==0){
                sceneNum = 5;
                displayText(sceneNum);
            }
            else if(whichOption == 1){
                sceneNum = 6;
                displayText(sceneNum);
            }
          break;

        case 5:
            if(whichOption==0){
                sceneNum = 1;
                displayText(sceneNum);
            }
            else if(whichOption == 1){
                sceneNum = 0;
                displayText(sceneNum);
            }
          break;

        case 6:
            if(whichOption==0){
                sceneNum = 1;
                displayText(sceneNum);
            }
            else if(whichOption == 1){
                sceneNum = 0;
                displayText(sceneNum);
            }
        break;

      }

    console.log(sceneNum);
}

function displayText(sceneValue){
    textEle.innerHTML = sceneText[sceneValue];
    options[0].innerHTML = sceneOption1[sceneValue];
    options[1].innerHTML = sceneOption2[sceneValue];   
}

startGame();
