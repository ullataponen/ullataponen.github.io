// Nav control
$(document).ready(function() {
	$(".menu").click(function() {
		$("ul").toggleClass("active");
	});
});

// Source: W3 School's How TO - Scroll Back To Top Button tutorial: https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
// When the user scrolls down 100px from the top of the document, show the button & change the nav background
window.onscroll = function() {
	scrollFunction();
};

function scrollFunction() {
	if (
		document.body.scrollTop > 100 ||
		document.documentElement.scrollTop > 100
	) {
		document.getElementById("topBtn").style.display = "block";
		document.getElementById("nav").style.backgroundColor = "#ffa9a3";
	} else {
		document.getElementById("topBtn").style.display = "none";
		document.getElementById("nav").style.backgroundColor = "transparent";
	}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

// About section appear on scroll
function scrollAppear() {
	let toAppear = document.querySelectorAll(".to-appear");
	toAppear.forEach(a => {
		let aPosition = a.getBoundingClientRect().top;
		let screenPosition = window.innerHeight / 1.2;
		if (aPosition < screenPosition) {
			a.classList.add("appear");
		}
	});
}

window.addEventListener("scroll", scrollAppear);

/* Carousel How To by W3Schools:  https://www.w3schools.com/howto/howto_js_slideshow.asp */
// var slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
// 	showSlides((slideIndex += n));
// }

// // Thumbnail image controls
// function currentSlide(n) {
// 	showSlides((slideIndex = n));
// }

// function showSlides(n) {
// 	var i;
// 	var slides = document.getElementsByClassName("mySlides");
// 	var dots = document.getElementsByClassName("dot");
// 	if (n > slides.length) {
// 		slideIndex = 1;
// 	}
// 	if (n < 1) {
// 		slideIndex = slides.length;
// 	}
// 	for (i = 0; i < slides.length; i++) {
// 		slides[i].style.display = "none";
// 	}
// 	for (i = 0; i < dots.length; i++) {
// 		dots[i].className = dots[i].className.replace(" active", "");
// 	}
// 	slides[slideIndex - 1].style.display = "block";
// 	dots[slideIndex - 1].className += " active";
// }
