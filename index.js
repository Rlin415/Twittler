$(document).ready(function(){

  var $header = $('h1');
  var $allTweets = $('.allTweets');
  var $selectedUsr = $('.selectedUsr');


  var index = streams.home.length - 1;
  while(index >= 0){
    var tweet = streams.home[index];
    var $tweet = $("<h2 class='tweets'><span class='userName'>@" +
      tweet.user + "</span>: " + tweet.message + "</h2>");
    var $timeStamp = $("<h3 class='timeStamp'></h3>")
    $timeStamp.text(tweet.created_at);
    $timeStamp.appendTo($allTweets);
    $tweet.appendTo($allTweets);
    index -= 1;
  }

  var $userName = $('.userName');
  var currUser;
  $userName.click(function(event) {
    $header.attr('hidden', true);
    $selectedUsr.attr('hidden', false);
    currUser = event.target.innerText;
    currUser = currUser.slice(1).toString();
    $selectedUsr.text(currUser);
    $allTweets.attr('hidden', true);
    showUserTimeline();
  });

  function showUserTimeline() {
    
  }

});
