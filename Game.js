var humanPlayerModule = require('./HumanPlayer');
var computerPlayerModule = require('./ComputerPlayer');
var boardModule = require('./Board');

(function(objectToModify){
  var TicTacToe = objectToModify.TicTacToe = (objectToModify.TicTacToe || {});
  
  var Game = TicTacToe.Game = function (player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.board = new boardModule.Board(this);
  };
  
  Game.prototype.run = function(player1Turn) { 
    if(!this.over()) {
      this.board.render();
      
      if(player1Turn) {
        var move = this.player1.getMove(this.board);
        if (this.board.validMove(move)) {
          this.board.makeMove(move, this.player1.symbol);
          this.run(false);
        }
        else {
          console.log('Invalid Move. Try Again.');
          this.run(true);
        }
      }
      else {
        var move = this.player2.getMove(this.board);
        if (this.board.validMove(move)) {
          this.board.makeMove(move, this.player2.symbol);
          this.run(true);
        }
        else {
          console.log('Invalid Move. Try Again.');
          this.run(false);
        }
      }
    } else {
      console.log("YOU ARE WINNER!");
      this.player1.turnOffReader();
    }
  };
  
  Game.prototype.over = function() {

    return false;
  };
  
})(this)

// Setup
var humanPlayer = new humanPlayerModule.HumanPlayer("Will", 'X');
var computerPlayer = new computerPlayerModule.ComputerPlayer('O');
var game = new this.TicTacToe.Game(humanPlayer, computerPlayer);

// Run the game!
game.run(true);