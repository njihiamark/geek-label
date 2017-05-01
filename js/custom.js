jQuery(function() {
	jQuery('a[href*=#]').on('click', function(e) {
		e.preventDefault();
		jQuery('html, body').animate({ scrollTop: jQuery(jQuery(this).attr('href')).offset().top}, 500, 'linear');
	});
});

jQuery(document).ready(function(){
jQuery('.owl-carousel').owlCarousel({
    loop:true,
    center:true,
    autoWidth:true,
    margin:10,
    nav:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3,
            margin:200,
            nav:false
        },
        1400:{
            items:3,
            margin:300
        }
    }
});

});