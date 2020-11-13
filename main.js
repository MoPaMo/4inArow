$(function () {
  audioEnabled = true;
  player = true;
  function gBP(i, id) {
    //getElementByPosition
    return $(".row:nth-child(" + i + ") .col:nth-child(" + id + ")");
  }
  function e(row, col) {
    return gBP(row + 1, col).attr("data-clicked");
  }
  $(".col").attr("data-clicked", "f");
  function checkVictory() {
    //loop over rows
    /*
 row|-----|----|
    |-----|----|
    |-----|----|
    
    */
    for (var row = 1; row <= 5; row++) {
      for (var col = 1; col <= 8; col++) {
        if (e(row, col)!="f") {
          //field is set yet
          //
          if (col<6&&e(row, col) == e(row, col + 1)&&e(row, col + 1)==e(row, col + 2)&&e(row, col + 2)==e(row, col + 3)) {
            console.log(e(row, col));

            gBP(row+1,col).css("backgroundColor","red")
            gBP(row+1,col+1).css("backgroundColor","red")
            gBP(row+1,col+2).css("backgroundColor","red")
            gBP(row+1,col+3).css("backgroundColor","red")

          }
        }
      }
    }
  }
  
  $("#selectBar .col").click(function () {
    id = $(this).index() + 1;
    notbroken = true;
    for (var i = 6; i > 1; i--) {
      elem = $(".row:nth-child(" + i + ") .col:nth-child(" + id + ")");
      if (elem.attr("data-clicked") == "f") {
        elem.html(player ? "a" : "b");
        elem.attr("data-clicked", player ? "a" : "b");
        notbroken = false;
        break;
      }
    }
    if (!notbroken) {
      if (audioEnabled) {
        audio = new Audio("drop_002.ogg");
        audio.play();
      }
      if (checkVictory()) {
      } else {
        player = !player;
      }
    } //
    else {
      if (audioEnabled) {
        audio = new Audio("error_008.ogg");
        audio.play();
      }
    }
  });
});
