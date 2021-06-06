class Game {

    constructor(){

        

    }

    getState(){

        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function(data){

            gameState = data.val();

        })

    }

    update(state){

        database.ref('/').update({

            gameState : state

        });

    }

    start(){

        if(gameState === 0){

            player = new Player();
            player.getCount();

            form = new Form();
            form.display();

        }

    }

    play(){

        form.hide();

        textSize(20);
        text("Game Start", displayWidth/2 - 20, 100); 

        Player.getPlayerInfo();

        if(allPlayers !== undefined){

            var displayPosition = 130;
            for(var plr in allPlayers){

                if(plr === "player" + player.index){

                    fill("red");

                }
                else{

                    fill("black");

                }

                displayPosition = displayPosition + 30;

                text(allPlayers[plr].name + ": " + allPlayers[plr].distance, displayWidth/2-100, displayPosition);

            }

        }

        if(keyIsDown(UP_ARROW) && player.index !== null){

            player.distance += 50;
            player.update();

        }

    }

}