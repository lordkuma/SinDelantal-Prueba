
(function($) { "use strict";


	//Navigation	

	$('ul.slimmenu').on('click',function(){
		var width = $(window).width(); 
		if ((width <= 1000)){ 
			$(this).slideToggle();}	
	});	
	
	$('ul.slimmenu').slimmenu(
	{
		resizeWidth: '1000',
		collapserTitle: '',
		easingEffect:'easeInOutQuint',
		animSpeed:'medium',
		indentChildren: true,
		childrenIndenter: '&raquo;'
	});

		
	//Home Sections fit screen	
		
		
		/*global $:false */
		$(function(){"use strict";
			$('#section0').css({'height':($(window).height())+'px'});
			$(window).resize(function(){
			$('#section0').css({'height':($(window).height())+'px'});
			});
		});

		
			//Slider Revolution
			
				jQuery(document).ready(function() {
				
					
								
					jQuery('.tp-banner').show().revolution(
					{
						dottedOverlay:"none",
						delay:8000,
						startwidth:1260,
						startheight:700,
						hideThumbs:false,
						hideTimerBar:"on",
						
						navigationType:"bullet",
						navigationArrows:"none",
						
						touchenabled:"on",
						onHoverStop:"off",
						
						swipe_velocity: 0.7,
						swipe_min_touches: 1,
						swipe_max_touches: 1,
						drag_block_vertical: false,
												
						keyboardNavigation:"off",
						
						navigationHAlign:"center",
						navigationVAlign:"bottom",
						navigationHOffset:0,
						navigationVOffset:30,
								
						shadow:0,
						fullWidth:"off",
						fullScreen:"on",

						spinner:"spinner4",
						
						stopLoop:"off",
						stopAfterLoops:-1,
						stopAtSlide:-1,

						shuffle:"off",
						
						autoHeight:"off",						
						forceFullWidth:"off",		
					});
					
					
					
									
				});	//ready		
		
		
		
		

	/* Portfolio Sorting */


	jQuery(document).ready(function () { 
		(function ($) { 
		
		
			var container = $('#projects-grid');
			
			
			function getNumbColumns() { 
				var winWidth = $(window).width(), 
					columnNumb = 1;
				
				
				if (winWidth > 1500) {
					columnNumb = 3;
				} else if (winWidth > 1200) {
					columnNumb = 3;
				} else if (winWidth > 900) {
					columnNumb = 2;
				} else if (winWidth > 600) {
					columnNumb = 2;
				} else if (winWidth > 300) {
					columnNumb = 1;
				}
				
				return columnNumb;
			}
			
			
			function setColumnWidth() { 
				var winWidth = $(window).width(), 
					columnNumb = getNumbColumns(), 
					postWidth = Math.floor(winWidth / columnNumb);

			}
			
			$('#portfolio-filter #filter a').click(function () { 
				var selector = $(this).attr('data-filter');
				
				$(this).parent().parent().find('a').removeClass('current');
				$(this).addClass('current');
				
				container.isotope( { 
					filter : selector 
				});
				
				setTimeout(function () { 
					reArrangeProjects();
				}, 300);
				
				
				return false;
			});
			
			function reArrangeProjects() { 
				setColumnWidth();
				container.isotope('reLayout');
			}
			
			
			container.imagesLoaded(function () { 
				setColumnWidth();
				
				
				container.isotope( { 
					itemSelector : '.project-box', 
					layoutMode : 'masonry', 
					resizable : false 
				} );
			} );
			
			
		
			
		
			$(window).on('debouncedresize', function () { 
				reArrangeProjects();
				
			} );
			
		
		} )(jQuery);
	} );





	/* DebouncedResize Function */
		(function ($) { 
			var $event = $.event, 
				$special, 
				resizeTimeout;
			
			
			$special = $event.special.debouncedresize = { 
				setup : function () { 
					$(this).on('resize', $special.handler);
				}, 
				teardown : function () { 
					$(this).off('resize', $special.handler);
				}, 
				handler : function (event, execAsap) { 
					var context = this, 
						args = arguments, 
						dispatch = function () { 
							event.type = 'debouncedresize';
							
							$event.dispatch.apply(context, args);
						};
					
					
					if (resizeTimeout) {
						clearTimeout(resizeTimeout);
					}
					
					
					execAsap ? dispatch() : resizeTimeout = setTimeout(dispatch, $special.threshold);
				}, 
				threshold : 150 
			};
		} )(jQuery);
		
		
	//Colorbox single project pop-up

	$(document).ready(function(){
		$(".iframe").colorbox({iframe:true, width:"100%", height:"100%"});	
		$(".group1").colorbox({rel:'group1', transition:"fade", maxWidth:'95%', maxHeight:'95%'});
		$(".group2").colorbox({rel:'group2'});
		$(".youtube").colorbox({iframe:true, innerWidth:940, innerHeight:450});
		$(".vimeo").colorbox({iframe:true, innerWidth:940, innerHeight:450});
	});
	
  
	//Counter 
	
    jQuery(document).ready(function( $ ) {
        $('.counter').counterUp({
            delay: 100,
            time: 2000
        });
    });	
	
	
	/* Team Carousel */

	$(document).ready(function() {
	 
	  $("#owl-team").owlCarousel({
	 
		  navigation : false,
		  slideSpeed : 800,
		  paginationSpeed : 800,
		  singleItem:true
	 
	  });
	 
	});	

	
	/* Facts Carousel */
	
	$(document).ready(function() {
	 
	  $("#owl-facts").owlCarousel({
	 
		  navigation : false,
		  slideSpeed : 800,
		  paginationSpeed : 800,
		  singleItem:true
	 
	  });
	 
	});

	
	/* Testimonials Carousel */
	
	$(document).ready(function() {
	 
	  $("#owl-testim").owlCarousel({
	 
		  navigation : false,
		  slideSpeed : 800,
		  paginationSpeed : 800,
		  singleItem:true
	 
	  });
	 
	});

	//Google map	
		
	/*global $:false */
		var map;
		$(document).ready(function(){"use strict";
		  map = new GMaps({
		disableDefaultUI: true,
		scrollwheel: false,
			el: '#map',
			lat: 44.8079692,
			lng: 20.4814703,
			zoom:14,
			draggableCursor: 'move', 
			draggingCursor: 'move'
		  });	  
		  map.drawOverlay({
			lat: map.getCenter().lat(),
			lng: map.getCenter().lng(),
			layer: 'overlayLayer',
			content: '<div class="overlay"></div>',
			verticalAlign: 'center',
			horizontalAlign: 'center'
		  });
			var styles = [
	  {
		
	"featureType": "landscape",
    "stylers": [
      { "visibility": "simplified" },
      { "color": "#f7f7f7" }
    ]
  },{
    "featureType": "poi",
    "stylers": [
      { "visibility": "simplified" },
      { "color": "#dbdbda" }
    ]
  },{
    "featureType": "road.highway",
    "stylers": [
      { "lightness": -68 },
      { "saturation": 100 },
      { "weight": 0.4 },
      { "color": "#808080" },
      { "visibility": "off" }
    ]
  },{
    "featureType": "road.arterial",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "transit.station",
    "stylers": [
      { "color": "#808080" },
      { "visibility": "off" }
    ]
  },{
    "featureType": "water",
    "stylers": [
      { "color": "#c2c2c2" }
    ]
  }
	];
			
			map.addStyle({
				styledMapName:"Styled Map",
				styles: styles,
				mapTypeId: "map_style"  
			});
			
			map.setStyle("map_style");	
	
	
		});	

		
	
})(jQuery);