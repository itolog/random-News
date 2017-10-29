$(document).ready(function(){
  var content = $('.content');
//bg change
  function bgChange(){
    $("body").css({
      'background':'#'+Math.random().toString(16).substr(-6),
      "color": '#'+Math.random().toString(16).substr(-6),
      'transition': "3s"
    });
  }
  //qute random
  function quoteRandom(){
     //get qute
var flickerAPI = "https://newsapi.org/v1/articles?source=bbc-sport&sortBy=top&apiKey=ade9cba62b17417d910b2f0cb1c0f8f9";
  $.getJSON( flickerAPI, {
    format: "json"
  })
    .done(function( data ) {
    var dataArticles = data.articles;
     var items = [];
    var random = Math.floor(Math.random() * (10 - 1)) + 1;
  $.each( dataArticles, function( key, val ) {
    items.push( "<p>" + val.title +"</br>"+val.description +"</span>" );
    
  }); 
    //random
    var randomItem = items[random];
    $( "<div/>", {
    "class": "my-new-list",
    html: randomItem
  }).appendTo(content);
    });
  }
  //function clear content
  function clear(){
    content.empty();
  }
  // click function
  $('#btn-gen').on('click', function(){
   clear();
   bgChange();
   quoteRandom();
  });
  
 //end ready
});