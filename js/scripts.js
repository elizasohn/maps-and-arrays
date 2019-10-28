$(document).ready(function(){
  var numbers = [1, 2, 3, 4, 5];
  var newNumbers = numbers.map(function(number){
    return number + 1;
    console.log("hello")
  });
  alert(newNumbers);

  var words = ["what", "is", "up"];
  var wordsUp = words.map(function(word){
    return word.toUpperCase();
  });
  alert(wordsUp);
});
