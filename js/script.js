document.addEventListener("DOMContentLoaded",
	function (event){
		var slideIndex = 2;
		var slides = document.querySelectorAll(".slides");
		var dots = document.querySelectorAll(".dot");
		showSlides();
		function showSlides(){
			console.log("hello");
			slides[slideIndex].style.display = "none";
			dots[slideIndex].style.backgroundColor = "#aaa";
			slideIndex++;
			if(slideIndex >= slides.length){
					slideIndex = 0;
				}
			slides[slideIndex].style.display = "inline";
			dots[slideIndex].style.backgroundColor = "#000";
			setTimeout(showSlides, 3000);
		}
	}
);