/* Set the width of the side navigation to 20% */
	function openNav() {
	    document.getElementById("mySidenav").style.width = "20%";
	    document.getElementsByTagName("body")[0].style.width = "80%";
	}

	/* Set the width of the side navigation to 0 */
	function closeNav() {
	    document.getElementById("mySidenav").style.width = "0";
	    document.getElementsByTagName("body")[0].style.width = "100%";

	}

	const jmediaquery = window.matchMedia( "(max-width: 600px)" )
	if (matchMedia) {
		const mq = window.matchMedia("(max-width: 600px)");
		mq.addListener(WidthChange);
		WidthChange(mq);
	}

function WidthChange(mq) {
	if (mq.matches) {
		closeNav();
	}
	};


	window.onscroll = function() {
		headerAnimate();
		bannerFade();
		bannerFade2();
	};
	function headerAnimate() {
		const scrollTop = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
		let logoStyle = document.getElementsByTagName("img")[0];
	    if (scrollTop > 200) {
	    	document.getElementsByTagName("header")[0].style.backgroundColor = "black";
	    	logoStyle.style.width = "110px";
	    	logoStyle.style.height = "80px";
	    	logoStyle.style.top = "-3px";
	    } else if (scrollTop < 200) {
	    	document.getElementsByTagName("header")[0].style.removeProperty("background-color");
	    	logoStyle.style.width = "150px";
	    	logoStyle.style.height = "110px";
	    	logoStyle.style.top = "-10px";
		  } else {
	        document.getElementById("header").className = "";
	    }
	}
	//need to get this to work properly
	function bannerFade() {
		const scrollTop = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
		if (scrollTop > 180){
			document.getElementById('bannerText').style.opacity = "0";
		} else {
			document.getElementById('bannerText').style.opacity = "1";
		}
	}
	function bannerFade2() {
		const scrollTop = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
		if (scrollTop > 20 && scrollTop < 180) {
			document.getElementById('bannerText').style.opacity = ".7";
		} 
	}

	let $animation_elements = $('.animation_element');
	let $window = $(window);
	$window.on('scroll resize', check_if_in_view);
	$window.trigger('scroll');

	function check_if_in_view() {
	  var window_height = $window.height();
	  var window_top_position = $window.scrollTop();
	  var window_bottom_position = (window_top_position + window_height);

	  $.each($animation_elements, function() {
	    var $element = $(this);
	    var element_height = $element.outerHeight();
	    var element_top_position = $element.offset().top;
	    var element_bottom_position = (element_top_position + element_height);
	     //check to see if this current container is within viewport
	    if ((element_bottom_position >= window_top_position) &&
	        (element_top_position <= window_bottom_position)) {
	      $element.addClass('techIcon');
	  //  	move();
	    } else {
	      $element.removeClass('techIcon');
	    }
     });
	}

$(".menuHome").click(function() {
    $('html,body').animate({
        scrollTop: 0},
        'slow');
});
$(".menuBio").click(function() {
    $('html,body').animate({
        scrollTop: $(".aboutMe").offset().top -62},
        'slow');
});
$(".menuProjects").click(function() {
    $('html,body').animate({
        scrollTop: $(".projectSection").offset().top - 62},
        'slow');
});
$(".menuSkills").click(function() {
    $('html,body').animate({
        scrollTop: $(".techSection").offset().top - 62},
        'slow');
});
$(".menuContact").click(function() {
    $('html,body').animate({
        scrollTop: $(".contact").offset().top},
        'slow');
});






