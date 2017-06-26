$(document).ready(function() {
  //Load initial quote
  getQuote();

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

  if(data.quoteAuthor) {
    $('.quote--author').html("–" + data.quoteAuthor);
  } else {
    $('.quote--author').html("–Anonymous");
  }

}
