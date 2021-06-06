class Form{

    constructor(){

        this.input = createInput("Name");

        this.button = createButton('Play');

        this.greeting = createElement('h2');
    }   

    hide(){

        this.greeting.hide();
        this.button.hide();
        this.input.hide();

    }

    display(){

        var title = createElement('h1');
        title.html("Car Racing Game");
        title.position(displayWidth/2- 50, 0);

        
        this.input.position(displayWidth/2 - 25, 300);
        
        
        this.button.position(displayWidth/2 - 25, 350);

        

        this.button.mousePressed(() =>{

            player.name = this.input.value();
            playerCount += 1;

            player.index = playerCount;

            player.update();
            player.updateCount(playerCount);

            this.greeting.html("Hello!, " + player.name);
            this.greeting.position(displayWidth/2 - 50, 200);

        });

    }

}