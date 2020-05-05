var Gamestate, database, game, player, form, playercount;

function setup(){
    createCanvas(500,500);
    database=firebase.database();
   game=new Game();
   game.getstate();
   game.start();
}


function draw(){
    background("white");

}



