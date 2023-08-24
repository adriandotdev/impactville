const productItems = document.querySelectorAll('.product-item');
const aboutImages = document.querySelectorAll('.about-img');

const navbar = document.getElementById('navbar')

// About Functionalities
const aboutDescription = document.getElementById('about-text-description');
const aboutBtnShowMore = document.getElementById('btn-show-more')
const truncateIcon = document.getElementById('truncate');

// Form Functionalities
const form = document.getElementById('contact-form');

// Animate all of the product images.
function animateProductItems() {

    productItems.forEach(item => {

        const itemTop = item.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (itemTop < windowHeight) {
            item.style.opacity = 1;
        } else {
            item.style.opacity = 0;
        }
    });
}

// Animate all of the about images.
function animateAboutImages() {
    aboutImages.forEach(item => {

        const itemTop = item.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (itemTop < windowHeight) {
            item.style.opacity = 1;
        } else {
            item.style.opacity = 0;
        }
    });
}

let isAboutDescriptionExpanded = false;

aboutBtnShowMore.addEventListener('click', () => {

    if (isAboutDescriptionExpanded) {
        aboutBtnShowMore.textContent = 'Read More';
        aboutDescription.style.maxHeight = '70px';
        aboutDescription.style.overflow = 'hidden';
        isAboutDescriptionExpanded = false;
        truncateIcon.style.display = 'block';
    }
    else {
        aboutBtnShowMore.textContent = 'Show Less';
        aboutDescription.style.maxHeight = 'max-content';
        aboutDescription.style.overflow = 'auto';
        isAboutDescriptionExpanded = true;
        truncateIcon.style.display = 'none';
    }
});

form.addEventListener('submit', (e) => {

    e.preventDefault();
});

// Scroll event
let isScrolling = false;
window.addEventListener('scroll', () => {

    if (window.scrollY >= 50) {
        navbar.style.background = '#171717';
        navbar.classList.remove('pt-2');
        navbar.classList.add('p-0', 'pb-2');
    }
    else {
        navbar.style.background = 'transparent';
        navbar.classList.remove('p-0');
        navbar.classList.add('pt-2');
    }
    if (!isScrolling) {
        window.requestAnimationFrame(() => {
            animateProductItems();
            animateAboutImages();
            isScrolling = false;
        });
        isScrolling = true;
    }
});
