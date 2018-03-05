$(function(){
  //document ready
  alert("document ready");

  $("#searchform").submit(function(){
    addItemToList("example itme");
    return false;
  });
});

function addItemToList (item){
  $("#results").append("<li>" + item + "</li>");
}
