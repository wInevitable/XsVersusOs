(function(objectToModify) {
  var TicTacToe = objectToModify.TicTacToe = (objectToModify.TicTacToe || {});
  
  var readline = require('readline');
  var reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  var HumanPlayer = TicTacToe.HumanPlayer = function(name, symbol) {
    this.name = name;
    this.symbol = symbol;
  };
  
  HumanPlayer.prototype.turnOffReader = function() {
    reader.close();
  };
  
  HumanPlayer.prototype.getMove = function(board) {
    reader.question("Please enter the coordinate for your move, row first: ", function(response) {
      var row = parseInt(response);
      reader.question("Column: ", function(response) {
        var col = parseInt(response);
        return [row, col];
      })
    })
  };
  
})(this);

module.exports = this.TicTacToe;