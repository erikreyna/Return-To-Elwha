var vidpop;
$(document).ready(function () {


vidpop = Popcorn("#elwha");
 
/******* ADD POP EVENTS BELOW THIS LINE **********/


	//12: Vid reduce to 946px
	 vidpop.code({ 
	  start: 18,
	  onStart: function (options) {
		$("#elwha").animate({width:946,height:533, top:270, left:90},4000);
		
	  }
	});
	
	vidpop.code({ 
	  start: 9,
	  onStart: function (options) {
	  }
	});
	
	
	vidpop.code({
		start: 0,
		onStart: function (options) {
			$("#hidethis").css({opacity: 0});
			$("#gallery").css({opacity: 0});
		}
	});
	
	vidpop.code({
		start: 21,
		onStart: function (options) {
			$("#hidethis").animate({opacity: 1});
		}
	});
	
	vidpop.code({
		start: 27,
		end: 33,
		onStart: function (options) {
			$("#gallery").animate({opacity: 1}, 4000);
		},
		onEnd: function (options) {
			$("#gallery").animate({opacity: 0}, 4000);
		}
	});
	


	// Jump rope
	vidpop.code({
	  start: 23,
	  onStart: function (options) {
			var count = 0;
				offsetId = window.setInterval(function() {
					count = (count + 1) % 200;
	
					var icons = line.get('icons');
					icons[0].offset = (count / 2) + '%';
					line.set('icons', icons);
		
					if(Math.ceil(count/2) == 100){
						window.clearInterval(offsetId);
					}
				}, 20);
	  }
	});
/*	
        // at 00:26:12 (37:12 SECONDS) -- Rivera Bios 
	
        vidpop.code({
	  start: 36,
	  end: 64,
	  onStart: function (options) {

		$('#grid41').load('includes/the-riveras/modules/bios/riveras.php').fadeIn(3000); 

	  },
	  onEnd: function ( options ) {
		$('#grid41').fadeOut(1500, function(){
			$('#grid41').html('');
                });
	  }
	});       
       

       // Mexican fighters gallery
	vidpop.code({
	  start: 43,
	  end: 64,
	  onStart: function (options) {

		$('#grid25').css({top: 537, left: 0}).load('includes/the-riveras/modules/mexicanfighters.php').fadeIn(3000); 

	  },
	  onEnd: function ( options ) {
		$('#grid25').fadeOut(1500, function(){
			$('#grid25').html('');
		});
	  }
	});

//:31 Video increase to full screen
 vidpop.code({ 
  start: 65,
  onStart: function (options) {
  	 $("#thevideo").animate({width:1264, height: 711},7000);
  }
});

vidpop.code({ 
  start: 95,
  onStart: function (options) {
  	 	$("#thevideo").animate({width:946, height: 533},4000);
  }
});

	// PQ - Play boxing
	vidpop.code({
	  start: 99,
	  end: 109,
	  onStart: function (options) {

		$('#grid15').css({top: 534, left: 0}).load('includes/the-riveras/modules/pq_playboxing.php').fadeIn(3000); 

	  },
	  onEnd: function ( options ) {
		$('#grid15').fadeOut(1500, function(){
			$('#grid15').html('');
                });
	  }
	});
        
        // at 1:50 (110 SECONDS) -- immigration video 
	
        vidpop.code({
	  start: 110,
	  end: 146,
	  onStart: function (options) {

		$('#grid41').load('includes/the-riveras/modules/immigration.php').fadeIn(3000); 
	  },
	  onEnd: function ( options ) {
		$('#grid41').fadeOut(1500, function(){
			$('#grid41').html('');
                });
	  }
	});
 

	
	//:148 Vid increase to full screen
	 vidpop.code({ 
	  start: 146,
	  onStart: function (options) {
		$("#thevideo").animate({width:1264, height:711},4000);
	  }
	});
	
	//148: Vid reduce to 946px
	 vidpop.code({ 
	  start: 157,
	  onStart: function (options) {
		$("#thevideo").animate({width:946, height: 533},4000);
	  }
	});


	// PQ - Become doctor
	vidpop.code({
	  start: 160,
	  end: 197,
	  onStart: function (options) {

		$('#grid15').css({top: 534, left: 0}).load('includes/the-riveras/modules/pq_becomedoctor.php').fadeIn(3000); 


	  },
	  onEnd: function ( options ) {
		$('#grid15').fadeOut(1500, function(){
			$('#grid15').html('');
		});
	  }
	});
	
	// Jesus Jr. academic record
	vidpop.code({
	  start: 160,
	  end: 197,
	  onStart: function (options) {

		$('#grid41').load('includes/the-riveras/modules/jr_academics.php').fadeIn(3000); 

	  },
	  onEnd: function ( options ) {
		$('#grid41').fadeOut(1500, function(){
			$('#grid41').html('');
		});
	  }
	});
	

	// Pacquiao's progress
	vidpop.code({
	  start: 201,
	  end: 233,
	  onStart: function (options) {

		$('#grid25').css({top: 537, left: 288}).load('includes/the-riveras/modules/pacquiaosprogress.php').fadeIn(3000); 

	  },
	  onEnd: function ( options ) {
		$('#grid25').fadeOut(1500, function(){
			$('#grid25').html('');
		});
	  }
	});
	
		
	// Amateur weight class
	vidpop.code({
	  start: 201,
	  end: 214,
	  onStart: function (options) {

		$('#grid41').load('includes/the-riveras/modules/amateurweight.php').fadeIn(3000); 

	  },
	  onEnd: function ( options ) {
		$('#grid41').fadeOut(1500, function(){
			$('#grid41').html('');
		});
	  }
	});
	
	// pro weight class
	vidpop.code({
	  start: 216,
	  end: 237,
	  onStart: function (options) {

		$('#grid41').load('includes/the-riveras/modules/proweight.php').fadeIn(3000); 

	  },
	  onEnd: function ( options ) {
		$('#grid41').fadeOut(1500, function(){
			$('#grid41').html('');
		});
	  }
	});
        
        
// INCREASE VIDEO TO FULL SCREEN to end of movie.
 vidpop.code({ 
  start: 240,
  onStart: function (options) {
  	 $("#thevideo").animate({width:1264, height: 711},6000);
  	 $("#video_container").animate({left:0, top:0},6000);
  }
});
*/

});
