$(function(){
	var i = 0;
	 var socket = io.connect('http://heywolinsky.com:8124');


	socket.on('tweet', function(data) {
		i++;
		tweetdata = data['text'];
		$('body').append('<div id="dot'+i+'" class="circle"><div class="inner">'+tweetdata+'</div></div>');
		$('#dot'+i).css('left', Math.round(Math.random()*500)+'px');
		$("#dot"+i).box2d({'y-velocity':5,'shape':'circle'});
		
		$('.circle').each(function(){
			$(this).addClass('old');
		});
		
		

		$('.old').each(function(){
			$(this).removeClass('circle');
			$(this).delay(2000+(Math.ceil(Math.random()*6))*1000).fadeOut('slow', function(){
				$(this).remove();
			});
		});
		
	});


/*
		
	$(document).click(function(){
		i++;
		$('body').append('<div id="dot'+i+'" class="circle">sup</div>');
		$('#dot'+i).css('left', Math.round(Math.random()*500)+'px');
		$("#dot"+i).box2d({'y-velocity':5,'shape':'circle'});
		
	});
	
	*/
	
});