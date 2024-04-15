const buttonRoll = document.querySelector(".button");
const wrapper = document.querySelector(".wrapper");
let windowInnerWidth = window.innerWidth;
let windowInnerHeight = window.innerHeight;

window.addEventListener("resize", () => {
	windowInnerWidth = window.innerWidth;
	windowInnerHeight = window.innerHeight;
})

buttonRoll.addEventListener("click", (e) => {
	wrapper.style.left = Math.random() * windowInnerWidth + 'px';
	wrapper.style.top = Math.random() * windowInnerHeight + 'px';
	if (wrapper.style.left > windowInnerWidth - 100) {
		wrapper.style.left = windowInnerWidth - 200 + 'px';
	} else if (wrapper.style.left < 100) {
		wrapper.style.left = 150 + 'px'
	}
	if (wrapper.style.top > windowInnerHeight - 150) {
		wrapper.style.top = windowInnerHeight - 250 + 'px';
	} else if (wrapper.style.top < 150) {
		wrapper.style.top = 150 + 'px'
	}
})