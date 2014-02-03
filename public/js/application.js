var noteDown = function(key){
  $('#' + keyDict[key]).addClass('keydown');
}

var noteUp = function(key){
  $('#' + keyDict[key]).removeClass('keydown');
}

$(document).ready(function(){
  $( "body" ).keydown(function(e) {
    e.preventDefault();
    noteDown(e.keyCode);
  }).keyup(function(e){
    noteUp(e.keyCode);
  });
})
