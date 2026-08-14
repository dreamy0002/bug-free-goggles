$(document).ready(function(){

$("#owl-example").owlCarousel({
    items: 4,
    itemsDesktop: [1199, 4],
    itemsDesktopSmall: [979, 3],
    itemsTablet: [768, 2],
    itemsMobile: [479, 1],
    pagination: true,
    navigation: false,
    navigationText: ["", "<i class='fa fa-angle-right'></i>"],
    slideSpeed: 800,
    autoPlay: 3000
});

	//$("#navigation").sticky({
	//	topSpacing : 75,
	//});

	$('#nav').onePageNav({
		currentClass: 'current',
		changeHash: false,
		scrollSpeed: 15000,
		scrollThreshold: 0.5,
		filter: '',
		easing: 'easeInOutExpo'
	});

     
    
    $('#top-nav').onePageNav({
    currentClass: 'active',
    changeHash: true,
    scrollSpeed: 1200,
    filter: ':not(.external)'
});
//Initiat WOW JS


    new WOW().init();


});






