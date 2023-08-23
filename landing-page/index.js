const productItems = document.querySelectorAll('.product-item');

// About Functionalities
const aboutDescription = document.getElementById('about-text-description');
const aboutBtnShowMore = document.getElementById('btn-show-more')
const truncateIcon = document.getElementById('truncate');

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

// Scroll event
let isScrolling = false;
window.addEventListener('scroll', () => {
    if (!isScrolling) {
        window.requestAnimationFrame(() => {
            animateProductItems();
            isScrolling = false;
        });
        isScrolling = true;
    }
});