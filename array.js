// uniq, two_sum, transpose

var uniq = function(array) {

  var results = [];

  for(var i = 0; i < array.length; i++){
    el = array[i];
    if(results.indexOf(el) == -1){
      results += el;
    };
  };
  return results;
};


var two_sum = function(array) {

  for(var i = 0; i < array.length; i++){
    if(array.indexOf(-array[i], i+1) > -1){
      return true;
    }
  }
  return false;
};

// returns a copy with the rows in the original array into columns
var transpose = function(array) {
  var num_rows = array.length;
  var num_cols = array[0].length;

  // instead of creating the blank array this way,
  // you could also use push as you do the transposition.
  // don't know if that is a better way, but it might
  // be shorter code.
  var results = new Array(num_cols);
  for(var x = 0; x < num_cols; x++){
    results[x] = new Array(num_rows);
  }

  for(var i = 0; i < num_rows; i++){
    for(var j = 0; j < num_cols; j++){
      results[i][j] = array[j][i];
    }
  }
  return results;
};







// console.log(uniq([1,2,3,4,5,3,2,6,0,0]));
// console.log(two_sum([3,6,1, 2, 3, 0, -1]))
// console.log(two_sum([1, 2, 3, 0]))
// console.log(two_sum([0]))
// console.log(two_sum([1, 0, 0]))
// console.log(two_sum([1, 3, 5, 0, 1, 0]))
// console.log([1,3,5,0,1,0].indexOf(-0,4))
// console.log([[1,2,3],[4,5,6]].length)
console.log(transpose([[1,2,3],[4,5,6],[7,8,9]]))
