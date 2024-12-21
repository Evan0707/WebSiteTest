const element = document.getElementById("Intro");

window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    if (scroll > 80){
        element.classList.add('Scroll')
    }else{
        element.classList.remove('Scroll')
    }
});

function scrollReveal() {
	var revealPoint = 0;
	var revealElement = document.querySelectorAll(".ServicesCard");
	for (var i = 0; i < revealElement.length; i++) {
		var windowHeight = window.innerHeight;
		var revealTop = revealElement[i].getBoundingClientRect().top;
		if (revealTop < windowHeight - revealPoint) {
			revealElement[i].classList.add("active");
		} else {
			revealElement[i].classList.remove("active");
		}
	}
}
window.addEventListener("scroll", scrollReveal);

function scrollReveal2() {
	var revealPoint = 0;
	var revealElement = document.querySelectorAll(".socialCard");
	for (var i = 0; i < revealElement.length; i++) {
		var windowHeight = window.innerHeight;
		var revealTop = revealElement[i].getBoundingClientRect().top;
		if (revealTop < windowHeight - revealPoint) {
			revealElement[i].classList.add("active");
		} else {
			revealElement[i].classList.remove("active");
		}
	}
}
window.addEventListener("scroll", scrollReveal2);

function scrollReveal1() {
	var revealPoint = 0;
	var revealElement = document.querySelectorAll(".line");
	for (var i = 0; i < revealElement.length; i++) {
		var windowHeight = window.innerHeight;
		var revealTop = revealElement[i].getBoundingClientRect().top;
		if (revealTop < windowHeight - revealPoint) {
			revealElement[i].classList.add("active");
		} else {
			revealElement[i].classList.remove("active");
		}
	}
}
window.addEventListener("scroll", scrollReveal1);



const parallaxElements = document.getElementById('parallax')

// The parallax function
const parallax = elements => {
		if ('undefined' !== elements && elements.length > 0) {
			elements.forEach( element => {

				if (y > 0) {
					element.style.transform = 'translate3d(0, -' + (0.15 * y) + 'px ,0)'
                    
				}
			})
		}
	}

//If element is in viewport, set its position
parallax(parallaxElements)

//Call the function on scroll
window.onscroll = () => {
    let y = window.innerHeight - parallaxElements.getBoundingClientRect().top
    if (y > 0) {
        parallaxElements.style.transform = 'translate3d(0, -' +(0.10 * y) + 'px ,0)'
        
    }
}

function showResponsiveMenu() {
    var nav = document.getElementById("mob");
    var icon = document.getElementById("OCIcone");
    if (icon.className === "menuIcon") {
        nav.className = "mobNav active";
        icon.className = "menuIcon open";
    } else {
        nav.className = "mobNav";
        icon.className = "menuIcon";
    }
}


const link = document.getElementsByClassName("linkMenu")

const close =() =>{
    var nav = document.getElementById("mob");
    var icon = document.getElementById("OCIcone");
    nav.className = "mobNav";
    icon.className = "menuIcon";
}

for (var i = 0 ; i < link.length; i++) {
    link[i].addEventListener('click' , close ) ; 
}

