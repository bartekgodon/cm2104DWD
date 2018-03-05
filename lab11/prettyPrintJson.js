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
    prettyPrintJSON(jsondata);
  });

  function prettyPrintJSON(jsondata){
    var normal = JSON.stringify(jsondata, null, 4);
    $("#resultsbox").append("<pre>"+normal+"</pre>");
  }
}
