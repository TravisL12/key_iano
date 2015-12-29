var noteDown = function(key){
  var note = keyDict[key];
  if (note.sound) {
    note.sound.play();
  }
  $('#' + note.key).addClass('keydown');
}

var noteUp = function(key){
  $('#' + keyDict[key].key).removeClass('keydown');
}

$(document).ready(function(){
  $('body').keydown(function(e) {
    e.preventDefault();
    noteDown(e.keyCode);
  }).keyup(function(e){
    noteUp(e.keyCode);
  });
})
