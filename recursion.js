// recursion.js
// sum of an array, exponent, Fibonacci, binary search, merge sort

var sum_arr = function(arr) {
  var total = 0;
  for(var i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

var sum_arr_rec = function(arr) {
  if(arr.length == 1) {
    return arr[0];
  } else {
    return arr[0] + sum_arr_rec(arr.slice(1));
  }
}

var exp = function(base, exponent) {
  if(exponent == 0) {
    return 1;
  }

  return (base * exp(base, (exponent - 1)));
}

var exp2 = function(base, exponent) {
  if(exponent == 0) {
    return 1;
  }
  if(exponent == 1) {
    return base;
  }
  return exp2(base, Math.floor(exponent / 2)) * exp2(base, Math.ceil(exponent / 2));
}

var fib_iter = function(num) {
  if(num == 1) {
    return [0];
  }
  if(num == 2) {
    return [0, 1];
  }

  fib_sequence = [0, 1];

  for(var i = 2; i < num; i++) {
    fib_sequence[i] = fib_sequence[i - 1] + fib_sequence[i - 2];
  }

  return fib_sequence;
}

var fib_rec = function(num) {
  if (num == 1) {
    return [0];
  }
  else if (num == 2) {
    return [0, 1];
  }
  else {
    rest = fib_rec(num - 1);
    one_more = rest[(rest.length - 1)] + rest[(rest.length - 2)];
    rest.push(one_more);
    return rest;
  }
}

var bsearch = function(array, target) {

  if ( (array.length == 1) && (array[0] != target) ){
    return -1;
  }
  else if (array[Math.floor(array.length / 2)] == target) {
    return Math.floor(array.length / 2);
  }
  else if (target < array[Math.floor(array.length / 2)]) {
    index = bsearch(array.slice(0, Math.floor(array.length / 2)), target);
    return (index == -1 ? -1 : index);
  }
  else if (target > array[Math.floor(array.length / 2)]) {
    index = bsearch(array.slice(Math.ceil(array.length / 2)), target);
    return (index == -1 ? -1 : Math.ceil(array.length / 2) + index);
  }

}



// Scripts
// console.log(sum_arr([1,2,3,4]))
// console.log(sum_arr_rec([1,2,3,4]))
// console.log(exp(2, 5))
// console.log(exp(4, 4))
// console.log(exp2(2, 5))
// console.log(exp2(4, 4))
// console.log(fib_iter(10))
// console.log(fib_iter(2))
// console.log(fib_iter(1))
// console.log(fib_rec(10))
// console.log(fib_rec(2))
// console.log(fib_rec(1))
console.log(bsearch( [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1) )
console.log(bsearch( [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2) )
console.log(bsearch( [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3) )
console.log(bsearch( [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4) )
console.log(bsearch( [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5) )
console.log(bsearch( [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 6) )
console.log(bsearch( [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7) )
console.log(bsearch( [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 8) )
console.log(bsearch( [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 9) )
console.log(bsearch( [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10) )
console.log(bsearch( [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0) )
console.log(bsearch( [1, 3, 5, 7, 9, 11, 13, 15], 1) )
console.log(bsearch( [1, 3, 5, 7, 9, 11, 13, 15], 3) )
console.log(bsearch( [1, 3, 5, 7, 9, 11, 13, 15], 5) )
console.log(bsearch( [1, 3, 5, 7, 9, 11, 13, 15], 7) )
console.log(bsearch( [1, 3, 5, 7, 9, 11, 13, 15], 9) )
console.log(bsearch( [1, 3, 5, 7, 9, 11, 13, 15], 11) )
console.log(bsearch( [1, 3, 5, 7, 9, 11, 13, 15], 13) )
console.log(bsearch( [1, 3, 5, 7, 9, 11, 13, 15], 15) )
console.log(bsearch( [1, 3, 5, 7, 9, 11, 13, 15], 16) )