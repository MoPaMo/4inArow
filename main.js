$(function () {
    audioEnabled=true;
    player = true;
    $("#selectBar .col").click(function () {
      id = $(this).index() + 1;
      notbroken = true;
      for (var i = 6; i > 1; i--) {
        elem = $(".row:nth-child(" + i + ") .col:nth-child(" + id + ")");
        if (elem.attr("data-clicked") != "true") {
          elem.html((player) ? 'a' : 'b');
          elem.attr("data-clicked", "true");
          notbroken = false;
          break;
        }

      }
      if (!notbroken) {
        if(audioEnabled){
            audio = new Audio("drop_002.ogg");
            audio.play()}
        player = !player;
      }//
      else {
          if(audioEnabled){
        audio = new Audio("error_008.ogg");
        audio.play()}

      }
      ;
    });

  });