var numArray = [];

var numList = function(numInput){
  for (i = 0; i <= numInput - 1; i++){
    var newNum = i + 1;
    numArray.push(newNum);
  }
  return numArray;
}


$(document).ready(function(){
  $(".result").hide();

  $(".input-form form").submit(function(event){
    var numInput = parseInt($("input#num").val());
    var resultList = numList(numInput);

    event.preventDefault();

    $("#result-list").text(resultList);
    $(".result").show();

  });
});
