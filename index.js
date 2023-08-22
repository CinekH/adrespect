const elem = document.getElementById('photos');
let msnry = new Masonry(elem, {
	// options
	itemSelector: '.photo',
	gutter: 43,
	fitWidth: true,
});

const offerDropdown = document.getElementById('offer-dropdown');

const toggleDropdown = () => {
	offerDropdown.classList.toggle('hidden');
};

const search = document.getElementById('search');
const searchInput = document.getElementById('search-input');

const toggleSearch = () => {
	if (!search.classList.toggle('search-animation')) {
		search.classList.toggle('search-animation-exit');
		searchInput.classList.remove('search-input-animation');
		searchInput.classList.toggle('search-input-animation-exit');
	} else {
		search.classList.remove('search-animation-exit');
		searchInput.classList.remove('hidden');
		searchInput.classList.toggle('search-input-animation');
		searchInput.classList.remove('search-input-animation-exit');
	}
};

const showDivs = (n) => {
	let i;
	const slide = document.getElementsByClassName('slide');
	if (n > slide.length) slideIndex = 1;
	if (n < 1) slideIndex = slide.length;
	for (i = 0; i < slide.length; i++) {
		slide[i].style.display = 'none';
	}
	slide[slideIndex - 1].style.display = 'grid';
};

let slideIndex = 1;
showDivs(slideIndex);

const plusDivs = (n) => {
	showDivs((slideIndex += n));
};

const hiddenPhotos = document.getElementsByClassName('photo-to-hide');
const gradient = document.getElementsByClassName('gradient')[0];

const togglePhotos = () => {
	gradient.classList.toggle('hidden');
	for (const photo of hiddenPhotos) {
		photo.classList.toggle('photo--hidden');
	}
	document
		.getElementById('masonry-button-arrow')
		.classList.toggle('-scale-y-100');
	if (document.getElementById('masonry-button-text').innerText === 'Rozwiń') {
		document.getElementById('masonry-button-text').innerText = 'Zwiń';
	} else {
		document.getElementById('masonry-button-text').innerText = 'Rozwiń';
	}
	msnry = new Masonry(elem, {
		// options
		itemSelector: '.photo',
		gutter: 43,
		fitWidth: true,
	});
};

const menu = document.getElementById('menu');

const toggleMenu = () => {
	menu.classList.toggle('flex');
	menu.classList.toggle('hidden');
};

const scrollToProjects = () => {
	const projects = document.getElementById('projects');
	projects.scrollIntoView({ behavior: 'smooth' }, true);
};

const reveal = () => {
	const reveals = document.querySelectorAll('.reveal');
	for (let i = 0; i < reveals.length; i++) {
		const windowHeight = window.innerHeight;
		const elementTop = reveals[i].getBoundingClientRect().top;
		const elementVisible = 150;
		if (elementTop < windowHeight - elementVisible) {
			reveals[i].classList.add('active');
		} else {
			reveals[i].classList.remove('active');
		}
	}
};

window.addEventListener('scroll', reveal);

reveal();
