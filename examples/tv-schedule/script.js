function formatDate(start, end) {
  start_date = new Date(start);
  end_date = new Date(end);

  day = start_date.getDate();
  month = start_date.getMonth() + 1;
  year = start_date.getFullYear();

  start_hour = start_date.getHours();
  start_mins = start_date.getMinutes();

  end_hour = end_date.getHours();
  end_mins = end_date.getMinutes();

  date = day + "/" + month + "/" + year + " ";
  date +=  ("0"+start_hour).slice(-2) + ":" + ("0"+start_mins).slice(-2) + " - " +
           ('0' + end_hour).slice(-2) + ":" +  ( "0" + end_mins).slice(-2);
  return date;
}

function getGenres() {
  $.ajax({
    url: "http://www.bbc.co.uk/tv/programmes/genres.json"
  }).done(function(data) {
    console.log(data);
    $.each(data.categories, function(index, item) {
      $('#genres').append("<li id='"+ item.key +"'>" + item.title + "</li>");
    })
  }).fail(function() {
    console.log("something went wrong");
  });
}

function getTomorrowsSchedule(genre) {
  $.ajax({
    url: "http://www.bbc.co.uk/tv/programmes/genres/"+genre+"/schedules/tomorrow.json",
    dataType: 'json',
    beforeSend: function() {
      $("#programmes").empty();
      $("#programmes").append("<div class='spinner'><img src='spinner.gif' /></div>");
    }
  }).done(function(data) {
    $(".spinner").remove();
    if (data.broadcasts.length > 0) {
      $.each(data.broadcasts, function(index, episode) {
        $("#programmes").append(processEpisode(episode));
      })
    } else {
      $("#programmes").append("<div class='no-programmes'>No programmes under " + genre + "</div>");
    }
  }).fail(function() {
    console.log("something went wrong");
  });
}

function getUpcomingEpisodes(pid) {
  $.ajax({
    url: "http://www.bbc.co.uk/programmes/" + pid + "/episodes/upcoming.json",
    beforeSend: function() {
      $("#programmes").empty();
      $("#programmes").append("<div class='spinner'><img src='spinner.gif' /></div>");
    }
  }).done(function(data) {
    $(".spinner").remove();

    $.each(data.broadcasts, function(index, episode) {
      $("#programmes").append(processEpisode(episode));
    })
  }).fail(function() {
    console.log("something went wrong");
  });
}

function processEpisode(episode) {
  item_html = "<li><h2>" + episode.programme.display_titles.title + "</h2>";
  item_html += "<h3>" + episode.programme.short_synopsis + "</h3>";

  if (episode.programme.image) {
    item_html += "<img src=http://ichef.bbci.co.uk/images/ic/272x153/"+ episode.programme.image.pid +".jpg />";
  } else {
    item_html += "<img src='http://placehold.it/272x153' />";
  }

  item_html += "<p>" + formatDate(episode.start, episode.end)+ "</p>";
  item_html += "<p> <strong>Duration: </strong>" + episode.duration/60 + " minutes</p>";

  if (episode.programme.position) {
    pid = episode.programme.programme.pid;
    item_html += "<a class='view-more' id=" + pid +" href='#'> View all upcoming " + episode.programme.display_titles.title + "</a>";
  }

  item_html += "<span class='service'>" + episode.service.title + "</span></li>";

  return item_html;
}


$(document).ready(function(){
  $(document).on('click', '#genres li', function(e){
    genre = $(this).attr('id');
    $("#genres li").removeClass('active');
    $(this).addClass('active');

    getTomorrowsSchedule(genre);
  })

  $(document).on('click', '.view-more', function(e){
    pid = $(this).attr('id');

    getUpcomingEpisodes(pid);
  })

  getGenres();
});
