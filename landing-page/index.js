const productItems = document.querySelectorAll('.product-item');

// About Functionalities
const aboutDescription = document.getElementById('about-text-description');
const aboutBtnShowMore = document.getElementById('btn-show-more')
const truncateIcon = document.getElementById('truncate');
const form = document.getElementById('contact-form');
const txtFieldFullName = document.getElementById('full-name');
const txtEmailField = document.getElementById('email');
const txtMessageField = document.getElementById('message');
const EMAIL_PATTERN = /^[a-zA-Z0-9._%+-]+@(gmail\.com|impactville\.com)$/i;

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

form.addEventListener('submit', (e) => {

    e.preventDefault();

    if (!txtFieldFullName.value) {

        txtFieldFullName.classList.add('error-field')
    }

    if (!txtEmailField.value || !EMAIL_PATTERN.test(txtEmailField.value)) {

        txtEmailField.classList.add('error-field')
    }
});

txtFieldFullName.addEventListener('keydown', () => {

    txtFieldFullName.classList.remove('error-field');
})

txtEmailField.addEventListener('keydown', () => {

    txtEmailField.classList.remove('error-field');
})
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
