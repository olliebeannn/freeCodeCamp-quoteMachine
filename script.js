$(document).ready(function() {
  //Load initial quote
  getQuote();

  //Set background colour
  setRandomBgColour();

  //Click handler for New Quote button
  $('.quote--nextQuoteButton').on("click", getQuote);
});

function getQuote() {
  $.ajax({
    url: "http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=successCallback",
    dataType: 'jsonp'
  });
}

//Callback function for JSONP request
function successCallback(data) {
  console.log(data);

  //Set quote text
  $('.quote--text').html("'" + data.quoteText + "'");

  //Set quote attribution; set to anonymous if none
  var quoteAttribution = "–Anonymous";
  if(data.quoteAuthor) {
    quoteAttribution = "–" + data.quoteAuthor;
  }
  $('.quote--author').html(quoteAttribution);

  //Update the tweet button link
  var tweetLink = "https://twitter.com/intent/tweet?hashtags=quotes&text="
  var tweetText = "\"" + data.quoteText + "\" " + quoteAttribution;
  tweetLink = tweetLink + encodeURI(tweetText);
  $('.quote--tweetButton').attr("href", tweetLink);

  setRandomBgColour();
}

//Generate random colour for bg
function setRandomBgColour() {
  var r = Math.floor(Math.random()*256);
  var g = Math.floor(Math.random()*256);
  var b = Math.floor(Math.random()*256);

  var rgbString = "rgb(" + r + "," + g + "," + b + ")";

  $('body').css("background-color", rgbString);
}
