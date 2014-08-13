//Initialize Phaser Engine. Create a 400x490px game!

var game = new Phaser.Game(400,490,  Phaser.AUTO, 'gameDiv');

//Create our 'main' state that will contain the game
//This is the body of the game itself
//It should contain all code related to the game itself

var mainState = {
  
  preload: funtion() {
   //This fuction will execute at the beginning 
   //Which is where we'll load our assets for the game
   
   //Set the background color of the game
   game.stage.backgroundColor = "#B01C48" 
    
  },
    create: function () {
      //This function is called right after preload function
      //This is where we set up the game assets from earlier
   },
      update: function () {
      //This function runs 60 times per second
  },
  

//Add and start the 'mainState' to start the game
game.state.add('main', mainState);
game.state.start('main');