/************************************************
Author: GC-Tech 
Member: CaiYiLiang (https://github.com/CaiYiLiang)
        DaZhongWu (https://github.com/IamGabrielWu)
License: Only use for Red23 website demo
************************************************/	
/*scroll to top*/

$(document).ready(function(){
	$(function () {
		$.scrollUp({
	        scrollName: 'scrollUp', // Element ID
	        scrollDistance: 300, // Distance from top/bottom before showing element (px)
	        scrollFrom: 'top', // 'top' or 'bottom'
	        scrollSpeed: 300, // Speed back to top (ms)
	        easingType: 'linear', // Scroll to top easing (see http://easings.net/)
	        animation: 'fade', // Fade, slide, none
	        animationSpeed: 200, // Animation in speed (ms)
	        scrollTrigger: false, // Set a custom triggering element. Can be an HTML string or jQuery object
					//scrollTarget: false, // Set a custom target element for scrolling to the top
	        scrollText: '<span class="glyphicon glyphicon-chevron-up" aria-hidden="true"></span>', // Text for element, can contain HTML
	        scrollTitle: false, // Set a custom <a> title if required.
	        scrollImg: false, // Set true to use image
	        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
	        zIndex: 2147483647 // Z-Index for the overlay
		});
	});
});




/* Search Form Submit*/
$(".search-panel .dropdown-menu li a").click(function(){
  $(this).parents(".dropdown").find('.btn').html('<span class="area-search">'+$(this).text()+'</span>' + ' <span class="caret"></span>');
  $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
});

$(".search-panel .dropdown-price-menu li a").click(function(){
  $(this).parents(".dropdown").find('.btn').html('<span class="area-search"><span class="price-icon">$</span>'+$(this).text()+'</span>' + ' <span class="caret"></span>');
  $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
});