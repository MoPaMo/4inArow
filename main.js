$(function () {
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
        player = !player;
      }//
      else {
        $("html,body").animate({ backgroundColor: "red" }, "fast")
        //$("html,body").animate({backgroundColor:"white"},200)

      }
      ;
    });

  });