const buttonRoll = document.querySelector(".button");
const wrapper = document.querySelector(".wrapper");
let windowInnerWidth = window.innerWidth;
let windowInnerHeight = window.innerHeight;

window.addEventListener("resize", () => {
	windowInnerWidth = window.innerWidth;
	windowInnerHeight = window.innerHeight;
	randomPosition
})

buttonRoll.addEventListener("click", randomPosition)
buttonRoll.addEventListener("contextmenu", randomPosition)

function randomPosition() {
	wrapper.style.left = Math.random() * windowInnerWidth + 'px';
	wrapper.style.top = Math.random() * windowInnerHeight + 'px';
	console.log(wrapper.style.left)
	if (wrapper.style.left + 'px' > windowInnerWidth - 100 + 'px') {
		wrapper.style.left = windowInnerWidth - 200 + 'px';
		
	} else if (wrapper.style.left + 'px' < 100 + 'px') {
		wrapper.style.left = 150 + 'px'
		console.log(wrapper.style.left)
	}
	if (wrapper.style.top + 'px' > windowInnerHeight - 150 + 'px') {
		wrapper.style.top = windowInnerHeight - 250 + 'px';
	} else if (wrapper.style.top + 'px' < 150 + 'px') {
		wrapper.style.top = 150 + 'px'
	}
}