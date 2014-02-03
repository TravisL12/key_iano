var noteDown = function(key){
  $('#' + keyDict[key].val + " audio")[0].play();
  $('#' + keyDict[key].val).addClass('keydown');
}

var noteUp = function(key){
  $('#' + keyDict[key].val).removeClass('keydown');
}

$(document).ready(function(){
  $( "body" ).keydown(function(e) {
    e.preventDefault();
    noteDown(e.keyCode);
  }).keyup(function(e){
    noteUp(e.keyCode);
  });
})
