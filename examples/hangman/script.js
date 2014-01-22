function newGame() {
  $.ajax({
    type: "POST",
    url: "http://hangman-api.herokuapp.com/hangman",
  }).done(function(data) {
    $('.hangman-word').text(data.hangman);
    $('.token').text(data.token);
  }).fail(function(data) {
    console.log(data)
  });
}

function guess(token, letter) {
  $.ajax({
    type: "PUT",
    dataType: 'json',
    url: "http://hangman-api.herokuapp.com/hangman",
    data: { "token": token, "letter": letter},
    beforeSend: function() {
      $(".letter").prop('disabled', true);
    }
  }).done(function(data) {
    $('.hangman-word').text(data.hangman);
    $('.token').text(data.token);
    if (!data.correct) {
      failures = $('.wrong').length+1;
      handleFailure(failures);
    } else {
      if (data.hangman.indexOf("_") == -1) {
        $('.console').hide();
      }
    }
    cssClass = data.correct ? 'correct' : 'wrong';
    $('.attempts').append("<span class=" + cssClass +">"+letter+"</span>");
    $(".letter").prop('disabled', false);
  }).fail(function(data) {
    console.log(data)
  });
}

function getSolution(token) {
  $.ajax({
    type: "GET",
    dataType: 'json',
    url: "http://hangman-api.herokuapp.com/hangman",
    data: { "token": token },
  }).done(function(data) {
    var hangman_word = $('.hangman-word').text();
    var solution = data.solution;

    for (var i = solution.length-1; i >= 0; i--) {
      if (hangman_word.charAt(i) != solution.charAt(i)) {
        error_string = "<span class='error'>"+ solution.charAt(i) + "</span>";
        updated_word = hangman_word
        hangman_word = updated_word.substr(0, i) + error_string + updated_word.substr(i+1);
      } else {
        if (hangman_word.indexOf("_") == -1) {
          $('.console').hide();
        }
      }
    }
    $('.hangman-word').html(hangman_word);
  }).fail(function(data) {
    console.log(data)
  });
}

function handleFailure(failures){
  if (failures == 7) {
    var token = $('.token').text();
    getSolution(token);
    endGame();
  } else {
    wrongAnswer(failures);
  }
}

function endGame() {
  $('.remaining-guesses').hide();
  $('.console').slideToggle(1200);
    $("#new-game").show();
}

function wrongAnswer(failures) {
  $('.remaining').html(7-failures);
}

$(document).ready(function(){
  $('.console').hide();
  $('.remaining-guesses').hide();

  $(document).on('click', '#new-game', function(e){
    $(this).hide();
    $('.attempts').empty();
    $('#hangman-game').empty();
    $('.remaining-guesses').html('<span class="remaining">7</span> guesses left');
    $('.remaining-guesses').show();

    newGame();
    $('.console').slideToggle(1200);
    $('.letter').focus();
  })

  $(document).on('click', '#guess', function(e){
    token = $('.token').text();
    letter = $('.letter').val();
    attempts = $('.attempts').text().toLowerCase();

    $('.letter').focus();

    if ($.isNumeric(letter) || letter.trim().length < 1 || attempts.indexOf(letter.toLowerCase()) != -1) {
      $('.letter').addClass("error");
      return;
    }
    $('.letter').removeClass("error");
    $('.letter').val('');

    guess(token, letter);
  })
});
