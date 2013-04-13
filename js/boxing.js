/**

 * @fileoverview: 	A Fighting Chance: Episode 2: The Riveras
 * @authors:  		Peggy Bustamante
 * @version: 		August 2012

**/


// ensure the web page (DOM) has loaded
//var pop;
var pop_main;
$(document).ready(function () {


 // Create popcorn instances
//pop = Popcorn("#timeline");
 
pop_main = Popcorn("#thevideo");
 
/******* ADD POP EVENTS BELOW THIS LINE **********/


	//12: Vid reduce to 946px
	 pop_main.code({ 
	  start: 16,
	  onStart: function (options) {
		$("#thevideo").animate({width:946,height:533},4000);
	  }
	});


	// Jump rope
	pop_main.code({
	  start: 18,
	  end: 34,
	  onStart: function (options) {

		$('#grid41').load('includes/the-riveras/modules/jumprope.php').fadeIn(3000); 

	  },
	  onEnd: function ( options ) {
		$('#grid41').fadeOut(1500, function(){
			$('#grid41').html('');
		});
	  }
	});
	
        // at 00:26:12 (37:12 SECONDS) -- Rivera Bios 
	
        pop_main.code({
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
	pop_main.code({
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
 pop_main.code({ 
  start: 65,
  onStart: function (options) {
  	 $("#thevideo").animate({width:1264, height: 711},7000);
  }
});

pop_main.code({ 
  start: 95,
  onStart: function (options) {
  	 	$("#thevideo").animate({width:946, height: 533},4000);
  }
});

	// PQ - Play boxing
	pop_main.code({
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
	
        pop_main.code({
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
	 pop_main.code({ 
	  start: 146,
	  onStart: function (options) {
		$("#thevideo").animate({width:1264, height:711},4000);
	  }
	});
	
	//148: Vid reduce to 946px
	 pop_main.code({ 
	  start: 157,
	  onStart: function (options) {
		$("#thevideo").animate({width:946, height: 533},4000);
	  }
	});


	// PQ - Become doctor
	pop_main.code({
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
	pop_main.code({
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
	pop_main.code({
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
	pop_main.code({
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
	pop_main.code({
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
 pop_main.code({ 
  start: 240,
  onStart: function (options) {
  	 $("#thevideo").animate({width:1264, height: 711},6000);
  	 $("#video_container").animate({left:0, top:0},6000);
  }
});


/***** DON'T TOUCH BELOW THIS LINE *******/

// ENDSCREEN
pop_main.code({
  start: 341, 
  onStart: function (options) {
      
	 $('#grid_endscreen').load('includes/the-riveras/modules/endscreen.php').fadeIn(3000);
  
}
});

});
