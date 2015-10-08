var toggle = true;
var selector = "";
var list = [];
function updateRank(){
  $('.badge').each(function(i){
      $(this).text(i+1);
  });
  drop();
}
function clearAnimation(){
	$('#list-group-item').removeClass('bounce');
}
function sound(a){
	selector = a;
	clearAnimation();
  $('#pick').trigger('pause');
  $('#pick').prop("currentTime",0);
  $('#pick').trigger('play');
}
function submit(){
	$('#coin').trigger('pause');
  $('#coin').prop("currentTime",0);
  $('#coin').trigger('play');
	$('.name').each(function(){
    	list.push($(this).text());
	});
	$('#main').hide(500);
	$('#results').show(500);
}
function drop(){
  $('#drop').trigger('pause');
  $('#drop').prop("currentTime",0);
  $('#drop').trigger('play');
}
$(function() {
  $( "#sortable" ).sortable({
    update:updateRank,
    cursor:'move',
  });
  $( "#sortable" ).disableSelection();
});
function mute(){
	if(toggle == true){
		$("#music").prop("muted", true);
		toggle = false;
	}else{
		$("#music").prop("muted", false);
		toggle = true;
	}
}