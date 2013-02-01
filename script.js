$(function(){
	var groundplane = $(window).height();
	var ccount = 0;
	var radius = Math.random()*5;
	
	$('#mycanvas').attr('width', $('body').width()+'px');
	$('#mycanvas').attr('height', groundplane+'px');
	var canvas = document.getElementById('mycanvas');
	var world = boxbox.createWorld(canvas);


	$('#mycanvas').click(function(){
		ccount++;
		radius = Math.random()*5;
		rX = Math.random()*10+15;
		rY = Math.random()*10;
		world.createEntity({
			name: 'mycirc'+ccount,
			x: rX,
			y: rY,
			shape: 'circle',
			radius: radius,
			color: '#2A1F3A',
			borderWidth: 0
		});
	});
	
	
	world.createEntity({
		name: 'ground',
		x: 23.08,
		y: 26.6,
		shape: 'square',
		type: 'static',
		height: 0.1,
		width: 36.69,
		color: '#2A1F3A',
		borderWidth: 0
	});
	
	console.log(world);
});