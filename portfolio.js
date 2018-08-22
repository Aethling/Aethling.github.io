/* Set the width of the side navigation to 200px */
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
	    if (docScroll > 200) {
	    	document.getElementsByTagName("header")[0].style.backgroundColor = "black";
	    	document.getElementsByTagName("span")[0].style.fontSize = "16pt";
	    } else if (docScroll < 200) {
	    	document.getElementsByTagName("header")[0].style.removeProperty("background-color");
	    	document.getElementsByTagName("span")[0].style.fontSize = "24pt";
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