// recursion.js
// sum of an array, exponent, Fibonacci, binary search, merge sort

var sum_arr = function(arr){
  var total = 0;
  for(var i = 0; i < arr.length; i++){
    total += arr[i];
  }
  return total;
}

var sum_arr_rec = function(arr){
  if(arr.length == 1){
    return arr[0];
  }else{
    return arr[0] + sum_arr_rec(arr.slice(1));
  }
}


// Script
console.log(sum_arr([1,2,3,4]))
console.log(sum_arr_rec([1,2,3,4]))