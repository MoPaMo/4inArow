$(function () {
  audioEnabled = true;
  player = true;
  function gBP(row, col) {
    //getElementByPosition
    return $(".row:nth-child(" + col + ") .col:nth-child(" + row + ")");
  }
  function checkVictory(){
    for(var i=1;i<=8;i++){
      console.log(gBP(2,i+1))
      if(gBP(2,i+1).attr("data-clicked")=="a"){
        console.log("a=a")
      }
    }
  }
  $(".col").attr("data-clicked","f")
  $("#selectBar .col").click(function () {
    id = $(this).index() + 1;
    notbroken = true;
    for (var i = 6; i > 1; i--) {
      elem = $(".row:nth-child(" + i + ") .col:nth-child(" + id + ")");
      if (elem.attr("data-clicked") == "f") {
        elem.html(player ? "a" : "b");
        elem.attr("data-clicked", (player ? "a":"b" ));
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
