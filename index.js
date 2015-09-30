$(document).ready(function(){
  var $body = $('body');

  var index = streams.home.length - 1;
  while(index >= 0){
    var tweet = streams.home[index];
    var $tweet = $("<h2 class='tweets'><span class='userName'>" +
      tweet.user + "</span>" + tweet.message + "</h2>");
    var $timeStamp = $("<h3 class='timeStamp'></h3>")
    $timeStamp.text(tweet.created_at);
    $timeStamp.appendTo($('.allTweets'));
    $tweet.appendTo($('.allTweets'));
    index -= 1;
  }

});
