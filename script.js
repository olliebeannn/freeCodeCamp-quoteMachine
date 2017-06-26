$(document).ready(function() {
  getQuote();

  $('.quote--nextQuoteButton').on("click", getQuote);
});

function getQuote() {
  //URL to make AJAX request for a new quote
  //http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en
  $.ajax({
    url: "http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=successCallback",
    dataType: 'jsonp'
  });
}

function successCallback(data) {
  console.log(data);

  $('.quote--text').html("'" + data.quoteText + "'");
  $('.quote--author').html(data.quoteAuthor);
}
