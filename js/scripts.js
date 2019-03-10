var numArray = [];

var numList = function(numInput){
  for (i = 0; i <= numInput - 1; i++){
    var newNum = i + 1;
    numArray.push(" " + newNum);
  }

  numArray.forEach(function(arrayItem){
    if (arrayItem % 15 === 0){
      numArray.splice(arrayItem - 1, 1, ' pingpong');
    } else if (arrayItem % 5 === 0){
      numArray.splice(arrayItem - 1, 1, ' pong');
    } else if (arrayItem % 3 === 0){
      numArray.splice(arrayItem - 1, 1, ' ping');
    }
  });

  return numArray;
}





$(document).ready(function(){
  $(".result").hide();

  $(".input-form form").submit(function(event){
    numArray = [];
    var numInput = parseInt($("input#num").val());
    var resultList = numList(numInput);

    event.preventDefault();

    $("#result-list").text(resultList);
    $(".result").show();
  });
});
