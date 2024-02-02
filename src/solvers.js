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
  higherOrderSolution(solution, n, 0, solution.hasAnyRookConflictsOn, findNSolutionCallback);
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution.rows();
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solution = new Board({'n': n});
  var solutionCount = 0;
  higherOrderSolution(solution, n, 0, solution.hasAnyRookConflictsOn, function () {
    solutionCount++;
    return;
  });
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = new Board({'n': n});
  higherOrderSolution(solution, n, 0, solution.hasAnyQueensConflicts, findNSolutionCallback);
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution.rows();
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solution = new Board({'n': n});
  var solutionCount = 0;
  higherOrderSolution(solution, n, 0, solution.hasAnyQueenConflictsOn, function () {
    solutionCount++;
    return;
  });
  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};


//Helper & Higher Order Functions
var findNSolutionCallback = function() {
  return true;
};

window.higherOrderSolution = function(solution, n, row, conflictFunction, callback) {
  if (row === n) {
    return callback();
  }
  for (var i = 0; i < n; i++) {
    solution.togglePiece(row, i);
    if (!conflictFunction.call(solution, row, i)) {
      if (higherOrderSolution(solution, n, row + 1, conflictFunction, callback)) {
        return true;
      }
    }
    solution.togglePiece(row, i);
  }
};