$(function() {
    $(".draggable").draggable({
      containment: "#container",
      zIndex: 1000,
    });
  
    $("#square1, #square2").droppable({
      drop: function(event, ui) {
        var $target = $(event.target);
        var $draggable = ui.draggable;
  
        var tempTop = $target.position().top;
        var tempLeft = $target.position().left;
  
        $target.css({
          top: $draggable.position().top,
          left: $draggable.position().left
        });
  
        $draggable.css({
          top: tempTop,
          left: tempLeft
        });
      }
    });
  });
  