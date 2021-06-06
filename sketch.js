var database;
var backGroundImage;
var gameState = 0;
var playerCount;
var form, player, game;
var distance = 0;
var allPlayers;
var canvas;
function setup(){

    database = firebase.database();

    canvas = createCanvas(displayWidth, displayHeight);

    game = new Game();

    game.getState();
    game.start();

}

function draw(){

    background("white");

    if(playerCount === 4){

        game.update(1);

    }

    if(gameState === 1){

        clear(); 
        game.play();

    }

    }

