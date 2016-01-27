(function($){
	function smoothScroll (ele) {
		var selector = '#' + ele.data('smooth-scroll');

		$('html, body').animate({
		    scrollTop: $(selector).offset().top
		}, 1000);
	}

  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.smooth-scroll').on('click.smoothScroll', function (event) {
    	event.preventDefault();
    	smoothScroll($(this));
    });

  }); // end of document ready
})(jQuery); // end of jQuery name space