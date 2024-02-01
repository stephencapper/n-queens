/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  var solution = new Board({'n': n});

  var helper = function (count) {
    var row = count; // set a row counter

    if (count === n) { //return if the board is at n limit
      return true;
    }
    for (var i = 0; i < n; i++) {
      solution.togglePiece(row, i); //set pieces onto the board and increase the count once a piece has been added
      count++;

      if (!solution.hasAnyRooksConflicts(row, i)) { // recursive function of adding pieces when thewre are no conflicts
        if (helper(count)) {
          return true;
        }
      }
      solution.togglePiece(row, i); //untoggle the piece, and return count until it works
      count--;
    }
  };
  helper(0);

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution.rows();
};

window.findNRooksSolution = function(n) {
  var board = new Board({'n': n});
  var solution = board

  // One function that solves at a node or checks at a node - this function is hasAnyRooksConflicts
  // One function that iterates through the given trees, with the ability to stop if there is a conflict

  var helper = function (board, count) {
    if (count === n) {
      return;
    }

    for (var i = 0; i < n; i++) {
      board.togglePiece(rowIndex, columnIndex)
    }

  }
    //Given previous board state and row counter
    //Iterating n times with var i
      //Make a copy of the previous board
      //add a 1 at the ith column index of next row
      //check for conflicts
        //if so end this branch (i.e. return / return something)
      //check if we are in the final row
        //if so pass copy of Board to solution or return as solution
      //otherwise (not in final row)
        //call this function on the copied board and updated row counter


  helper(board, 0);

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));

  return board.rows();
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};


//Previous pseudoCode for recursive strategy for solving counting all solutions
    //Given previous board state and row counter
    //Iterating n times with var i
      //Make a copy of the previous board
      //add a 1 at the ith column index of next row
      //check for conflicts
        //if so end this branch (i.e. return / return something)
      //check if we are in the final row
        //if so pass copy of Board to solution or return as solution
      //otherwise (not in final row)
        //call this function on the copied board and updated row counter