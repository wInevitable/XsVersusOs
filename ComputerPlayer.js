(function(objectToModify){
  var TicTacToe = objectToModify.TicTacToe = (objectToModify.TicTacToe || {});
  
  var ComputerPlayer = TicTacToe.ComputerPlayer = function(symbol) {
    this.name = "Robot 5000";
    this.symbol = symbol;
  };
  
  ComputerPlayer.prototype.turnOffReader = function() {
    //do nothing. I don't read!!!
  };
  
  ComputerPlayer.prototype.getMove = function(board) {
    // Can I win with one move?
    var winning_position = board.winningMoveFor(this.symbol);
    if(winning_position) {
      return winning_position;
    } else {
      return board.anyEmptySpot();
    }
  };
  
})(this);

module.exports = this.TicTacToe;