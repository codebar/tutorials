/* Exercise 2: Color picker */

var colors = [ "22ac5e", "d68236", "71b5c2", "af2655", "b34de7", "e6bd01", "104393", "ca4d94", "4a772d", "c180a7", "958112", "8d2f8d" ]

function setPreviewColor(color) {
  $('.preview').css('background-color', color);
  $('.color-code').text($('.preview').css('background-color'));
}

function addBox(color) {
  $('#colors').prepend("<div class='item' style='background-color: " + color + ";'><div>");
}


$(document).ready(function(){
  $.each(colors, function(index, color) {
    addBox(color);
  });

  setPreviewColor(colors[Math.floor(Math.random()*colors.length)]);

  $(document).on('keydown keyup keypress', '#color', function(){
    color = $(this).val();
    setPreviewColor(color);
  })

  $(document).on('click','#add-to-favorite', function(){
    var color = $('#color').val();
    if ($("#colors .item").length == 16) {
      $('#colors .item').last().remove();
    }
    addBox(color);
    $("#color").val("");
    $("#color").focus();
  })

  $(document).on('click','.item', function(){
    setPreviewColor($(this).css('background-color'));
  })
});
