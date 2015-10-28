var toggle = true;
var selector = "";
var list = [];
var nasa_ranks = ['Two 100 lb. tanks of oxygen', '5 gallons of water','Stellar map','Food Concentrate','Solar-powered FM receiver-transmitter','50 feet of nylon rope','First aid kit, including injection needle','Parachute silk','Self-inflating life raft','Signal flares','Two .45 caliber pistols', 'One case of dehydrated milk','Portable heating unit','Magnetic compass','Box of matches'];
$(document).ready(function(){
	document.getElementById("music").volume = 0.25;

})
var nasa ={
	'Two 100 lb. tanks of oxygen':1,
	'5 gallons of water':2,
	'Stellar map':3,
	'Food Concentrate':4,
	'Solar-powered FM receiver-transmitter':5,
	'50 feet of nylon rope':6,
	'First aid kit, including injection needle':7,
	'Parachute silk':8,
	'Self-inflating life raft':9,
	'Signal flares':10,
	'Two .45 caliber pistols':11,
	'One case of dehydrated milk':12,
	'Portable heating unit':13,
	'Magnetic compass':14,
	'Box of matches':15
};
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
	var count = 1;
	var score = 0;
	for(var val in list){
		var isWrong = '';
		var name = '';
		name = list[val];
		var difference = nasa[name] - count;
		score += Math.abs(difference);
		console.log(difference, score);
		if(list[val] == nasa_ranks[val]){
			isWrong = 'success';
		}else{
			isWrong = 'danger';
		}
		$('#your').append('<tr class='+isWrong+'><td>'+list[val]+'</td><td>'+count+'</td></tr>');
		count+=1;
	}
	console.log(score)
	$('#score').text(score);
	var text = '';
	var status = '';
	var bgstat = '';
	if(score <= 25){
		text = 'Excellent: You and your crew demonstrate great survival skills!';
		bgstat = 'bg-success';
		status = 'good';
	}else if(score >=26 && score <=32){
		text = 'Good: Above average results. Yes, you made it!';
		bgstat = 'bg-success';
		status = 'good';
	}else if(score >=33 && score <=45){
		text = 'Average: It was a struggle, but you made it in the end!';
		bgstat = 'bg-warning';
		status = 'medium';
	}else if(score >=46 && score <=55){
		text = 'Fair: At least you’re still alive, but only just!';
		bgstat = 'bg-warning';
		status = 'medium';
	}else if(score >=56 && score <=70){
		text =  'Poor: Sadly not everyone made it back to the mother ship!';
		bgstat = 'bg-danger';
		status = 'bad';
	}else if(score >= 71){
		text = 'Very poor: Oh dear, your bodies lie lifeless on the surface of the moon!';
		bgstat = 'bg-danger';
		status = 'bad';
	}
	
	console.log("Text: " + text);
	count=1;
	for(var th in nasa_ranks){
		$('#nasa').append('<tr><td>'+nasa_ranks[th]+'</td><td>'+count+'</td></tr>');
		count+=1;
	}
	$('#resultBox').addClass('');
	$('#results').show(500);
	$('#messaqe').text(text);
	$('#score').addClass(status);
	$('#resultBox').addClass(bgstat);
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