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
	window.onscroll = function() {
		headerAnimate();
		bannerFade();
		bannerFade2();
	};
	function headerAnimate() {
		const docScroll = document.documentElement.scrollTop;
		let logoStyle = document.getElementsByTagName("img")[0];
	    if (docScroll > 200) {
	    	document.getElementsByTagName("header")[0].style.backgroundColor = "black";
	    	logoStyle.style.width = "110px";
	    	logoStyle.style.height = "80px";
	    	logoStyle.style.top = "-10px";
	    } else if (docScroll < 200) {
	    	document.getElementsByTagName("header")[0].style.removeProperty("background-color");
	    	logoStyle.style.width = "140px";
	    	logoStyle.style.height = "100px";
	    	logoStyle.style.top = "-20px";
		  } else {
	        document.getElementById("header").className = "";
	    }
	}
	//need to get this to work properly
	function bannerFade() {
		if (document.documentElement.scrollTop > 180){
			document.getElementById('bannerText').style.opacity = "0";
		} else {
			document.getElementById('bannerText').style.opacity = "1";
		}
	}
	function bannerFade2() {
		if (document.documentElement.scrollTop > 20 && document.documentElement.scrollTop < 180) {
			document.getElementById('bannerText').style.opacity = ".7";
		} 
	}
	
	function move() {
    var elem = document.getElementById("myBar"); 
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++; 
            elem.style.width = width + '%'; 
        }
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






