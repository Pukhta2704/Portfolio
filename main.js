const nav = document.querySelector('.nav');
const navToggler = document.querySelector('.nav-toggler ');
const navListItems = document.querySelectorAll('.nav-list-item');
const modelOpener = document.querySelector('.model-opener-icon');
const modelCloser = document.querySelector('.model-closer-icon');

navToggler.addEventListener('click', () => {
	nav.classList.toggle('open');
	navToggler.classList.toggle('open');
	navListItems.forEach((item) => {
		item.classList.toggle('open');
	});
});
modelOpener.addEventListener('click', () => {
	document.querySelector('.projects-model').classList.toggle('model-open');
});
modelCloser.addEventListener('click', () => {
	console.log('s');
	document.querySelector('.projects-model').classList.toggle('model-open');
});
