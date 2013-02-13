// multiples, my_each, inject(with a function)

var multiples = function(array, multiple) {
  var new_array = [];

  for(var i = 0; i < array.length; i++){
    new_array[i] = array[i] * multiple;
  }

  return new_array
};

var my_each = function(array, func) {
  for(var i = 0; i < array.length; i++) {
    func(array[i]);
  }
};

// initial_val is optional (MORE optional than any other arg, that is.)
var inject = function(array, func, initial_val) {
  if (initial_val == undefined){
    var result = array[0];
    var i = 1;
  }else{
    var i = 0;
    var result = initial_val;
  }
  
  // you can simplify the above with an or, like so:
  // var result = initial_val || array[0];
  // possibly. then you still have to take care of the
  // i. but that could be a one-liner too using a
  // ternary operator.
  
  
  for(i; i < array.length; i++){
    result = func(result, array[i]);
  }
  return result;
};



// Scripts
// console.log(multiples([1, 2, 3, 4, 5], 2))
// console.log(my_each([1, 2, 3, 4, 5, 6], console.log))
console.log(inject([1,2,3,4], function(res,el){ return (res+el);}))
