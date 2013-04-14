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

var vidpop = Popcorn("#elwha");

	vidpop.code({
		start: 0,
		onStart: function (options) {
			$("#map_canvas").css({opacity: 0});
			// $("#gallery").css({opacity: 0});
			$("#timelapse").css({opacity: 0});
		}
	});
	//12: Vid reduce to 946px
	 vidpop.code({ 
	  start: 549,
	  onStart: function (options) {
		$("#elwha").animate({
			"width":752,
			"height":430,
			"top":130,
			"left":90
			},4000);
	  }
	});
	
	vidpop.code({
		start: 551,
		onStart: function (options) {
			$("#map_canvas").animate({opacity: 1}, 2000);
		}
	});
	
	vidpop.code({
	  start: 555,
	  onStart: function (options) {
			var count = 175;
				offsetId = window.setInterval(function() {
					count = (count + 1) % 200;
	
					var icons = line.get('icons');
					icons[0].offset = (count / 2) + '%';
					line.set('icons', icons);
		
					if(Math.ceil(count/2) == 100){
						window.clearInterval(offsetId);
					}
				}, 2000);
	  }
	});
	
	
	vidpop.code({
		start: 553,
		onStart: function () {
			$("#timelapseContain").append('<video id=' + '"timelapse"' + 'controls autoplay><source src=' + '"/assets/glines_timelapse.mp4"' + 'type="video/mp4"' + '/></video>');
		}
	});
	
	vidpop.code({
		start: 553,
		onStart: function(){
			$("#texting").animate({
				width : 368,
				height : 50,
				opacity : 1, 
				top : 270,
				right : 210 
				}, 2000);
			$("#texting").append('<a href=' + '"fancyhack.html"' + 'class=' + '"various"' + 'data-fancybox-type=' + '"iframe"' + '>The Engineering' + '"</a>');
		}
	});
	
	vidpop.code({
		start: 553,
		end: 578,
		onStart: function(options){
			$("#timelapse").animate({
				width : 368,
				height : 208,
				opacity : 1, 
				top : 320,
				right : 210 
				}, 2000);
		},
		onEnd: function(options){
			$("#timelapse").fadeOut(500);
			$('#texting').fadeOut(500);
		}
		
	});
/*	
	vidpop.code({
		start: 553,
		onStart: function(options){
			$("#png").animate({
			width :946,
			height :533,
			opacity : 1,	
			top : 600,
			left : 260
			}, 2000);
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
	*/
	
	vidpop.cue( 42, function() {
	    this.play( 525 );
	});
	
	
});
