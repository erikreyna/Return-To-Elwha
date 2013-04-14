var vidpop;
$(document).ready(function () {
	var elwha = {

	    full_bleed: function(boxWidth, boxHeight, imgWidth, imgHeight) {

	        // Calculate new height and width...
	        var initW = imgWidth;
	        var initH = imgHeight;
	        var ratio = initH / initW;

	        imgWidth = boxWidth;
	        imgHeight = boxWidth * ratio;

	        // If the video is not the right height, then make it so...     
	        if(imgHeight < boxHeight){
	            imgHeight = boxHeight;
	            imgWidth = imgHeight / ratio;
	        }

	        //  Return new size for video
	        return {
	            width: imgWidth,
	            height: imgHeight
	        };

	    },

	    init: function() {
	        var browserHeight = Math.round(jQuery(window).height());
	        var browserWidth = Math.round(jQuery(window).width());
	        var videoHeight = jQuery('#elwha').height();
	        var videoWidth = jQuery('#elwha').width();

	        var new_size = elwha.full_bleed(browserWidth, browserHeight, videoWidth, videoHeight);

	        jQuery('#elwha')
	            .width(new_size.width)
	            .height(new_size.height);  
	    }

	};
	jQuery(document).ready(function($) {       

	    /*
	     * Full bleed background
	     */

	    elwha.init();

	    $(window).resize(function() {

	        var browserHeight = Math.round($(window).height());
	        var browserWidth = Math.round($(window).width());
	        var videoHeight = $('.wd-thumb-list li a').eq(0).attr('data-wd-height');
	        var videoWidth = $('.wd-thumb-list li a').eq(0).attr('data-wd-width');

	        var new_size = elwha.full_bleed(browserWidth, browserHeight, videoWidth, videoHeight);

	        $('#elwha')
	            .width(new_size.width)
	            .height(new_size.height);        
	    });

	});

vidpop = Popcorn("#elwha");
 
	

	vidpop.code({
		start: 0,
		onStart: function (options) {
			$("#map_canvas").css({opacity: 0});
			$("#gallery").css({opacity: 0});
		}
	});
	//12: Vid reduce to 946px
	 vidpop.code({ 
	  start: 18,
	  onStart: function (options) {
		$("#elwha").animate({
			"width":946,
			"height":533,
			"top":270,
			"left":90
			},4000);
	  }
	});
	
	vidpop.code({ // trying to unbind the window resize here, think about it a bit...
		start: 22,
		onStart: function (options) {
			$('#elwha').css({
				"width": 946 + "px", 
				"height": 533 + "px", 
				"position":"fixed", 
				"top": $("#elwha").offset().top + "px",
				"left": $("#elwha").offset().left + "px"
			});
		}
	});
	
	
	vidpop.code({
		start: 21,
		onStart: function (options) {
			$("#map_canvas").animate({opacity: 1});
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
	
	
});
