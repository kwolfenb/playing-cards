
$(document).ready(function(event) {
  // event.preventDefault();

  var suits = ["diamonds", "spades", "hearts", "clubs"]
  var values = ["ace", 2, 3, 4, 5, 6, 7, 8, 9, "Jack", "Queen", "King"]


 values.forEach(function(value){
  suits.forEach(function(suit) {
    $(".list").text(suit + "of" + value);


  });
});


  });
