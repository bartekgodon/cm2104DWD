$(function(){
  //document ready
  alert("document ready");

  $("#searchform").submit(function(){
    var searchterms = $("#searchterms").val();
    getResultsFromOMDB(searchterms);
    return false;
  });
});

function getResultsFromOMDB(searchterms){
  var url = "http://www.omdbapi.com/?i=tt3896198&apikey=4dee5aa2&s=" + searchterms;

  $.getJSON(url, function(jsondata){
    addResultTitles(jsondata);
  });

function addResultTitles(jsondata){
  var htmlstring = "";

  for(var i = 0; i < 10; i++){
    var title = jsondata.Search[i].Title;
    htmlstring += "<li>" + title + "</li>";
  }
  $("#results").html(htmlstring);
}

function prettyPrintJSON(jsondata){
  var normal = JSON.stringify(jsondata, null, 4);
  $("#resultsbox").append("<pre>"+normal+"</pre>");
}
}
