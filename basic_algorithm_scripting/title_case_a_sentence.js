/*

Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

    String.prototype.split() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split

*/

function titleCase(str) {
  var arr,
      newArr = [],
      result;
  
  str = str.toLowerCase();
  arr = str.split(" ");
 
  for(var i = 0; i < arr.length; i++){
   newArr.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1)); 
  }
  
  result = newArr.join(" ");
  
  return result;
}


titleCase("I'm a little tea pot"); // should return "I'm A Little Tea Pot".
titleCase("sHoRt AnD sToUt"); // should return "Short And Stout".
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"); // should return "Here Is My Handle Here Is My Spout".
