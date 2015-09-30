$(document).ready(function(){

  var $header = $('.title');
  var $allTweets = $('.allTweets');
  var $selectedUsr = $('.selectedUsr');
  var $usrTimeline = $('.usrTimeline');


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
    $header.hide();
    currUser = event.target.innerText;
    currUser = currUser.slice(1).toString();
    $selectedUsr.text('@' + currUser);
    $allTweets.hide();
    showUserTimeline();
  });

  function showUserTimeline() {
    streams.users[currUser].reverse();
    streams.users[currUser].forEach(function(usrData) {
      var $usrTweets = $("<h2 class='usrTweets'></h2>");
      var $usrTimestamp = $("<h3 class='usrTimestamp'></h3>")
      $usrTweets.text('#' + usrData.message);
      $usrTimestamp.text(usrData.created_at);
      $usrTimestamp.appendTo($usrTimeline);
      $usrTweets.appendTo($usrTimeline);
    });
  }

});
