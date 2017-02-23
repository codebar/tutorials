/* Exercise 1: Wish list */
var wishes = [ "learn how to use JQuery", "build a website", "go to Japan" ]

function addToList(item) {
  $('ol#items').append("<li>" + item + "<span class='label pending'>Pending</span></li>");
}

function updateTotal() {
  completed = $('.success').length;
  pending = $('.pending').length;

  if (completed > 0 || pending > 0) {
    $('.total').text(" Pending: " + pending + " Completed: " + completed);
  }
}

$(document).ready(function(){
  wishes.forEach(function(element) {
    addToList(element);
  });
  updateTotal();

  $(document).on('click','#add-to-list',function(){
    item = $("#item").val();

    $("#item").val(""); /* clear value */
    $("#item").focus();

    addToList(item);
    updateTotal();
  });

  $(document).on('click','.pending',function(){
    $(this).parent().append("<span class='label success'>Done!</span>");
    $(this).parent().attr("class", 'completed');
    $(this).remove();
    updateTotal();
  });
});
