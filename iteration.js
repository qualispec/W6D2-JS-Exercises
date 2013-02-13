// iteration.js
// bubble sort, substrings

var bubble_sort = function(array){

  var sorted = false;

  while(!sorted) {

    sorted = true;

    for(var i = 0; i < array.length-1; i++){
      if(array[i] > array[i + 1]) {
        var temp = array[i + 1];
        array[i + 1] = array[i];
        array[i] = temp;

        sorted = false;
      }
    }
  }
  return  array
};

var substrings = function(word, dictionary){

  var strings = [];

  for(var start = 0; start < word.length; start++) {
    for(var end = start; end < word.length; end++) {
      subword = word.slice(start, end);
      if((dictionary.indexOf(subword) > -1) && (strings.indexOf(subword) == -1)) {
        strings.push(subword);
        
        // nice touch with the dictionary!
      }
    }
  }
  return strings;
}




console.log(["a","b"]+"c")
// Scripts
dictionary = ["an","a","pan","ma"];
// console.log(bubble_sort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]))
console.log(substrings("panama", dictionary))
