//Text adventure
//Scene Text + Two Choices
//Manipulate Scene Text and Option text
//Different text for different scenes

//store the values of the elements on the webpage
var sceneTextEle = document.getElementById("sceneText");
var optionsTextEle = document.getElementsByClassName("btn");


//assign a listener to each button and call the progress game function whenever they are pressed
for(var i = 0; i < optionsTextEle.length; i++){
    (function(index){
        optionsTextEle[index].addEventListener("mousedown", function(){
            progressGame(index);
        });
    })(i);
}

var sceneNum = 0;


//the text that will appear on the screen
var textForScene = [
                        "My Text Adventure",//scene 0
                        "Made by Me",//scene 1 or credits
                        "Welcome to your adventure",//scene 2
                        "Oh a fighter?",//scene 3
                        "Do you expect to take a hit?"//scene 4
                   ];
                    
var textForOption0 = [
                        "Play",//scene 0
                        "Play", // scene 1 or credits
                        "Grab a Sword",//scene 2 or credits
                        "Attack the nearest thing",//scene 3
                        "Start a fight"//scene 4
                     ];

var textoForOption1 = [
                        "Credits", //scene 0
                        "Main Menu",//scene 1
                        "Grab a Sheild",//scene 2
                        "The best defense is a strong offense",//scene 3
                        "Better safe than sorry"//scene 4
                     ];


//initialize on scene 0
function startGame(){
    updateText();
}

//check which scene we are on, check which button was pressed, go to that scene number
function progressGame(whichOption){
    switch(sceneNum){
        case 0:
            if(whichOption == 0){
                sceneNum = 2;
            }else{
                sceneNum = 1;
            }
        break;

        case 1:
            if(whichOption == 0){
                sceneNum = 2;
            }else{
                sceneNum = 0;
            }
        break;

        case 2:
            if(whichOption == 0){
                sceneNum = 3;
            }else{
                sceneNum = 4;
            }
        break;

        case 3:
            if(whichOption == 0){
                sceneNum = 0;
            }else{
                sceneNum = 0;
            }
        break;

        case 4:
            if(whichOption == 0){
                sceneNum = 0;
            }else{
                sceneNum = 0;
            }
        break;
    }
    updateText();
}


//change the text on screen based on which scene we are on
function updateText(){
    sceneTextEle.innerHTML = textForScene[sceneNum];
    optionsTextEle[0].innerHTML = textForOption0[sceneNum];
    optionsTextEle[1].innerHTML = textoForOption1[sceneNum];
}

startGame();
