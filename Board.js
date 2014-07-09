(function(objectToModify) {
  var TicTacToe = objectToModify.TicTacToe = (objectToModify.TicTacToe || {});
  
  var Board = TicTacToe.Board = function(game) {
    this.grid = [[' ', ' ', ' '],
                 [' ', ' ', ' '],
                 [' ', ' ', ' ']];
    this.game = game;
  };
  
  Board.prototype.validMove = function(coordinate) {
    
    if (this.onBoard(coordinate) && this.grid[coordinate[0]][coordinate[1]] === ' ') {
      return true;
    }
    else {
      return false;
    }
  };
  
  Board.prototype.onBoard = function(coor) {
    return (coor[0] >= 0 && coor[0] < 3 && coor[1] >= 0 && coor[1] < 3);
  }
  
  Board.prototype.makeMove = function(coordinate, symbol) {
    this.grid[coordinate[0]][coordinate[1]] = symbol;
  };
  
  Board.prototype.render = function() {
    for (var i = 0; i < this.grid.length; i++) {
      output = '';
      for (var j = 0; j < this.grid[i].length; j++) {
        output += ' ' + this.grid[i][j] + ' ';
        if (j != this.grid[i].length - 1) {
          output += '|';
        }
      } 
      console.log(output);
      if (i != this.grid.length - 1) {
        console.log('-----------');
      }
    }
  };
  
  Board.prototype.winningMoveFor = function(symbol) {
    
    for(var i=0; i<this.grid.length; i++){
      for(var j=0; j<this.grid.length; j++){
        if(this.grid[i][j] === " ") {
          //Try and see if this spot will win the game for me.
          this.grid[i][j] = symbol;
          if (this.game.over) {
            return [i, j];
          }
          else {
            this.grid[i][j] = ' ';
          }          
        }
      }
    }
    return null;
  };
  
  Board.prototype.anyEmptySpot = function() {
    possibleMoves = [];
    for(var i =0; i<this.grid.length; i++) {
      for(var j=0; j<this.grid.length; j++) {
        if (this.grid[i][j] === ' ') {
          possibleMoves.push([i, j]);
        }
      }
    }
    return possibleMoves[Math.floor(Math.random() * (possibleMoves.length - 1))];
  };
  
  Board.prototype.deepDupGrid = function() {
    var duped_board = [];
    
    for(var i=0; i<this.grid.length; i++) {
      duped_board.push(this.grid[i].slice(0));
    }
    
    return duped_board;
  };
  
})(this);

module.exports = this.TicTacToe;