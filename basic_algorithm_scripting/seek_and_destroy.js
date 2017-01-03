/*

You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

    Arguments object https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments

    Array.prototype.filter() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

*/

function destroyer(arr) {
  // Remove all the values
  var newArr = [];
  var args = Array.prototype.slice.call(arguments);
  
  function check(el){
    for(var i = 1; i < args.length; i++){
      if(el === args[i]){
        return false;
      } 
    }
    return true;
  }
  
  newArr = arguments[0].filter(check);
  return newArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3); // should return [1, 1].
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3); // should return [1, 5, 1].
destroyer([3, 5, 1, 2, 2], 2, 3, 5); // should return [1].
destroyer([2, 3, 2, 3], 2, 3); // should return [].
destroyer(["tree", "hamburger", 53], "tree", 53); // should return ["hamburger"]. 