var vidpop;
$(document).ready(function () {


vidpop = Popcorn("#elwha");
 
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
});
