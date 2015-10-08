var toggle = true;
var selector = "";
var list = [];
var nasa= ['Two 100-pound tanks of oxygen', 'Five gallons of water', 'Stellar map', 'Food Concentrate', 'Solar powered FM receiver', '50 feet of nylon rope', 'First aid kit containing injection needles', 'Parachute silk', 'Self-inflating life raft', 'Two .45 caliber pistols', '1 case of dehydrated milk','Portable heating unit', 'Magnetic compass','Signal flares', 'Box of matches'];
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
	console.log(list)
	var y=1;
	
	for(var item in list){
		var cls = '';
		if(list[item] == nasa[item]){
			cls='success';
		}
		$('#values').append('<tr class="' +cls+ '"><td>'+list[item]+'</td><td>'+y+'</td></tr>')
		y+=1;
	}
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