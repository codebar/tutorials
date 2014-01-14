function getGithubInfo(user) {
  xmlhttp=new XMLHttpRequest();
  xmlhttp.open("GET","https://api.github.com/users/"+user,false);
  xmlhttp.send();
  return xmlhttp;
}

function showUser(user) {
  $('#profile .information').show();
  $('#profile .avatar').show();
  $('#profile h2').html(user.login + " is GitHub user #" + user.id);
  $('#profile .information').html("<a class='profile' href='"+user.html_url+"'> Go to "+ user.name+"'s profile</a>");
  $('#profile .avatar').html("<img src=https://gravatar.com/avatar/"+ user.gravatar_id+"?s=220/>");
}

function noSuchUser(username) {
  $('#profile h2').html("No user " + username);
  $('#profile .information').hide();
  $('#profile .avatar').hide();
}

$(document).ready(function(){
  $(document).on('keypress', '#username', function(e){
    if (e.which == 13) {
      username = $(this).val();
      $(this).val("");

      response = getGithubInfo(username);

      if (response.status == 200) {
        showUser(JSON.parse(response.responseText));
      } else {
        noSuchUser(username);
      }
    }
  })
});
